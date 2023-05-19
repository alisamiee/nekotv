<template>
    <div class="view">
        <TheNavbar />
    </div>

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
.view {
    width: 100%;
    max-width: 1800px;
    margin: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
