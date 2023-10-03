<template>
  <div>
    <form-helper>
        <div slot="form-header">
          <h3>Form one - contact Us</h3>
          <p>Fill in this form to contact us</p>
        </div>
        <div slot="form-fields">
          <input type="text" name="username" placeholder="Username">
          <label for="message">Your Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div slot="form-control">
          <button @click="handlerSubmit">Send</button>
        </div>
      </form-helper>
  </div>
</template>

<script>
import formHelper from '../component/formHelper.vue';

export default {
  components: {
    'form-helper': formHelper,
  },
  data() {
    return {
      title: "I'm the dynamic slot"
    }
  },
  methods: {
    handlerSubmit: function () {

    }
  }
}

</script>

<style scoped>
</style>
