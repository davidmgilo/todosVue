
var STORAGE_KEY = 'todosvue_token'

export default {
  loggedIn () {
    return !!window.localStorage.getItem(STORAGE_KEY)
  }
}
