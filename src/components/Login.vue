<template>
    <md-card>
        <md-card-header>
            <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
                <md-button class="md-raised md-primary" @click.native="login" v-show="!authorized">Login</md-button>
                <md-button class="md-raised md-primary" @click.native="initlogout" v-show="authorized">Logout</md-button>
        </md-card-content>

        <md-dialog-confirm
                md-title="Logout"
                md-content="Are you sure you want to logout?"
                md-ok-text="Ok"
                md-cancel-text="Cancel"
                @close="onCloseSureToLogout"
                ref="sureToLogout">
        </md-dialog-confirm>
    </md-card>

</template>
<style>
</style>
<script>
import todosVue from '../todosVue'
import notif from '../services/notifications'
export default{
  data () {
    return {
      authorized: false
    }
  },
  created () {
    if (document.location.hash) var token = this.extractToken(document.location.hash)
    if (token) {
      this.saveToken(token)
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.fetchToken()
      notif.enable()
    }
    if (this.token == null) {
      this.token = this.fetchToken()
    }

    if (this.token) {
      this.authorized = true
      this.$emit('eventLogin')
    }
  },
  methods: {
    extractToken: function (hash) {
      return hash.match(/#(?:access_token)=([\S\s]*?)&/)[1]
    },
    saveToken: function (token) {
      window.localStorage.setItem(todosVue.STORAGE_KEY, token)
    },
    fetchToken: function () {
      return window.localStorage.getItem(todosVue.STORAGE_KEY)
    },
    logout: function () {
      window.localStorage.removeItem(todosVue.STORAGE_KEY)
      this.authorized = false
      this.$emit('eventLogout')
    },
    login: function () {
      console.log('Do connect here!')
     // var query = 'client_id=' + AUTH_CLIENT_ID + '&redirect_uri=' + window.location + '&response_type=token&scope='
      query = {
        client_id: todosVue.AUTH_CLIENT_ID,
        redirect_uri: todosVue.AUTH_REDIRECT_URI,
        response_type: 'token',
        scope: ''

      }
      var query = window.querystring.stringify(query)
      if (window.cordova && window.device.platform !== 'browser') {
        var oAuthWindow = window.cordova.InAppBrowser.open('http://todosbackend.davidmartinez.2dam.acacha.org:8080/oauth/authorize?' + query, '_blank', 'location=yes')
        var login = this
        oAuthWindow.addEventListener('loadstart', function (e) {
          var url = e.url
          var hash = null
          if (url.split('#')[1]) {
            hash = url.split('#')[1]
          }
          if (hash) {
            var accessToken = login.extractToken('#' + String(hash))
            if (accessToken) {
              login.saveToken(accessToken)
              login.authorized = true
              oAuthWindow.close()
            }
          }
        })
      } else {
        console.log('http://todosbackend.davidmartinez.2dam.acacha.org:8080/oauth/authorize?' + query)
        window.location.replace('http://todosbackend.davidmartinez.2dam.acacha.org:8080/oauth/authorize?' + query)
      }
    },
    initlogout: function () {
      this.openDialog('sureToLogout')
    },
    openDialog: function (ref) {
      this.$refs[ref].open()
    },
    onCloseSureToLogout: function (type) {
      if (type === 'ok') this.logout()
    }
  }
}
</script>