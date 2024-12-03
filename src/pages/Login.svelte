<script>
  import { supabase } from "../supabaseClient";
  let email = "";
  let password = "";
  let message = '';


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
      password
    });

    if (error) {
      console.log('Login error:', error.message);
      message = error.message;
    } else {
      console.log('Login successful:', data);
      message = 'Login successful!';
    }
  };

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    });
    message = error ? error.message : 'Sign-up successful! Check your email.';
  };
</script>

<h1>Login</h1>

<!-- Login Form -->
<form
  action=""
  id="loginForm"
  class="login-form"
  on:submit|preventDefault={login}
>
  <label for="email">Email</label>
  <input type="text" name="email" id="email" bind:value={email} />

  <label for="password">Password</label>
  <input type="password" name="password" id="password" bind:value={password} />

  <div class="log-buttons">
    <button type="button" on:click={login}>Login</button>
    <button type="button" on:click={signUp}>Sign Up</button>
  </div>
</form>

<style>
  .login-form {
    width: 400px;
  }

  label {
    display: block;
    margin-bottom: 2px;
    margin-top: 5px;
    text-align: left;
    color: var(--text-color);
  }

  input {
    width: 100%;
    display: block;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 1px solid var(--Background);
  }

  button {
    background-color: var(--text-color);
    margin-top: 30px;
    width: 30%;
    padding: 10px;
    border: none;
    color: var(--Background);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: var(--Background);
      background-color: var(--Accent_1);
    }
  }
  button:first-child {
    margin-right: 30px;
  }
</style>
