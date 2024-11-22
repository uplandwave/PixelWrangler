<footer>
    <a class="git" href="https://github.com/uplandwave/PixelWrangler">Repo</a>
    <span>Streaming data powered by <a href="Watchmode.com">Watchmode.com</a></span>
</footer>

<style>
    footer {
        color: var(--text-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        /* background-color: var(--Background); */
        background-color: var(--blue-off-white);
        z-index: 1000;
        /* border-top: .5px solid var(--Accent_3); */
    }

    a:link, 
    a:visited {
        color: var(--text-color);
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        border-bottom: 2px solid var(--Background);
    }
    .git {
        margin-left: 10px;
    }

    a:hover {
        border-bottom: 2px solid var(--Accent_2);
    }

    span {
        font-size: 12px;
        font-weight: 500;
        margin-right: 10px;
    }
</style>