<template>
    <div :id="$style.app">
        <div :id="$style.cover"></div>
        <div :id="$style.loading" v-show="loading">
          <loading></loading>
        </div>
        <app-header></app-header>
        <!-- <p>{{fullName}} {{counter}}</p>
        <router-link to="/app">app</router-link>
        <router-link to="/login">login</router-link> -->
        <!-- <todo></todo> -->
        <transition
          name="fade"
          :enter-active-class="$style['fade-enter-active']"
          :leave-active-class="$style['fade-leave-active']"
          :enter="$style['fade-enter']"
          :leave-to-class="$style['fade-leave-to']"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
        <!-- <button @click="notify">click me</button> -->
        <!-- <notification content="test notify"></notification> -->
        <app-footer></app-footer>
    </div>
</template>

<script>
import {
  mapState
  // mapGetters,
  // mapActions,
  // mapMutations
} from 'vuex'
import appHeader from './layout/header.vue'
import appFooter from './layout/footer.jsx'
import Loading from './components/loading/loading.vue'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'Jokcy\'s Todo App'
  },
  components: {
    appHeader,
    appFooter,
    Loading
    // Todo,
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // this['a/updateText']('123')
    // this['a/add']()
    // this['b/testAction']()
    // this.$store.state.count = 3
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  methods: {
    // ...mapActions(['updateCountAsync', 'a/add', 'b/testAction']),
    // ...mapMutations(['updateCount', 'a/updateText']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    ...mapState(['loading'])
    // textA () {
    //   return this.$store.state.a.text
    // },
    // ...mapState({
    //   counter: (state) => state.count
    //   // textA: state => state.a.text,
    //   // textC: state => state.c.text
    // }),
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapGetters({
    //   fullName: 'fullName'
    //   // textPlus: 'a/textPlus'
    // })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
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

#loading
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(255, 255, 255, .3)
    z-index 99
    display flex
    align-items center
    justify-content center

.fade-enter-active, .fade-leave-active
    transition opacity .5s

.fade-enter, .fade-leave-to
    opacity 0
</style>
