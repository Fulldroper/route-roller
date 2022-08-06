Document.prototype.router = {
  host: window.location.origin,

  history: window.history,
  location: window.location,

  get path() {
    return this.location.pathname
  },

  set path(value) {
    this.history.replaceState(null, '',
      this.host + value
    );
  }
}
const arr = [
  "Привіт",
  "як справи?",
  "чим займаєшься?"
]

let inc = 0

setInterval(() => {
  document.router.path = "/" + arr[inc % arr.length]
  inc++
}, 3000, inc, arr)