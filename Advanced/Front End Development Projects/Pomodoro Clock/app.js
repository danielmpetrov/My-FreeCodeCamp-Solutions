const DEFAULT_SESSION_TIME_MINS = +localStorage.getItem("sessionTime") || 5;
const DEFAULT_BREAK_TIME_MINS = +localStorage.getItem("breakTime") || 2;

var app = new Vue({
  el: '#app',

  data: {
    counter: DEFAULT_SESSION_TIME_MINS * 60,
    mode: 'Session',
    display: 'Paused',
    sessionInput: DEFAULT_SESSION_TIME_MINS,
    breakInput: DEFAULT_BREAK_TIME_MINS,
    interval: null
  },

  computed: {
    getTimer: function() {
      let minutes = Math.floor(this.counter / 60);
      if (minutes < 10) minutes = '0' + minutes;
      let seconds = this.counter % 60;
      if (seconds < 10) seconds = '0' + seconds;
      return minutes + ':' + seconds;
    }
  },

  methods: {
    countdown: function() {
      if (this.counter > 1) {
        this.counter -= 1;
      } else {
        if (this.mode === 'Session') {
          this.mode = 'Break';
          this.display = 'Break';
          this.counter = this.breakInput * 60;
        } else {
          this.mode = 'Session';
          this.display = 'Session';
          this.counter = this.sessionInput * 60;
        }
      }
    },

    toggle: function() {
      if (this.display === 'Paused') {
        this.display = this.mode;
        this.interval = setInterval(this.countdown.bind(this), 1000);
      } else {
        this.display = 'Paused';
        clearInterval(this.interval);
      }
    },

    restart: function() {
      this.mode = 'Session';
      this.display = this.mode;
      this.counter = this.sessionInput * 60;      
      if (this.interval) clearInterval(this.interval);
      this.interval = setInterval(this.countdown.bind(this), 1000);
    },

    incrementBreak: function(i) {
      this.breakInput += i;
      if (this.breakInput < 1) {
        this.breakInput = 1;
      }
      localStorage.setItem("breakTime", this.breakInput);
    },

    incrementSession: function(i) {
      this.sessionInput += i;
      if (this.sessionInput < 1) {
        this.sessionInput = 1;
      }
      localStorage.setItem("sessionTime", this.sessionInput);
    }
  }

});
