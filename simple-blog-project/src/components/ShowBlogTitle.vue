<template>
  <div id="show-blogs">
    <h1>All Blogs Articles</h1>
    <input type="text" id="search" v-model="search" placeholder="Search.." />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h3 v-rainbow>{{ blog.title | to-uppercase }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import searchMixins from '../mixins/searchMixins';

export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  created() {
    axios.get('http://localhost:3000/blogs/')
      .then(response => {
        this.blogs = response.data.result.slice(0, 10);
      });
  },
  computed: {

  },
  filters: {
    'to-lower': function (value) {
      return value.toLowerCase();
    }
  },
  mixins: [searchMixins]
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
</style>
