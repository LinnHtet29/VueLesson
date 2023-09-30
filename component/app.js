Vue.component("greeting", {
  template:
    "<p>Hey there,I am {{name}}. <button @click='changeName'>Change</button></p>",
  data: function () {
    return {
      name: "Linn Htet",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Yeah";
    },
  },
});

const one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Instance One",
  },
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Instance two",
  },
});

const refTest = new Vue({
  el: "#ref-test",
  data: {
    title: "Ref Test",
    output: "",
  },
  methods: {
    showOutput: function () {
      console.log(this.$refs.title.innerText);
      this.output = this.$refs.input.value;
    },
  },
});
