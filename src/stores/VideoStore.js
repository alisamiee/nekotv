import { defineStore } from 'pinia';
import showVideo from '@/assets/showvideo.json';

export const useVideoStore = defineStore('video', {
    state: () => ({
        shows: showVideo
    }),
    getters: {
        getPlaylist: (state) => {
            return (showId) => state.shows.find(({ id }) => id === showId);
        }
    }
});
