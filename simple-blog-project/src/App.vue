<template>
  <div>
    <app-nav></app-nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import AddBlog from './components/AddBlog.vue';
import ShowBlogs from './components/ShowBlog.vue';
import ShowBlogsTitle from './components/ShowBlogTitle.vue';

export default {
  components: {
    'app-nav': Nav,
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'show-blogs-title': ShowBlogsTitle
  },
  data () {
    return {
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@500&family=Ubuntu:wght@300&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: 'AR One Sans', sans-serif;
}
main {
  margin-top: 100px;
}
</style>
