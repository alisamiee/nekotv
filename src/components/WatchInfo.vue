<template>
    <div class="titles">
        <h2>Demon Slayer: Kimetsu no Yaiba</h2>
        <h3>something something japansese</h3>
    </div>
    <div class="show-info">
        <div class="general">
            <div class="image">
                <img src="/cover/aot.jpg" alt="" />
            </div>
            <div class="description">
                It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for
                a living, finds his family slaughtered by a demon. To make matters worse, his
                younger sister Nezuko, the sole survivor, has been transformed into a demon herself.
                Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer”
                so that he can turn his sister back into a human, and kill the demon that massacred
                his family.
            </div>
        </div>
        <div class="details">
            <p><b>Type: </b>TV</p>
            <p><b>Episodes: </b>26</p>
            <p><b>Status: </b>Finished Airing</p>
            <p><b>Aired: </b>Apr 6, 2019 to Sep 28, 2019</p>
            <p><b>Premiered: </b>Spring 2019</p>
            <p><b>Broadcast: </b>Saturdays at 23:30 (JST)</p>
            <p><b>Producers: </b>Aniplex, Shueisha</p>
            <p><b>Studios: </b>ufotable</p>
            <p><b>Genres: </b>Action, Fantasy</p>
            <p><b>Rating: </b>R - 17+ (violence & profanity)</p>
            <p><b>Score: </b>8.51</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.titles h2 {
    font-size: 2.4rem;
}

.titles h3 {
    font-size: 1.3rem;
    opacity: 0.9;
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

@media (max-width: 567px) {
    .image {
        display: none;
    }
}
</style>
