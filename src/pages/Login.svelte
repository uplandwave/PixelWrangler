<script>
    let username = "";
    let password = "";

    function handleSignIn() {
        const creds = { username, password };
        console.log(creds);
    }
    function handleSignUp() {
        const creds = { username, password };
        console.log(creds);
    }
</script>

<h1>Login</h1>

<!-- Login Form -->
<form action="" id="loginForm" class="login-form" on:submit|preventDefault={handleSignIn} >

        <label for="username">Username</label>
        <input type="text" name="username" id="username" bind:value={username}>

        <label for="password">Password</label>
        <input type="password" name="password" id="password" bind:value={password}>

    <div class="log-buttons">
        <button type="submit">Signin</button>
        <button type="button" on:click={handleSignUp}>Signup</button>
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