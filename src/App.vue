<template>
    <div class="view">
        <TheNavbar />
        <main>
        </main>
    </div>

    <TheFooter />
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    components: {
        TheNavbar,
        TheFooter,
    }
};
</script>

<style scoped>
.view {
    width: 95%;
    max-width: 1800px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
    margin: 2rem auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>
