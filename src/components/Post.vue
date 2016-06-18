<template>
  <div class="post flex">
    <div class="post__content">
      <h3><a href="{{ post.url }}" class="dim">{{ post.title }}</a></h3>
      <div class="post__text lh4" v-if="post.text">{{{ post.text | markdown | truncate '150' }}}</div>
      <div class="post__meta flex flex-column sml-flex-row flex-wrap">
        <div class="py1">{{ post.score }} points by <a href="{{ authorUrl }}" class="dim gray">{{ post.author }}</a></div>
        <div class="py1"><span class="silver spacer">•</span> <a href="{{ commentsUrl }}" class="dim gray">{{ post.num_comments }} comments</a></div>
        <div class="py1" v-if="sub == 'all'"><span class="silver spacer">•</span> from <a href="https://www.reddit.com/r/{{post.subreddit}}" class="dim gray">{{ post.subreddit }}</a></div>
      </div>
      <div class="post__domain">{{ post.domain }}</div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'Post',

  props: {
    post: Object,
    sub: String
  },

  computed: {
    authorUrl () {
      return `https://www.reddit.com/user/${this.post.author}`
    },

    commentsUrl () {
      return `https://www.reddit.com${this.post.permalink}`
    },

    thumb () {
      const isImageRegex = /\.(?=gif|jpg|jpeg|png)/gi
      let result = isImageRegex.test(this.post.thumbnail)

      if (result) {
        return this.post.thumbnail
      } else {
        return false
      }
    }
  },

  filters: {
    truncate (string, value) {
      return string.substring(0, value) + '...'
    },

    markdown (string) {
      return marked(string)
    }
  }
}
</script>

<style>
h3 {
  margin: 0;
  line-height: 1.4;
}

.post {
  margin-bottom: 1.5em;
  overflow: hidden;
}

.post__meta {
  margin: .25em 0 .4em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);
}

.post__domain {
  font-size: .9em;
  color: rgba(0, 0, 0, 0.45);
}

.thumbnail {
  max-width: 4.25em;
  margin-right: 1em;
}

.thumbnail img {
  width: 100%;
  margin-top: .25em;
}

.silver {
  color: silver;
}

.gray {
  color: #777;
}

.lh4 {
  line-height: 1.45;
}

.post__text {
  margin-top: .5em;
  margin-bottom: .5em;
  margin-left: .1em;
  padding-top: .25em;
  padding-bottom: .25em;
  padding-left: .75em;
  border-left: .25em solid #ddd;
}

.post__text * {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

.post__text * + * {
  margin-top: .25em;
}

.post__text ul,
.post__text ol {
  margin: .5em 0;
  padding-left: 1.2em;
}

.post__text code,
.post__text pre {
  background-color: #f3f3f3;
  padding: .25em;
  font-size: .9rem;
}

.spacer {
  display: none;
  margin-left: .25em;
}

@media (min-width: 40em) {
  .spacer {
    display: inline-block;
  }
}

</style>
