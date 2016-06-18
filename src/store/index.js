const SUB_STORE = 'simple_reddit_store'

/* eslint-disable no-undef */
const subsStorage = {
  fetch () {
    return JSON.parse(localStorage.getItem(SUB_STORE) || '[]')
  },
  save (subs) {
    localStorage.setItem(SUB_STORE, JSON.stringify(subs))
  }
}

export default subsStorage
