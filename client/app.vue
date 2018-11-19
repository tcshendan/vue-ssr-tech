<template>
    <div :id="$style.app">
        <div :id="$style.cover"></div>
        <app-header></app-header>
        <!-- <todo></todo> -->
        <router-view />
        <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from './layout/header.vue'
import appFooter from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
    components: {
        appHeader,
        appFooter,
        Todo,
    }
}
</script>

<style lang="stylus" module>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0

#cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity 0.9
    z-index -1
</style>
