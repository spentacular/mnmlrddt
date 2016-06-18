<template>
  <div class="user-list p3 mt3 sml-vh100" @click.stop="showModal = false">
    <div class="flex justify-between items-end">
      <img class="logo" src="../assets/logo.svg">
      <button type="button" class="btn silver nav-button dim" @click.stop="toggleMenu">Menu</button>
    </div>
    <div class="menu" transition="expand" v-show="showMenu">
      <ul class="list-reset">
        <li><a v-link="{ name: 'sub', params: { subreddit: 'all' }}" class="block p2 dim">all</a></li>
        <li v-link-active v-for='sub in subs | orderBy "sub"' class="v-link flex items-center justify-between">
          <a v-link="{ name: 'sub', params: { subreddit: sub.sub }}" class="block fit p2 dim">{{sub.sub}}</a>
          <button class="destroy dim gray" @click="removeSub(sub)"><span>✕</span></button>
        </li>
      </ul>
      <div>
        <button type="button"
          class="btn btn-primary fit block dim"
          @click.stop="toggleModal"><span v-show="!showModal">+</span><span v-show="showModal">✕</span></button>
        <div class="pb3" v-show="showModal">
          <div class="mt2 pt1">
            <input type="text"
              class="fit input"
              v-el:new-input
              v-model="newSub"
              placeholder="Subreddit"
              @click.stop
              @keyup.enter='addSub'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subsStorage from '../store'

export default {
  name: 'UserList',

  data () {
    return {
      subs: subsStorage.fetch(),
      newSub: '',
      showModal: false,
      showMenu: true
    }
  },

  watch: {
    subs: {
      handler (subs) {
        subsStorage.save(subs)
      },
      deep: true
    }
  },

  methods: {
    addSub (sub) {
      const value = this.newSub && this.newSub.trim()
      if (!value) {
        return
      }

      this.subs.push({sub: value})
      this.newSub = ''
    },

    removeSub (sub) {
      this.subs.$remove(sub)
    },

    toggleMenu () {
      if (this.showMenu) {
        this.showMenu = false
      } else {
        this.showMenu = true
      }
    },

    toggleModal () {
      if (this.showModal) {
        this.showModal = false
      } else {
        this.showModal = true
        setTimeout(() => {
          this.$els.newInput.focus()
        }, 50)
      }
    }
  }
}
</script>

<style>

.list-reset {
  list-style-type: none;
  padding: 0;
}

.destroy {
  border: 0;
  background: transparent;
  padding: .5em;
}

.user-list {
  transition: opacity .2s ease;
  padding-bottom: 1em;
  background-color: #fff;
}

.user-list:hover {
  opacity: 1;
}

.v-link {
  transition: all .2s ease-in;
}

.v-link-active {
  background: #eee;
}

.expand-transition {
  animation-fill-mode: both;
  transform-style: flat;
  transform-style: preserve-3d;
}

.expand-enter {
  animation: slide-in .2s;
  transform-style: flat;
}

.expand-leave {
  animation: slide-out .2s;
  transform-style: flat;
}

.nav-button {
  z-index: 100;
  transform: translateZ(1em);
}

@keyframes slide-in {
  0% {
    transform: translateY(-50%);
    visibility: visible;
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.small {
  font-size: 85%;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  30% {
    opacity: 0;
  }

  100% {
    transform: translateY(-50%);
    visibility: visible;
    opacity: 0;
  }
}

@media (min-width: 40em) {
  .user-list {
    opacity: 0.25;
    flex: 0 0 16em;
    margin-right: 2.5%;
  }

  .nav-button {
    /*display: none;*/
  }

  .menu {
    display: block;
    opacity: 1;
  }
}

</style>
