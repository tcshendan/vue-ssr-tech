import styles from '../../assets/styles/tab.styl'

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
  mounted () {
    this.$parent.panes.push(this)
  },
  computed: {
    active () {
      return this.$parent.value === this.index
    }
  },
  methods: {
    handleClick () {
      this.$parent.onChange(this.index)
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      [styles.tab]: true,
      [styles.active]: this.active
    }
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    )
  }
}
