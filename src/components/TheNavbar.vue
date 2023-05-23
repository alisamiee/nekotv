<template>
    <header>
        <nav>
            <router-link :to="{name: 'home'}" class="brand">
                <IconLogo class="logo" />
                <h1>NekoTV</h1>
            </router-link>
            <div>
                <div class="search-container">
                    <input type="text" class="search-input">
                    <IconSearch class="icon" />
                </div>
                <!-- <IconBell class="icon" /> -->
                <div class="other-icons">
                    <IconSun @click="toggleTheme" class="icon" />
                    <IconLogin class="icon" />
                </div>
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

.icon {
    height: 1.8rem;
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

.search-container {
    display: inline-flex;
    justify-content: flex-end;
    gap: 8px;
    align-items: center;
    position: relative;
    height: 100%;
    margin-left: .5rem;
}

.search-input {
    display: inline-block;
    border-radius: 20px;
    width: 0;
    height: 2rem;
    background-color: var(--color-surface);
    outline: none;
    border: 0 solid transparent;
    transition: all 0.5s ease-in-out;
}

.search-container:hover .search-input,
.search-input:focus {
    width: 80%;
    border: 1px solid var(--color-white);
    color: var(--color-white);
    padding-left: .8rem;
    padding: 0 0.8rem;
}


.search-container + div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}


@media (max-width: 425px) {
    nav {
        width: 99%;
    } 

    .brand h1 {
        display: none;
    }

    .search-container:hover + div,
    nav:has(.search-input:focus) .other-icons {
        display: none;
    }

}
</style>
