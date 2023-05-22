<template>
    <TheCarousel class="carousel" v-slot="{ currentSlide }">
        <TheSlide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-info">
                <div class="info">
                    <h2>{{ slide.title }}</h2>
                    <a :href="slide.link" class="btn">
                        <IconPlay class="icon" />
                        WATCH NOW
                    </a>
                </div>
                <div class="image">
                    <img :src="`/${slide.image}`" :alt="`${slide.title}`" />
                </div>
            </div>
        </TheSlide>
    </TheCarousel>
</template>

<script>
import TheCarousel from '@/components/TheCarousel.vue';
import TheSlide from '@/components/TheSlide.vue';
import IconPlay from '@/components/icons/IconPlay.vue';

export default {
    components: {
        TheCarousel,
        TheSlide,
        IconPlay
    },
    data() {
        return {
            carouselSlides: [
                {
                    title: 'banner 1',
                    image: 'bg-1.png',
                    link: '/1'
                },
                {
                    title: 'banner 2',
                    image: 'bg-2.png',
                    link: '/2'
                },
                {
                    title: 'banner 3',
                    image: 'bg-3.png',
                    link: '/3'
                }
            ]
        };
    }
};
</script>

<style scoped>
.carousel {
    padding-bottom: 40%;
    position: relative;
    width: 100%;
    background: var(--color-surface);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px var(--color-shadow);
    -webkit-box-shadow: 0px 0px 10px 0px var(--color-shadow);
    -moz-box-shadow: 0px 0px 10px 0px var(--color-shadow);
}

.slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.slide-info .image {
    width: 100%;
    height: 100%;
}

.slide-info .info {
    position: absolute;
    left: 0;
    bottom: 15%;
    padding: 1rem;
    width: 50%;
    z-index: 2;
}

.slide-info .info h2 {
    color: var(--color-white);
    font-size: 2rem;
    margin-bottom: 1rem;
}

.slide-info .info .icon {
    height: 1rem;
}

.slide-info .info a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
}

.slide-info img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 600px) {
    /* for mobile phones */
    .carousel {
        padding-bottom: 70%;
    }
}
</style>
