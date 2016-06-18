<template>
  <div class="flex flex-column sml-flex-row app">
    <user-list></user-list>
    <router-view
      transition
      transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import Post from './components/Post'
import UserList from './components/UserList'

export default {
  components: {
    Post,
    UserList
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #333;
  margin: 0;
  background-color: #844FD5;
}

.app {
  min-height: 100vh;
  background-color: #fff;
}

.h3 {
  font-size: 1.1rem;
}

a {
  color: #1F70B0;
  text-decoration: none;
}

a:visited {
  opacity: 0.5;
}

hr {
  border: 0;
  border-bottom: 1px solid #ddd;
}

code, pre {
  font-family: Roboto Mono,Source Code Pro,Menlo,Consolas,Liberation Mono,monospace;
}

pre {
  white-space: pre-wrap;
  overflow: auto;
}

.dim { opacity: 1; transition: opacity .15s ease-in; }
.dim:hover, .dim:focus { opacity: .5; transition: opacity .15s ease-in; }
.dim:active { opacity: .8; transition: opacity .15s ease-out; }

.list-reset {
  list-style-type: none;
  padding: 0;
}

.block {
  display: block;
}

.p1 { padding: .25em; }
.p2 { padding: .5em; }
.py1 { padding-top: .25em; padding-bottom: .25em; }
.p3 { padding: 1em; }

.mt2 { margin-top: .5em; }
.mt3 { margin-top: 1em; }

.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }

.destroy {
  border: 0;
  background: transparent;
  padding: .5em;
}

.fit {
  width: 100%;
}

.input {
  -webkit-appearance: none;
  background: #fff;
  background-image: none;
  border: .1rem solid #c5c5c5;
  border-radius: .3rem;
  display: block;
  font-size: 1rem;
  outline: 0;
  padding: .25rem .4rem;
  position: relative;
}

.btn {
  font-size: .8rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1.2;
  padding: .4em .6em;
  margin: 0;
  height: auto;
  border: 1px solid transparent;
  vertical-align: middle;
  -webkit-appearance: none;
  color: inherit;
  background-color: transparent;
}

.btn-primary {
  color: #fff;
  background-color: #844FD5;
  border-radius: 3px;
}

.flex-column {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

@media (min-width: 40em) {
  .sml-flex-row {
    flex-direction: row;
  }

  .sml-vh100 {
    min-height: 100vh;
  }

  .sml-px4 {
    padding-left: 2em;
    padding-right: 2em;
  }
}

</style>
