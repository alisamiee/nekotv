import { defineStore } from 'pinia';
import showInfo from '@/assets/showinfo.json';

export const useInfoStore = defineStore('info', {
    state: () => ({
        shows: showInfo
    }),
})
