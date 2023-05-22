import { defineStore } from 'pinia';
import showInfo from '@/assets/showinfo.json';

export const useInfoStore = defineStore('info', {
    state: () => ({
        shows: showInfo
    }),
    getters: {
        getShow: (state) => {
            return (showId) => state.shows.find(({ id }) => id === showId);
        }
    }
});
