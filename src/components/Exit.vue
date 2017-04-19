<template></template>
<style>
</style>
<script>
    export default{
      created () {
        document.addEventListener('deviceready', this.onDeviceReady, false)
      },
      methods: {
        onDeviceReady () {
          navigator.notification.confirm(
                        'Do you want to quit?',
                        this.onConfirmQuit,
                        'QUIT',
                        ['OK', 'Cancel']
          )
        },
        onConfirmQuit (button) {
          if (button === '1') {
            if (navigator.app) {
              navigator.app.exitApp()
            } else if (navigator.device) {
              navigator.device.exitApp()
            }
          }
        }
      }
    }
</script>