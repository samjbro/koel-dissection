<template>
    <nav class="sidebar">
        <section class="sidebar__section sidebar__section--music">
            <h1 class="sidebar__section-header">Your Music</h1>
            <ul class="sidebar__menu">
                <li class="sidebar__menu-item">
                    <a :class="['sidebar__link sidebar__link--home', currentView === 'home' ? 'sidebar__link--active' : '']"
                       href="#!/home">Home</a>
                </li>
                <li class="sidebar__menu-item">
                    <a :class="['sidebar__link sidebar__link--queue', currentView === 'queue' ? 'sidebar__link--active' : '']"
                       href="#!/queue">Queue</a>
                </li>
                <li class="sidebar__menu-item">
                    <a :class="['sidebar__link sidebar__link--songs', currentView === 'songs' ? 'sidebar__link--active' : '']"
                       href="#!/songs">All Songs</a>
                </li>
                <li class="sidebar__menu-item">
                    <a :class="['sidebar__link sidebar__link--albums', currentView === 'albums' ? 'sidebar__link--active' : '']"
                       href="#!/albums">Albums</a>
                </li>
                <li class="sidebar__menu-item">
                    <a :class="['sidebar__link sidebar__link--artists', currentView === 'artists' ? 'sidebar__link--active' : '']"
                       href="#!/artists">Artists</a>
                </li>
            </ul>
        </section>
    </nav>
</template>

<script>
    import {event} from '@/utils';
    export default {
        data() {
            return {
                currentView: 'home'
            }
        },
        created() {
            event.on(event.names.LOAD_MAIN_CONTENT, view => this.currentView = view);
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";
    .sidebar {
        flex: 0 0 25.6rem;
        background-color: $color-sidebar-bg;
        padding: 22px 0 0;

        &__section {
            margin-bottom: 3.2rem;
        }

        &__section-header {
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 0 1.6rem;
            margin-bottom: 1.2rem;
        }

        &__link {
            display: block;
            height: 3.6rem;
            line-height: 3.6rem;
            padding: 0 1.2rem 0 1.6rem;
            border-left: .4rem solid transparent;

            &--active, &:hover {
                border-left-color: $color-highlight;
                color: $color-link-hovered;
                background: rgba($color-white, .05);
            }
            &:active {
                opacity: .5;
            }

            &:hover {
                border-left-color: darken($color-highlight, 20%);
            }

            &::before {
                content: "";
                display: inline-block;
                width: 2.4rem;
                font-family: FontAwesome;
            }

            &--home::before {
                content: "\f015";
            }
            &--queue::before {
                content: "\f0cb";
            }
            &--songs::before {
                content: "\f001";
            }
            &--albums::before {
                content: "\f152";
            }
            &--artists::before {
                content: "\f130";
            }
        }
    }
</style>