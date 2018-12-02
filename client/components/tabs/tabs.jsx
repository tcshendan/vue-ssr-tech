import styles from '../../assets/styles/tab.styl'

export default {
  name: 'Tabs',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  render () {
    return (
      <div>
        <ul class={styles['tabs-header']}>
          {this.$slots.default}
        </ul>
      </div>
    )
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  }
}
