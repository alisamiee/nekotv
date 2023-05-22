<template>
    <div class="card-holder">
        <div class="card">
            <router-link :to="{ name: 'watch', params: { id: show.id } }">
                <div class="image">
                    <img :src="show.coverImage.local" :alt="show.title.english" />
                    <span v-if="show.type === 'TV'" class="episodes">{{ show.episodes }}</span>
                </div>
                <div class="card-title">{{ show.title.english }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import defaultCover from '@/assets/images/defaultCover.png';

export default {
    props: {
        show: {
            type: Object,
            default(rawProps) {
                return {
                    title: {
                        english: 'Show Title'
                    },
                    type: 'Movie',
                    episodes: '1',
                    coverImage: {
                        local: defaultCover
                    }
                };
            }
        }
    }
};
</script>

<style scoped>
a,
.episodes,
.card-title {
    color: var(--color-white);
}

.card {
    width: 100%;
    background-color: var(--color-surface);
    border-radius: 20px;
    overflow: hidden;
}

.image {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: 140%;
}

.image img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.episodes {
    position: absolute;
    bottom: 2px;
    right: 2px;
    padding: 0.2rem 0.7rem;
    background-color: var(--color-accent);
    border-radius: 20px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-title {
    height: 3rem;
    margin: auto 0.7rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 700;
    font-size: 0.9rem;
}

.card-holder {
    display: flex;
    width: 16.6666666667%;
    padding: 0 8px;
    margin-bottom: 16px;
}

@media (max-width: 1000px) {
    .card-holder {
        width: 20%;
    }
}

@media (max-width: 768px) {
    .card-holder {
        width: 33.3333333333%;
    }
}

@media (max-width: 425px) {
    .card-holder {
        width: 50%;
    }
}

@media (max-width: 1200px) {
    .card-title {
        font-size: 0.8rem;
    }
}
</style>
