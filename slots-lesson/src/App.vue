<template>
  <div>
    <KeepAlive>
      <component :is="component"></component>
    </KeepAlive>
    <button @click="component = 'form-one'">Show form one</button>
    <button @click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import formOne from './component/formOne.vue';
import formTwo from './component/formTwo.vue';

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      component: "form-two"
    }
  }
}
</script>

<style></style>
