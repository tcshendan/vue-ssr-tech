<template>
    <div id="app">
        <div id="cover"></div>
        <app_Header></app_Header>
        <todo></todo>
        <app_Footer></app_Footer>
    </div>
</template>

<script>
import App_Header from './layout/header.vue'
import App_Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
    components: {
        App_Header,
        App_Footer,
        Todo,
    }
}
</script>

<style lang="stylus" scoped>
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
