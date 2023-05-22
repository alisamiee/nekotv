<template>
    <div class="watch-container">
        <div class="player">
            <video :src="videoUrl" controls />
        </div>
        <div class="playlist">
            <ThePlaylist :show-id="+id" :get-video-url="getVideoUrl"/>
        </div>
    </div>
    <WatchInfo :show-id="+id"/>
</template>

<script>
import ThePlaylist from '../components/ThePlaylist.vue';
import WatchInfo from '../components/WatchInfo.vue';
export default {
    components: {
        ThePlaylist,
        WatchInfo
    },
    props: ['id'],
    data() {
        return {
            videoUrl: null
        }
    },
    methods: {
        getVideoUrl(url) {
            this.videoUrl = url;
        }
    },
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
    box-shadow: 0px 0px 10px 0px var(--color-shadow);
    -webkit-box-shadow: 0px 0px 10px 0px var(--color-shadow);
    -moz-box-shadow: 0px 0px 10px 0px var(--color-shadow);
}

.player {
    flex: 4 1 900px;
    overflow: hidden;
    background-color: #000;
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
