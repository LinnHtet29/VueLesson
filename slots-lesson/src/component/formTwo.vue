<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form two - Log In</h3>
        <p>Enter your details to login</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="name" placeholder="Password">
      </div>
      <div slot="form-control">
        <button @click="handlerSubmit">Login</button>
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

<style scoped></style>
