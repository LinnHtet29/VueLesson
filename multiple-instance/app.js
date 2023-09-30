const one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue One",
  },
  methods: {},
  computed: {
    greet: function () {
      return "Hello from Vue 1";
    },
  },
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue Two",
  },
  methods: {
    chgTitle: function () {
      one.title = "Changed Title";
    },
  },
  computed: {
    greet: function () {
      return "Hello from Vue 2";
    },
  },
});
