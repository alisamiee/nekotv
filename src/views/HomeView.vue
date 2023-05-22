<template>
    <MainCarousel />
    <CardGallery gallery-name="Top">
        <CardItem
            v-for="(show, index) in infoStore.shows"
            :key="index"
            :show="show"
        />
    </CardGallery>
</template>

<script>
import { mapStores } from 'pinia';
import { useInfoStore } from '@/stores/InfoStore';
import MainCarousel from '@/components/MainCarousel.vue';
import CardGallery from '@/components/CardGallery.vue';
import CardItem from '@/components/CardItem.vue';

export default {
    components: {
        MainCarousel,
        CardGallery,
        CardItem
    },
    computed: {
        ...mapStores(useInfoStore)
    }
};
</script>

<style scoped></style>
