<template>
    <div>
        <md-card>
            <md-card-header>
                <div class="md-title">Vibration</div>
            </md-card-header>

            <md-card-actions>
                <md-button @click.native="startVibration">Start</md-button>
                <md-button @click.native="stopVibration">Stop</md-button>
            </md-card-actions>

            <md-snackbar md-position="bottom center" ref="vibrationError" md-duration="4000">
                <span>Oops, vibration funcionality not supported!</span>
            </md-snackbar>
        </md-card>
        <md-card>
            <md-card-header>
                <div class="md-title">Geolocation</div>
            </md-card-header>

            <md-card-actions>
                <md-button @click.native="showLocation">Show me!</md-button>
            </md-card-actions>

            <md-snackbar md-position="bottom center" ref="geolocationError" md-duration="4000">
                <span>Oops, geolocation funcionality not supported!</span>
            </md-snackbar>
        </md-card>
    </div>
</template>
<style>
</style>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    startVibration: function () {
      if (!navigator.vibrate) {
        this.showVibrationError()
        return
      }
      navigator.vibrate([1000, 1000, 3000, 1000, 5000])
    },
    stopVibration: function () {
      if (!navigator.vibrate) {
        this.showVibrationError()
        return
      }
      navigator.vibrate([0])
    },
    showLocation: function () {
      if (!navigator.geolocation) {
        this.showGeoLocationError()
        return
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError)

      function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n')
      }

      function onSuccess(error) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n')
      }
    },
    showGeoLocationError: function () {
      this.$refs.geolocationError.open()
    },
    showVibrationError: function () {
      this.$refs.vibrationError.open()
    }
  }
}
</script>