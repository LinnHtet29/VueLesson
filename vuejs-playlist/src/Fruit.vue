<template>
  <div>
    <h3>{{showInfo()}}</h3>
    <li v-for="fruit in fruits">{{fruit}}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ["Apple","Banana","Coconut"]
    }
  },
  methods: {
    showInfo: function (info) {
      return "I'm under the water...";
      }
    }
  }
</script>

<style scoped>
  h3 {
    color: red;
  }
</style>
