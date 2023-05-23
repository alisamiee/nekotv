<template>
    <header>
        <nav>
            <router-link :to="{name: 'home'}" class="brand">
                <IconLogo class="logo" />
                <h1>NekoTV</h1>
            </router-link>
            <div>
                <IconSearch class="icon" />
                <IconBell class="icon" />
                <IconSun @click="toggleTheme" class="icon" />
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
        IconSun
    },
    methods: {
        setTheme(theme) {
            localStorage.setItem('user-theme', theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },
        toggleTheme() {
            const activeTheme = localStorage.getItem('user-theme');
            if (activeTheme === 'light-theme') {
                this.setTheme('dark-theme');
            } else {
                this.setTheme('light-theme');
            }
        },
        getMediaPreference() {
            const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return hasDarkPreference ? 'dark-theme' : 'light-theme';
        },
        getTheme() {
            return localStorage.getItem('user-theme');
        }
    },
    mounted() {
        const initUserTheme = this.getTheme() || this.getMediaPreference();
        this.setTheme(initUserTheme);
    }
};
</script>

<style scoped>
nav {
    position: fixed;
    width: 95%;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    background-color: var(--color-surface);
    color: var(--color-icon);
    margin: 1rem auto;
    padding: 0.8rem;
    padding-right: 1.5rem;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 10px 0px var(--color-shadow);
    -webkit-box-shadow: 0px 0px 10px 0px var(--color-shadow);
    -moz-box-shadow: 0px 0px 10px 0px var(--color-shadow);
}

a {
    color: var(--color-icon);
}

.logo {
    height: 3rem;
    width: auto;
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
}

nav>div,
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

@media (max-width: 425px) {
    nav {
        width: 99%;
    } 
}
</style>
