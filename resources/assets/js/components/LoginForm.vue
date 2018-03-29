<template>
    <form @submit.prevent="login" :class="['login-form', failed ? 'login-form--error' : '']">
        <div class="login-form__logo-box">
            <img src="images/logo.svg" alt="" class="login-form__logo">
        </div>
        <input class="login-form__input login-form__input--email" v-model="email" type="email" placeholder="Email Address" autofocus
               required>
        <input class="login-form__input login-form__input--password" v-model="password" type="password" placeholder="Password" required>
        <button class="login-form__submit" type="submit">Log In</button>
    </form>
</template>

<script>
    import {ls} from '@/services';
    import {UserStore} from '@/stores';
    export default {
        data() {
            return {
                email: '',
                password: '',
                failed: false
            }
        },

        mounted() {
          this.url = window.BASE_URL = ls.get('koelHost');
        },

        methods: {
            async login() {
                try {
                    await UserStore.login(this.email, this.password);
                    this.failed = false;
                    this.password = '';
                    this.$emit('loggedin');
                }
                    catch (error)  {
                    console.log(error);
                    this.failed = true;
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";
    @import "~#/abstracts/mixins";

    .login-form {
        width: 28rem;
        padding: 1.8rem;
        background: rgba($color-white, .08);
        border: 1px solid $color-primary;
        border-radius: .8rem;

        &--error {
            animation: shake .5s;
        }

        &__logo-box {
            text-align: center;
            padding: 1rem;
        }
        &__logo {
            width: 15.5rem;
        }
        &__input {
            display: block;
            margin-top: 1.2rem;
            border: 0;
            background: $color-white;
            outline: none;
            width: 100%;
        }
        &__submit {
            display: block;
            margin-top: 1.2rem;
            width: 100%;
        }
    }
</style>