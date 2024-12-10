<script>
    import { route } from "../stores";
    import ToggleAuthButton from "../pages/ToggleAuthButton.svelte"; 

</script>

<header>
    <div class="logo">
        <a href="#home"><img src="/Pictures/boom.png" alt="boom-logo" /></a>
    </div>
    <nav>
        <a href="#home" class={ $route == "#home" ? "active" : ""}><div class="underLine"></div>Home</a>
        <a href="#favorites" class={ $route == "#favorites" ? "active" : ""}><div class="underLine"></div>Favorites</a>
        <a href="#search" class={ $route == "#search" ? "active" : ""}><div class="underLine"></div>Search</a>
        <a href="#login" id="left" class={ $route == "#login" ? "active" : ""}><div class="underLine"></div>Login</a>
    </nav>

    <ToggleAuthButton />
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 7px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: var(--Background);
        z-index: 1000;
    }

    .logo {
        position: absolute;
        flex: 0 0 auto;
    }

    .logo img {
        margin-top: 20px;
        width: 180px;
    }

    nav {
        flex: 1 1 auto;
        /* flex: auto; */
        display: flex;
        justify-content: center;
        gap: 20px;
        color: var(--text-color);

        a {
            position: relative;
        }

        a:hover, .active {
        
        .underLine {
            transform: scale(1, 1);
        }
      }
    }

    .underLine {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: var(--Accent_2);
        transform: scale(0, 1);
        transition: all .07s ease-out .02s;
    }

    a:link, 
    a:visited {
        color: var(--text-color);
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
    }

</style>
