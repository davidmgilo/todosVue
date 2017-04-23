<template>
    <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
            <label>Model</label>
            <md-input v-model="model" readonly></md-input>
        </md-input-container>
        <md-input-container>
            <label>Platform</label>
            <md-input v-model="platform" readonly></md-input>
        </md-input-container>
        <md-input-container>
            <label>Uuid</label>
            <md-input v-model="uuid" readonly></md-input>
        </md-input-container>
        <md-input-container>
            <label>Version</label>
            <md-input v-model="version" readonly></md-input>
        </md-input-container>
        <md-input-container>
            <label>Manufacturer</label>
            <md-input v-model="manufacturer" readonly></md-input>
        </md-input-container>
        <md-input-container>
            <label>Is it Virtual?</label>
            <md-input v-model="isVirtual" readonly></md-input>
        </md-input-container>
        <md-input-container>
            <label>Serial</label>
            <md-input v-model="serial" readonly></md-input>
        </md-input-container>
    </form>
</template>
<style>
</style>
<script>
  export default{
    data () {
      return {
        model: '',
        platform: '',
        uuid: '',
        version: '',
        manufacturer: '',
        isVirtual: '',
        serial: ''
      }
    },
    created () {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    methods: {
      onDeviceReady () {
        this.model = window.device.model
        this.platform = window.device.platform
        this.uuid = window.device.uuid
        this.version = window.device.version
        this.manufacturer = window.device.manufacturer
        this.isVirtual = window.device.isVirtual
        this.serial = window.device.serial
      }
    }
  }
</script>