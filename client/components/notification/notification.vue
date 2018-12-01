<template>
  <transition
    name="fade"
    :enter-active-class="$style['fade-enter-active']"
    :leave-active-class="$style['fade-leave-active']"
    :enter="$style['fade-enter']"
    :leave-to-class="$style['fade-leave-to']"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  >
    <div
      :class="$style.notification"
      :style="style"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span :class="$style.content">{{content}}</span>
      <a :class="$style.btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault();
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {},
    clearTimer () {},
    createTimer () {}
  }
}
</script>

<style lang="stylus" module>
.notification
  display flex
  background-color #303030
  color rgba(255, 255, 255, 1)
  align-items center
  padding 20px
  position fixed
  min-width 280px
  box-shadow 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.2)
  flex-wrap wrap
  transition all .3s

  .content
    padding 0

  .btn
    color #ff4081
    padding-left 24px
    margin-left auto
    cursor pointer
</style>


