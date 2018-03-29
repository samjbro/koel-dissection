<template>
    <div class="sound-bars">
        <img class="sound-bars__image" src="images/bars.gif" alt="Sound bars">
    </div>
</template>

<style lang="scss">
    .sound-bars {
        height: 1.8rem;
        width: 3rem;
        position: relative;
        display: inline-block;
        backface-visibility: hidden;
        margin-bottom: -.5rem;

        &__image {
            height: 1.3rem;
        }
    }
</style>