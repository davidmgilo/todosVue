<template>
    <div class="phone-viewport">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">Todos</h2>
      </md-toolbar>

      <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
          <md-avatar v-if="logged">
            <img src="./assets/logo.png" alt="Avatar">
          </md-avatar>

          <div class="md-toolbar-container">
            <h3 class="md-title">Todos</h3>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item @click="toggleLeftSidenav">
            <md-icon>move_to_inbox</md-icon>
            <router-link to="/todos">Todos</router-link>

          </md-list-item>

          <md-list-item @click="toggleLeftSidenav">
            <md-icon>send</md-icon>
            <router-link to="/tokens">Tokens</router-link>
          </md-list-item>

          <md-list-item @click="toggleLeftSidenav">
            <md-icon>send</md-icon>
            <router-link to="/device">Device</router-link>
          </md-list-item>

          <md-list-item @click="toggleLeftSidenav">
            <md-icon>send</md-icon>
            <router-link to="/contacts">Contactes</router-link>
          </md-list-item>

          <md-list-item @click="toggleLeftSidenav">
            <md-icon>send</md-icon>
            <router-link to="/cordova">Cordova</router-link>
          </md-list-item>

          <md-list-item @click="toggleLeftSidenav">
            <md-icon>send</md-icon>
            <router-link to="/profile">Profile</router-link>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item @click="toggleLeftSidenav">
            <md-icon>send</md-icon>
            <router-link to="/login">Login/Logout</router-link>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/5" alt="People">
            </md-avatar>

            <span>Abbey Christansen</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>

        </md-list>
      </md-sidenav>

      <router-view @eventLogin="isLogged" @eventLogout="isLogged"></router-view>
    </div>
</template>

<script>
import auth from './auth'
import notifications from './services/notifications'

export default {
  name: 'app',
  created () {
    console.log(window.location.href)
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  data () {
    return {
      logged: false
    }
  },
  methods: {
    onDeviceReady () {
      console.log('Working on platform: ' + window.device.platform)
      notifications.enable()
    },
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    },
    isLogged () {
      this.logged = auth.loggedIn()
    }
  }
}
</script>

<style>
</style>
