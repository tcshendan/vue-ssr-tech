import model from '../../model/client-model'
import notify from '../../components/notification/function'
import bus from '../../util/bus'

const handleError = (err) => {
  // handle error
  if (err.code === 401) {
    notify({
      content: '你需要先登录'
    })
    bus.$emit('auth')
  }
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
    commit('startLoading')
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
        commit('endLoading')
      }).catch(err => {
        handleError(err)
        commit('endLoading')
      })
  },
  addTodo ({ commit }, todo) {
    commit('startLoading')
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: '你又多了一件事要做'
        })
        commit('endLoading')
      }).catch(err => {
        handleError(err)
        commit('endLoading')
      })
  },
  updateTodo ({ commit }, { id, todo }) {
    commit('startLoading')
    model.updateTodo(id, todo)
      .then(data => {
        commit('updateTodo', { id, todo: data })
        commit('endLoading')
      }).catch(err => {
        handleError(err)
        commit('endLoading')
      })
  },
  deleteTodo ({ commit }, id) {
    commit('startLoading')
    model.deleteTodo(id)
      .then(data => {
        commit('deleteTodo', id)
        notify({
          content: '你又少了一件事要做'
        })
        commit('endLoading')
      }).catch(err => {
        handleError(err)
        commit('endLoading')
      })
  },
  deleteAllCompleted ({ commit, state }) {
    commit('startLoading')
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('deleteAllCompleted')
        notify({
          content: '清理一下'
        })
        commit('endLoading')
      }).catch(err => {
        handleError(err)
        commit('endLoading')
      })
  },
  login ({ commit }, { username, password }) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: '登录成功'
          })
          resolve()
          commit('endLoading')
        }).catch(err => {
          handleError(err)
          reject(err)
          commit('endLoading')
        })
    })
  }
}
