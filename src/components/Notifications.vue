<template>
    <div id="notifications">
        <h1>Received notifications: </h1>
        <md-card v-for="(notification, index) in notifications">
            <md-card-header>
                <div class="md-title">{{notification.user.name}}</div>
            </md-card-header>
            <md-card-content>{{notification.message}}</md-card-content>
        </md-card>
    </div>
</template>
<style>
</style>
<script>
  import todosVue from '../todosVue'
  export default{
    data () {
      return {
        notifications: []
      }
    },
    created () {
      this.$http.get(todosVue.GET_MESSAGES_URL).then((response) => {
        this.notifications = response.data
      }, (error) => {
        console.log('error: ' + error)
      })
    }
  }
</script>