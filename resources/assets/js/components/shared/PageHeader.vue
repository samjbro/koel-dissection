<template>
    <h1 class="page-header">
        <span class="page-header__title">
            {{title}}
        </span>
    </h1>
</template>

<script>
    export default {
        props: {
            title: {type: String, required: true}
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";
    .page-header {
        font-weight: $font-weight-ultra-thin;
        font-size: 3.2rem;
        padding: 1.2rem 2rem;
        border-bottom: 1px solid $color-bg-secondary;
        min-height: 9.6rem;
        line-height: 9.6rem;

        &__title {
        }
    }
</style>