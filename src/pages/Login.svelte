<script>
  import { route, user } from "../stores";
  import { supabase } from "../supabaseClient";
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let message = "";

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error.message);
    } else {
      // console.log("Logout successful");
      message = "You have been logged out.";
      user.set(null);
      route.set("#login");
    }
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("Login error:", error.message);
      message = error.message;
    } else {
      // console.log("Login successful:", data);
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
      // console.log("Sign-up successful:", data);
      message = "Sign-up successful!";
      user.set(data.user);

      // clear form fields
      email = "";
      password = "";

      // navigate to home page
      route.set("#home");
    }
  };

  onMount(() => {
    if ($user) {
      logout();
    }
  });
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
    align-items: top;
    height: 85vh;
    background-color: var(--Background); /* Optional background color */
    padding: 0 1rem 1rem 1rem;
  }

  .login-form {
    margin-top: var(--margin-top-page-standard);
    width: 400px;
    background-color: var(--Background);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px var(--Shadow);
    height: fit-content;
  }

  h2 {
    margin-top: 0;
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
