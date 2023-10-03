import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes/routes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/blogs";

Vue.prototype.$axios = axios;

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
});

Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value === "wide") el.style.maxWidth = "1200px";
    else if (binding.value === "narrow") el.style.maxWidth = "560px";
    if (binding.arg === "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

Vue.directive("random-gradient", {
  bind(el, binding, vnode) {
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const startColor = getRandomColor();
    const endColor = getRandomColor();

    el.style.background = `linear-gradient( to right, ${startColor}, ${endColor})`;
    el.style.color = "white";
  }
});

Vue.filter("to-uppercase", function(value) {
  return value.toUpperCase();
});

Vue.filter("to-max100", function(value) {
  return value.slice(0, 100) + "...";
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
