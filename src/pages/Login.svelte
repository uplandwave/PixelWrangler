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
<h1>This is the Login page</h1>
<h2>Login</h2>
<form action="" on:submit|preventDefault={handleSignIn} >
    <label for="username">Username</label>
    <input type="text" name="username" id="username" bind:value={username}>
    <br>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" bind:value={password}>
    <br>
    <button type="submit">Signin</button>
    <button type="button" on:click={handleSignUp}>Signup</button>
</form>