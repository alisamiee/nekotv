<template>
    <div class="table">
        <div class="header">
            <p class="number">#</p>
            <p class="title">Title</p>
        </div>
        <div v-for="(episode, index) in getPlaylist(showId).playlist" @click="getVideoUrl(episode.url)" class="row">
            <p class="number">{{ index + 1 }}</p>
            <p class="title">{{ episode.title }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useVideoStore } from '@/stores/VideoStore';

export default {
    props: {
        showId: {
            type: Number,
            required: true
        },
        getVideoUrl: {
            type: Function,
            required: true
        }
    },
    computed: {
        ...mapState(useVideoStore, ['getPlaylist'])
    },
};
</script>

<style scoped>
.table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border: 1px solid var(--color-accent);
    border-radius: 20px;
}

.table p {
    border: 1px solid var(--color-accent);
}

.header,
.row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.header,
.number {
    text-align: center;
}

.header p {
    font-weight: 700;
}

.table .number,
.table .title {
    padding: 0.5rem 0.4rem;
}

.table .number {
    width: 2rem;
}

.table .title {
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.row:nth-child(even) {
    background-color: var(--color-accent);
}

.row:hover {
    background-color: var(--color-button-primary);
}
</style>
