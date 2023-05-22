<template>
    <footer>
        <WavesShape />
        <div>
            <div class="socials">
                <a href="https://discord.com/">
                    <IconDiscord class="icon" />
                </a>
                <a href="https://instagram.com/">
                    <IconInstagram class="icon" />
                </a>
                <a href="https://twitter.com/">
                    <IconTwitter class="icon" />
                </a>
            </div>
            <p>©2023 NekoTV. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
import IconInstagram from './icons/IconInstagram.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconDiscord from './icons/IconDiscord.vue';
import WavesShape from './WavesShape.vue';

export default {
    components: {
        IconDiscord,
        IconInstagram,
        IconTwitter,
        WavesShape
    }
};
</script>

<style scoped>
footer {
    margin-top: auto;
    background-color: var(--color-surface);
    color: var(--color-accent);
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

footer > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.socials {
    gap: 1.5rem;
}

.socials .icon {
    height: 2.5rem;
    margin: 1rem;
}
</style>
