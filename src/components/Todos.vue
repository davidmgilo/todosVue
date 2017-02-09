<template>
    <div>
        <md-table-card>

            <md-toolbar>
                <h1 class="md-title">Todos</h1>
                <md-button class="md-icon-button">
                    <md-icon>filter_list</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                </md-button>
            </md-toolbar>

        <md-table>
            <md-table-header>
                <md-table-row>
                    <md-table-head>#</md-table-head>
                    <md-table-head>Name</md-table-head>
                    <md-table-head>Priority</md-table-head>
                    <md-table-head>Done</md-table-head>
                </md-table-row>
            </md-table-header>

            <md-spinner :md-size="150" md-indeterminate  class="md-accent" v-show="connecting" ></md-spinner>

            <md-table-body>
                <md-table-row v-for="(todo, index) in todos">
                    <md-table-cell>{{index + from}}</md-table-cell>
                    <md-table-cell>{{todo.name}}</md-table-cell>
                    <md-table-cell>{{todo.priority}}</md-table-cell>
                    <md-table-cell>
                        <md-switch v-model="todo.done" id="done" name="done" class="md-primary"></md-switch>
                    </md-table-cell>
                </md-table-row>
            </md-table-body>


        </md-table>

            <md-table-pagination
                    :md-size=perPage
                    :md-total=total
                    :md-page=page
                    md-label="Tasks"
                    md-separator="of"
                    :md-page-options="[5, 15, 25, 50]"
                    @pagination="onPagination"></md-table-pagination>

        </md-table-card>

        <!--<ul v-show="authorized">-->
            <!--<li v-for="(todo, index) in todos">-->
                <!--{{ todo.name }}-->
            <!--</li>-->
        <!--</ul>-->
    </div>
</template>
<style>
</style>
<script>
// Local storage: Session Storage

var STORAGE_KEY = 'todosvue_token'

export default{
  data () {
    return {
      todos: [],
      from: 0,
      to: 0,
      total: 0,
      perPage: 0,
      page: 1,
      connecting: true
    }
  },
  created () {
    var that = this
    setTimeout(function () {
      that.fetchData()
    }, 500)
  },
  methods: {
    fetchData: function () {
      return this.fetchPage(1)
    },
    fetchPage: function (page) {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem(STORAGE_KEY)

      this.$http.get('http://todos.dev:8080/api/v1/task?page=' + page).then((response) => {
        this.connecting = false
        console.log(response.data)
        this.todos = response.data.data
        this.from = response.data.from
        this.to = response.data.to
        this.total = response.data.total
        this.perPage = response.data.per_page
      }, (response) => {
        this.connecting = false
        console.log(response.data)
        // TODO only if HTTP response code is 401
        // TODO mostrar amb una bona UI/UE error -> sweetalert
        // this.authorized = false
      })
    },
    onPagination: function () {

    }

  }
}
</script>
