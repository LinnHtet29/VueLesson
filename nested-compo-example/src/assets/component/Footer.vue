<template>
  <footer>
    <h5>{{footerText}}</h5>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerText: "Copy right 2023 @Linn Htet Aung"
    }
  }
}
</script>

<style scoped>

footer {
  margin-top: 1px solid #333;
  background: #f2f2f2;
  padding: 5px;
}
h5 {
  color: #222;
  text-align: center;
}
</style>
