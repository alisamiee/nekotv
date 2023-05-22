<template>
    <div class="card-gallery">
        <h3>{{ galleryName }}</h3>
        <div class="cards">
            <slot />
        </div>
    </div>
</template>

<script>
import CardItem from './CardItem.vue';

export default {
    components: {
        CardItem
    },
    props: {
        galleryName: String
    }
};
</script>

<style scoped>
.card-gallery {
    width: 100%;
}

.card-gallery h3 {
    font-weight: 300;
    font-size: 2.5rem;
    margin: 1.3rem auto;
}

.cards {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
}
</style>
