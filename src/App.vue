<template>
    <div class="view">
        <TheNavbar />
        <main>
            <MainCarousel/>
        </main>
    </div>

    <TheFooter />
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import MainCarousel from '@/components/MainCarousel.vue';

export default {
    components: {
        TheNavbar,
        TheFooter,
        MainCarousel
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
    margin: auto;
    width: 95%;
    display: flex;
    flex-direction: column;
}
</style>
