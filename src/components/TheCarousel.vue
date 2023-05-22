<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

        <div v-if="useNav" class="navigate">
            <div>
                <IconLeft class="icon" @click="prevSlide" />
            </div>
            <div>
                <IconRight class="icon" @click="nextSlide" />
            </div>
        </div>

        <div class="pagination">
            <span
                v-for="(slide, index) in slideCount"
                :key="index"
                :class="{ active: index + 1 === currentSlide }"
                @click="goToSlide(index)"
            />
        </div>
    </div>
</template>

<script>
import IconLeft from './icons/IconLeft.vue';
import IconRight from './icons/IconRight.vue';

export default {
    props: {
        useNav: {
            type: Boolean,
            default: false
        }
    },
    components: {
        IconLeft,
        IconRight
    },
    data() {
        return {
            currentSlide: 1,
            slideCount: null,
            autoPlayEnabled: true,
            timeoutMiliSeconds: 5000
        };
    },
    mounted() {
        this.slideCount = document.querySelectorAll('.slide').length;

        if (this.autoPlayEnabled) {
            this.autoPlay();
        }
    },
    methods: {
        nextSlide() {
            if (this.currentSlide === this.slideCount) {
                this.currentSlide = 1;
                return;
            }
            this.currentSlide += 1;
        },
        prevSlide() {
            if (this.currentSlide === 1) {
                this.currentSlide = this.slideCount;
                return;
            }
            this.currentSlide -= 1;
        },
        goToSlide(index) {
            this.currentSlide = index + 1;
        },
        autoPlay() {
            setInterval(() => {
                this.nextSlide();
            }, this.timeoutMiliSeconds);
        }
    }
};
</script>

<style scoped>
.navigate {
    padding: 0 1rem;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: var(--color-accent);
    color: var(--color-white)
}

.pagination {
    position: absolute;
    bottom: 1.5rem;
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.pagination span {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--color-disabled);
}

.pagination .active {
    background-color: var(--color-accent);
}
</style>
