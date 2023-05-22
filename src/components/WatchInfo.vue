<template>
    <div class="titles">
        <h2>{{ show.title.english }}</h2>
        <h3>{{ show.title.romaji }}</h3>
    </div>
    <div class="show-info">
        <div class="general">
            <div class="image">
                <img :src="show.coverImage.local" :alt="show.title.english" />
            </div>
            <div class="description">
                {{ show.description }}
            </div>
        </div>
        <div class="details">
            <p><b>Type: </b>{{ show.type }}</p>
            <p><b>Episodes: </b>{{ show.episodes }}</p>
            <p><b>Status: </b>{{ show.status === 'FINISHED' ? 'Finished Airing' : 'Ongoing' }}</p>
            <p><b>Aired: </b>{{ getShowAirDatesString(show.startDate, show.endDate) }}</p>
            <p><b>Premiered: </b>{{ `${toTitleCase(show.season)} ${show.seasonYear}` }}</p>
            <p><b>Genres: </b><span class="genre" v-for="(genre, index) in show.genres" :key="index">{{ genre }}</span></p>
            <p><b>Score: </b>{{ (show.averageScore/10).toFixed(1) }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useInfoStore } from '@/stores/InfoStore';

export default {
    props: ['showId'],
    data() {
        return {
            show: {}
        };
    },
    computed: {
        ...mapState(useInfoStore, ['getShow'])
    },
    created() {
        this.show = this.getShow(this.showId);
        console.log(this.show);
    },
    methods: {
        getShowAirDatesString(startDate, endDate) {
            return `${startDate.year}-${startDate.month}-${startDate.day} to ${endDate.year}-${endDate.month}-${endDate.day}`;
        },
        toTitleCase(str) {
            str = str.toLowerCase();
            str = str.charAt(0).toUpperCase() + str.slice(1);
            return str;
        },
    }
};
</script>

<style scoped>
.titles h2 {
    font-size: 2.4rem;
}

.titles h3 {
    font-size: 1.3rem;
    opacity: 0.5;
}

.show-info {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 24px;
    flex-wrap: wrap;
}

.general {
    flex: 4 1 900px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap-reverse;
}

.image {
    flex: 1 5 auto;
    width: 16.6%;
    border-radius: 20px;
    overflow: hidden;
}

.image img {
    width: 100%;
    object-fit: cover;
}

.description {
    flex: 8 1 400px;
    font-size: 1.2rem;
}

.details {
    flex: 1 3 18%;
    line-height: 1.8rem;
}

.genre {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    margin: 0.1rem 0.1rem;
    background-color: var(--color-accent);
    color: var(--color-white);
    border-radius: 20px;
    cursor: pointer;
}

@media (max-width: 567px) {
    .image {
        display: none;
    }
}
</style>
