<template>
    <md-card md-with-hover>
        <md-card-content>
            <form novalidate @submit.stop.prevent="submit">
                <md-input-container>
                    <label>Name</label>
                    <md-input v-model="name"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Number</label>
                    <md-input v-model="numero"></md-input>
                </md-input-container>
            </form>
        </md-card-content>
        <md-card-actions>
            <md-button @click.native="addContact">Add</md-button>
        </md-card-actions>

        <md-snackbar md-position="bottom center" ref="contactError" md-duration="4000">
            <span>Oops, contact funcionality not supported!</span>
        </md-snackbar>

    </md-card>

</template>
<style>
</style>
<script>
export default {
  data () {
    return {
      name: '',
      numero: ''
    }
  },
  methods: {
    addContact: function () {
      if (!navigator.contacts) {
        this.showContactError()
        return
      }
      var contact = navigator.contacts.create({'displayName': this.name})
      console.log(contact)
      var phoneNumbers = []
      phoneNumbers[0] = new window.ContactField('mobile', this.numero, true)
      contact.phoneNumbers = phoneNumbers
      contact.displayName = this.name
      contact.nickname = this.name
      contact.save(contactSuccess, contactError)

      function contactSuccess () {
        window.alert('Contact saved!')
      }

      function contactError (message) {
        window.alert('Error: ' + message)
      }
    },
    showContactError: function () {
      this.$refs.contactError.open()
    }
  }
}
</script>