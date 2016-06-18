<template>
  <div class="posts-list p3 sml-px4" :class="{ loading: busy }">
    <post
      v-for='post in posts'
      :post='post'
      :sub='sub'></post>
    <button
      v-show="!busy"
      type="button"
      class="btn btn-primary"
      v-infinite-scroll='fetchData(after)'
      infinite-scroll-disabled='busy'
      infinite-scroll-distance='10'>Load More...</button>
  </div>
</template>

<script>
import Post from './Post'
import _ from 'lodash'

export default {
  components: {
    Post
  },

  data () {
    return {
      posts: [],
      sub: null,
      after: null,
      busy: false
    }
  },

  route: {
    data () {
      const sub = this.$route.params.subreddit
      this.$set('sub', sub)
      this.posts.length = 0
      this.after = null
      this.fetchData()
    }
  },

  methods: {
    fetchData (after) {
      this.$set('busy', true)
      const sub = this.sub
      const apiURL = `https://www.reddit.com/r/${sub}.json?limit=25&after=${after}`

      this.$http({url: apiURL, method: 'GET'}).then((response) => {
        let results = response.data.data.children

        let posts = results.map(post => ({
          title: _.unescape(post.data.title),
          url: post.data.url,
          text: _.unescape(post.data.selftext) || null,
          author: post.data.author,
          num_comments: post.data.num_comments,
          score: post.data.score,
          permalink: post.data.permalink,
          domain: post.data.domain,
          subreddit: post.data.subreddit
        }))

        posts.forEach((post) => {
          this.$data.posts.push(post)
        })

        this.$set('after', response.data.data.after)
        this.$set('busy', false)
      })
    }
  }
}
</script>

<style>

.posts-list {
  max-width: 38em;
  margin-top: 1em;
  margin-bottom: 3em;
  padding-left: 1em;
  padding-right: 1em;
  flex: 1 1 auto;
  opacity: 1;
  transition: opacity .3s ease-in;
}

.loading {
  opacity: 0.4;
}

@media (min-width: 40em) {
  .sml-px4 {
    padding-left: 2em;
    padding-right: 2em;
  }
}

</style>
