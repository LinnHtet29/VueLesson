<template>
  <div id="app">
    <h3>{{title}}</h3>
    <h3>I'm from Local</h3>
    <h5>{{greeting()}}</h5>
    <fruitsCompo></fruitsCompo>
    <h3>I'm from Global</h3>
    <fruits/>
  </div>
</template>

<script>
import Fruits from './Fruit.vue';
export default {
  components: {
    'fruitsCompo': Fruits,
  },
  data () {
    return {
      title: 'Finally, Welcome!!!'
    }
  },
  methods: {
    greeting: function () {
      return "Hello form the other side...";
    }
  }
}
</script>

<style scoped>
  h3 {
    color: green;
  }
</style>
