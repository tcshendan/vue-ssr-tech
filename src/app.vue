<template>
    <div id="app">
        <div id="cover"></div>
        <App_Header></App_Header>
        <Todo></Todo>
        <App_Footer></App_Footer>
    </div>
</template>

<script>
import App_Header from './todo/header.vue'
import App_Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
    components: {
        App_Header,
        App_Footer,
        Todo
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
