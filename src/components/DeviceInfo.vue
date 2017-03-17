<template>
    <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
            <label>Model</label>
            <md-input v-model="model" readonly></md-input>
        </md-input-container>
    </form>
</template>
<style>
</style>
<script>
  export default{
    data () {
      return {
        model: ''
      }
    },
    created () {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    methods: {
      onDeviceReady () {
        this.model = window.device.model
      }
    }
  }
</script>