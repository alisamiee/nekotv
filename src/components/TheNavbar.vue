<template>
    <header>
        <nav>
            <div class="brand">
                <IconLogo class="logo" />
                <h1>NekoTV</h1>
            </div>
            <div>
                <IconSearch class="icon" />
                <IconBell class="icon" />
                <IconSun class="icon" />
                <IconLogin class="icon" />
            </div>
        </nav>
    </header>
</template>

<script>
import IconLogo from './icons/IconLogo.vue';
import IconSearch from './icons/IconSearch.vue';
import IconBell from './icons/IconBell.vue';
import IconLogin from './icons/IconLogin.vue';
import IconSun from './icons/IconSun.vue';

export default {
    components: {
        IconBell,
        IconLogo,
        IconSearch,
        IconLogin,
        IconSun,
    }
};
</script>

<style scoped>
nav {
    width: 100%;
    background-color: var(--color-surface);
    color: var(--color-icon);
    margin: 1rem auto;
    padding: 0.8rem;
    padding-right: 1.5rem;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    height: 3rem;
    width: auto;
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
}

nav > div,
.brand {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.brand h1 {
    font-weight: 900;
}

.brand {
    cursor: pointer;
}
</style>
