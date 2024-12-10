<script>
    import { supabase } from "../supabaseClient";
    import { user, route } from "../stores.js";
  
    let message = "";
  
    // Handle Logout
    const logout = async () => {
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        console.error("Logout failed:", error.message);
      } else {
        console.log("Logout successful");
        message = "You have been logged out.";
        user.set(null); // Clear the user from the store
        route.set("#login"); // Navigate to login page
      }
    };
  
    // Navigate to Login Page
    const navigateToLogin = () => {
      route.set("#login");
    };
  </script>
  
  <!-- Auth Toggle Button -->
  {#if $user}
    <button class="auth-button" on:click={logout}>Log Out</button>
  {:else if $route !== "#login"}
    <button class="auth-button" on:click={navigateToLogin}>Log In</button>
  {/if}
  
  <!-- Optional Message Display -->
  <!-- <p class="message">{message}</p> -->
  
  <style>
    .auth-button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      background-color: var(--text-color);
      color: var(--Background);
      cursor: pointer;
    }
  
    .auth-button:hover {
      background-color: var(--Accent_1);
    }
  
    /* .message {
      margin-top: 10px;
      font-size: 0.9rem;
      color: var(--text-color);
    } */
  </style>
  