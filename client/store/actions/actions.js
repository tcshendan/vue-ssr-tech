import model from '../../model/client-model'

const handleError = () => {
  // handle error
}

export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  }
}
