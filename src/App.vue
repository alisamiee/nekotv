<template>
    <TheNavbar />

    <main>
        <router-view />
    </main>

    <TheFooter />
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    components: {
        TheNavbar,
        TheFooter
    }
};
</script>

<style scoped>
main {
    flex: 1;
    margin: 2rem auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (max-width: 425px) {
    main {
        width: 98%;
    }
    
}
</style>
