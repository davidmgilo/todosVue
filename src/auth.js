import todosVue from './todosVue'

export default {
  loggedIn () {
    return !!window.localStorage.getItem(todosVue.STORAGE_KEY)
  }
}
