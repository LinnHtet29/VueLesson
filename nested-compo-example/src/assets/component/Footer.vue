<template>
  <footer>
    <h5>Copy right 2023 @ {{title}}</h5>
  </footer>
</template>

<script>
import { bus } from '../../main';

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      footerText: "Copy right 2023 @Linn Htet Aung"
    }
  },
  created() {
    bus.$on('titleChange', (data) => this.title = data);
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
