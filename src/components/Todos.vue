<template>
    <div>
        <div v-show="!authorized">
            <md-button class="md-raised md-primary" @click="connect()">Connect</md-button>
        </div>
        <div v-show="authorized">
            <md-button class="md-raised md-primary" @click="logout">Logout</md-button>
        </div>

        <md-table v-once v-show="authorized">
            <md-table-header>
                <md-table-row>
                    <md-table-head>#</md-table-head>
                    <md-table-head>Name</md-table-head>
                    <md-table-head>Priority</md-table-head>
                    <md-table-head>Done</md-table-head>
                </md-table-row>
            </md-table-header>

            <md-table-body>
                <md-table-row v-for="(todo, index) in todos">
                    <md-table-cell>{{index + from}}</md-table-cell>
                    <md-table-cell>{{todo.name}}</md-table-cell>
                    <md-table-cell>{{todo.priority}}</md-table-cell>
                    <md-table-cell>{{todo.done}}</md-table-cell>
                </md-table-row>
            </md-table-body>

            <!--<md-table-pagination-->
                    <!--md-size="0"-->
                    <!--:md-total="total"-->
                    <!--md-page="1"-->
                    <!--md-label="Rows"-->
                    <!--md-separator="of"-->
                    <!--:md-page-options="[5, 10, 25, 50]"-->
                    <!--@pagination=""></md-table-pagination>-->
        </md-table>

        <!--<ul v-show="authorized">-->
            <!--<li v-for="(todo, index) in todos">-->
                <!--{{ todo.name }}-->
            <!--</li>-->
        <!--</ul>-->
    </div>ss
</template>
<style>
</style>
<script>
// Local storage: Session Storage

var STORAGE_KEY = 'todosvue_token'
var AUTH_CLIENT_ID = '4'
var AUTH_REDIRECT_URI = 'http://localhost:8095/todos'

export default{
  data () {
    return {
      todos: [],
      authorized: false,
      token: null,
      from: 0,
      to: 0,
      total: 0,
      perPage: 0,
      page: 1
    }
  },
  created () {
    var token = this.extractToken(document.location.hash)
    if (token) this.saveToken(token)
    if (this.token == null) {
      this.token = this.fetchToken()
    }

    if (this.token) {
      this.authorized = true
      this.fetchData()
    } else {
      this.authorized = false
    }
  },
  methods: {
    fetchData: function () {
      return this.fetchPage(1)
    },
    fetchPage: function (page) {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.token

      this.$http.get('http://todos.dev:8080/api/v1/task?page=' + page).then((response) => {
        console.log(response.data)
        this.todos = response.data.data
        this.from = response.data.from
        this.to = response.data.to
        this.total = response.data.total
        this.perPage = response.data.per_page
      }, (response) => {
        console.log(response.data)
        // TODO only if HTTP response code is 401
        // TODO mostrar amb una bona UI/UE error -> sweetalert
        // this.authorized = false
      })
    },
    connect: function () {
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
    },
    logout: function () {
      window.localStorage.removeItem(STORAGE_KEY)
      this.authorized = false
    },
    fetchToken: function () {
      return window.localStorage.getItem(STORAGE_KEY)
    },
    saveToken: function (token) {
      window.localStorage.setItem(STORAGE_KEY, token)
    },
    extractToken: function (hash) {
      var match = hash.match(/access_token=(\w+)/)
      return !!match && match[1]
    }
  }
}
</script>
