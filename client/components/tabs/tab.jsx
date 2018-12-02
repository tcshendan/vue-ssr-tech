import classNames from '../../assets/styles/tab.styl'

export default {
  name: 'Tab',
  props: {
    index: {
      required: true,
      type: [Number, String]
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  computed: {
    active () {
      return false
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    // const classNames = {
    //   tab: true,
    //   active: this.active
    // }
    return (
      <li class={classNames.tab}>
        {tab}
      </li>
    )
  }
}
