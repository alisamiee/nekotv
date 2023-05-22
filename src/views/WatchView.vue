<template>
    <div class="watch-container">
        <div class="player">
            <video src="/video/demo.mp4" controls />
        </div>
        <div class="playlist">
            <ThePlaylist/>
        </div>
    </div>
    <WatchInfo/>
</template>

<script>
import ThePlaylist from '../components/ThePlaylist.vue';
import WatchInfo from '../components/WatchInfo.vue';
export default {
    components: {
        ThePlaylist,
        WatchInfo
    }
};
</script>

<style scoped>
.watch-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 16px;
}

.player,
.playlist {
    border-radius: 20px;
}

.player {
    flex: 4 1 900px;
    overflow: hidden;
}

video {
    width: 100%;
    height: 100%;
}

.playlist {
    flex: 1 3 18%;
    min-height: 120px;
    background-color: var(--color-surface);
}

.playlist {
    overflow: hidden;
}
</style>
