<template>
    <MainCarousel />
    <CardGallery gallery-name="Top">
        <CardItem card-title="Attack On Titan" img-url="/posters/134102l.jpg" episode-count="12" />
        <CardItem card-title="Attack On Titan" img-url="/posters/134102l.jpg" episode-count="12" />
        <CardItem card-title="Attack On Titan" img-url="/posters/134102l.jpg" episode-count="12" />
        <CardItem card-title="Attack On Titan" img-url="/posters/134102l.jpg" episode-count="12" />
        <CardItem card-title="Attack On Titan" img-url="/posters/134102l.jpg" episode-count="12" />
        <CardItem card-title="Attack On Titan" img-url="/posters/134102l.jpg" episode-count="12" />
    </CardGallery>
</template>

<script>
import MainCarousel from '@/components/MainCarousel.vue';
import CardGallery from '@/components/CardGallery.vue';
import CardItem from '@/components/CardItem.vue';

export default {
    components: {
        MainCarousel,
        CardGallery,
        CardItem
    }
};
</script>

<style scoped></style>
