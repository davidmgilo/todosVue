<template>
    <md-card>
        <md-card-header>
            <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
                <md-button class="md-raised md-primary" @click="login" v-show="!authorized">Login</md-button>
                <md-button class="md-raised md-primary" @click="logout" v-show="authorized">Logout</md-button>
        </md-card-content>
    </md-card>

</template>
<style>
</style>
<script>
var STORAGE_KEY = 'todosvue_token'
var AUTH_CLIENT_ID = '4'
var AUTH_REDIRECT_URI = 'http://localhost:8095/login'

export default{
  data () {
    return {
      authorized: false
    }
  },
  created () {
    if (document.location.hash) var token = this.extractToken(document.location.hash)
    if (token) this.saveToken(token)
    if (this.token == null) {
      this.token = this.fetchToken()
    }

    if (this.token) {
      this.authorized = true
    }
  },
  methods: {
    extractToken: function (hash) {
      return hash.match(/#(?:access_token)=([\S\s]*?)&/)[1]
    },
    saveToken: function (token) {
      window.localStorage.setItem(STORAGE_KEY, token)
    },
    fetchToken: function () {
      return window.localStorage.getItem(STORAGE_KEY)
    },
    logout: function () {
      window.localStorage.removeItem(STORAGE_KEY)
      this.authorized = false
    },
    login: function () {
      console.log('Do connect here!')
     // var query = 'client_id=' + AUTH_CLIENT_ID + '&redirect_uri=' + window.location + '&response_type=token&scope='
      query = {
        client_id: AUTH_CLIENT_ID,
        redirect_uri: AUTH_REDIRECT_URI,
        response_type: 'token',
        scope: ''

      }
      var query = window.querystring.stringify(query)
      console.log('http://todos.dev:8080/oauth/authorize?' + query)
      window.location.replace('http://todos.dev:8080/oauth/authorize?' + query)
    }
  }
}
</script>