<template>
    <div :id="$style.app">
        <div :id="$style.cover"></div>
        <app-header></app-header>
        <router-link to="/app/123">app123</router-link>
        <router-link to="/app/456">app456</router-link>
        <router-link to="/login">login</router-link>
        <!-- <todo></todo> -->
        <transition
          name="fade"
          :enter-active-class="$style['fade-enter-active']"
          :leave-active-class="$style['fade-leave-active']"
          :enter="$style['fade-enter']"
          :leave-to-class="$style['fade-leave-to']"
        >
          <router-view></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from './layout/header.vue'
import appFooter from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    appHeader,
    appFooter,
    // Todo,
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

.fade-enter-active, .fade-leave-active
    transition opacity .5s

.fade-enter, .fade-leave-to
    opacity 0
</style>
