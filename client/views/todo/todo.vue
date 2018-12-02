<template>
    <section :class="$style['real-app']">
        <div :class="$style['tab-container']">
          <tabs :value="tabValue" @change="handleChangeTab">
            <tab label="tab1" index="1"></tab>
            <tab index="2"><span slot="label" style="color: red;">tab2</span></tab>
            <tab label="tab3" index="3"></tab>
          </tabs>
        </div>
        <input
            type="text"
            :class="$style['add-input']"
            autofocus="autofocus"
            placeholder="接下去要做什么？"
            @keyup.enter="addTodo"
        >
        <item
            v-for="todo in filteredTodos"
            :key="todo.id"
            :todo="todo"
            @del="deleteTodo"
        ></item>
        <helper
            :filter="filter"
            :todos="todos"
            @toggle="toggleFilter"
            @clearAllCompleted="clearAllCompleted"
        ></helper>
        <!-- <router-view></router-view> -->
    </section>
</template>

<script>
import Item from './item.vue'
import Helper from './tabs.vue'

let id = 0

export default {
    metaInfo: {
      title: 'The Todo App'
    },
    beforeRouteEnter (to, from, next) {
        console.log('todo before enter', this)
        next(vm => {
          console.log('after enter vm.id is ', vm.id)
        })
    },
    beforeRouteUpdate (to, from, next) {
        console.log('todo before update')
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log('todo before leave')
        // if (global.confirm('are you sure?')) {
        //   next()
        // }
        next()
    },
    // props: ['id'],
    mounted () {
      console.log('todo mounted')
    },
    data() {
        return {
            todos: [],
            filter: 'all',
            tabValue: '1'
        }
    },
    components: {
        Item,
        Helper,
    },
    computed: {
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            }

            const completed = this.filter === 'completed'

            return this.todos.filter(todo => todo.completed === completed)
        }
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            })

            e.target.value = ''
        },
        deleteTodo(id) {
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        },
        toggleFilter(state) {
            this.filter = state
        },
        clearAllCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed)
        },
        handleChangeTab (value) {
          this.tabValue = value
        }
    }
}
</script>

<style lang="stylus" module>
.real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666

.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 1.4em
    border 0
    outline none
    color inherit
    box-sizing border-box
    padding 16px 16px 16px 60px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.06);

.tab-container
    background-color #fff
    padding 0 15px
</style>

