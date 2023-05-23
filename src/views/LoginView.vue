<template>
    <div class="wrapper">
        <div class="container">
            <p id="success-message">placeholder text</p>
            <p id="error-message">placeholder text</p>
            <form action="">
                <h2>Login</h2>

                <label for="username"
                >Username:
                    <input
                        type="text"
                        name="username"
                        id="username"

                    />
                </label>
                <label for="pass"
                >Password:
                    <div class="password-container">
                        <input
                            type="password"
                            name="pass"
                            id="password"
                        />
                        <i class="fa-solid fa-eye" id="toggle-password"></i>
                    </div>
                </label>
                <input type="submit" value="Login" @click.prevent="" />
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 90vw;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.message {
    margin: 1rem;
    padding: 0;
    font-size: 5rem;
    font-weight: 700;
}

form {
    width: 100%;
    background-color: var(--color-surface);
    color: var(--color-white);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 0.8rem;
    margin: 0;
    padding: 30px 20px;
    border: 2px solid var(--color-accent);
    border-radius: 20px;
}

form h2 {
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    margin: 0 0 0.5rem;
    text-align: center;
}

form hr {
    width: 100%;
    border: 0.15rem dashed var(--color-disabled);
    margin: 1rem 0;
}

label {
    font-weight: 700;
    font-size: 1.2rem;
    flex: 1 1 400px;
}

input[type='text'],
input[type='password'],
input[type='number'] {
    display: block;
    width: 100%;
    height: 2.5rem;
    margin-top: 0.5rem;
    padding: 0 1rem;
    background-color: var(--color-background);
    border: 0;
    border-radius: 20px;
    color: var(--text);
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
}

input[type='text']:focus,
input[type='password']:focus,
input[type='number'] {
    outline: none;
    border-bottom: 2px solid var(--color-button-primary);
}

input:disabled {
    opacity: 0.8;
}

.password-container {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
}

.checkbox {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    cursor: pointer;
}

#password {
    margin: 0;
}

#toggle-password {
    margin-left: -100%;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--subtext0);
}

input[type='submit'] {
    height: 2.5rem;
    flex: 1 0 100%;
    color: var(--blue);
    background-color: var(--color-surface);
    border: 2px solid var(--color-accent);
    border-radius: 20px;
    padding: 0 30px;
    font-size: 1.5rem;
    margin-top: 0.5rem;
}

input[type='submit']:hover {
    background-color: var(--color-accent);
    color: var(--mantle);
    cursor: pointer;
}

#success-message,
#error-message {
    /* display: none; */
    background-color: #40c960;
    color: var(--color-disabled);
    width: 100%;
    margin: 0 0 0.5rem;
    padding: 1rem;
    border-radius: 20px;
}

#error-message {
    background-color: #d13845;
    color: var(--color-white);
}


@media only screen and (min-width: 420px) {
    h1 {
        font-size: 2rem;
    }
    form h2 {
        font-size: 1.7rem;
    }
}

@media only screen and (min-width: 768px) {
    .container {
        width: 50vw;
    }
    main {
        height: 100%;
    }
}


@media only screen and (min-width: 1000px) {
    .container {
        width: 30vw;
    }
}

@media only screen and (min-width: 2048px) {
    .container {
        width: 20vw;
    }

    label {
        flex-basis: 70%;
    }
}

</style>
