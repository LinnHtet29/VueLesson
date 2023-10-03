<template>
  <div id="show-blogs">
    <h1>All Blogs Articles</h1>
    <input type="text" id="search" v-model="search" placeholder="Search.." />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link :to="'/'+ blog._id" class="title-link">
        <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
      </router-link>
      <p>{{blog.content | to-max100}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import searchMixin from "../mixins/searchMixins";

export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  created() {
    axios.get('/')
      .then(response => {
        this.blogs = response.data.blogs.slice(0,10);
      });
  },
  computed: {

  },
  filters: {
    'to-lower': function (value) {
      return value.toLowerCase();
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  background: #eee;
}
#search {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 5px;
}
.title-link {
  text-decoration: none;
}
.title-link:hover .title-link > h3{
  color: crimson;
}
</style>
