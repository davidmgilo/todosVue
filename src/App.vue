<template>
    <div class="phone-viewport">
      <md-toolbar>
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
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
          <md-list-item>
            <router-link @click.native="toggleLeftSidenav" exact to="/todos"><md-icon>list</md-icon><span>Todos</span></router-link>
          </md-list-item>

          <md-list-item>
            <router-link @click.native="toggleLeftSidenav" exact to="/tokens"><md-icon>redo</md-icon><span>Tokens</span></router-link>
          </md-list-item>

          <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/device"><md-icon>android</md-icon><span>Device</span></router-link>
          </md-list-item>

          <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/contacts"><md-icon>contacts</md-icon><span>Contactes</span></router-link>
          </md-list-item>

          <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/cordova"><md-icon>dns</md-icon><span>Cordova</span></router-link>
          </md-list-item>

          <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/notifications"><md-icon>alarm</md-icon><span>Notifications</span></router-link>
          </md-list-item>

          <md-list-item>
            <router-link @click.native="toggleLeftSidenav" exact to="/profile"><md-icon>face-profile</md-icon><span>Profile</span></router-link>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/login"><md-icon>lock</md-icon><span>Login/Logout</span></router-link>

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

      <transition name="bounce"
                  enter-active-class="animated slideInLeft"
                  leave-active-class="animated slideOutLeft">
        <router-view @eventLogin="isLogged" @eventLogout="isLogged"></router-view>
      </transition>
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
