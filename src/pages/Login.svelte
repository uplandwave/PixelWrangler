<script>
  import { route, user } from "../stores";
  import { supabase } from "../supabaseClient";
  let email = "";
  let password = "";
  let message = "";

  //   const login = async () => {
  //     const { error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password
  //     });
  //     message = error ? error.message : 'Login successful!';
  //   };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("Login error:", error.message);
      message = error.message;
    } else {
      console.log("Login successful:", data);
      message = "Login successful!";
      user.set(data.user);

      // clear form fields
      email = "";
      password = "";

      // navigate to home page
      route.set("#home");
    }
  };

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error("Sign-up error:", error.message);
      message = error.message;
    } else {
      console.log("Sign-up successful:", data);
      message = "Sign-up successful! Check your email.";
      user.set(data.user); // update Svelte store after sign-up

      // clear form fields
      email = "";
      password = "";

      // navigate to home page
      route.set("#home");
    }
  };
</script>

<!-- Login Form -->
<div class="login-container">
  <form
    action=""
    id="loginForm"
    class="login-form"
    on:submit|preventDefault={login}
  >
    <h2>Login</h2>
    <label for="email">Email</label>
    <input type="text" name="email" id="email" bind:value={email} />

    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      bind:value={password}
    />

    <div class="log-buttons">
      <button type="button" on:click={login}>Login</button>
      <button type="button" on:click={signUp}>Sign Up</button>
    </div>
  </form>
</div>

<style>
  /* Center the login form on the page */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    background-color: var(--Background); /* Optional background color */
    padding: 1rem;
  }

  .login-form {
    width: 400px;
    background-color: white; /* Optional background for the form */
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow for better visuals */
  }

  label {
    display: block;
    margin-bottom: 5px;
    margin-top: 10px;
    text-align: left;
    color: var(--text-color);
  }

  input {
    width: 100%;
    display: block;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--Background);
    margin-bottom: 10px;
  }

  button {
    background-color: var(--Accent_2);
    margin-top: 20px;
    width: 48%;
    padding: 10px;
    border: none;
    color: var(--Background);
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    color: var(--Background);
    background-color: var(--Accent_1);
  }

  button:first-child {
    margin-right: 4%;
  }

  .log-buttons {
    display: flex;
    justify-content: space-between;
  }
</style>
