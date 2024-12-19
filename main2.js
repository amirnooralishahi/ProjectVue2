Vue.createApp({
  data() {
    return {
      names: 0,
      changeColor: false,
    }
  },
  methods: {
    increase() {
      this.names = this.names + 1
    },
    reset() {
      this.names = 0
    },
    decrease() {
      this.names = this.names - 1
    },
    toggleDarkMode() {
      this.changeColor = !this.changeColor // تغییر حالت تاریک
    },
  },
}).mount('#app')
