new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
    },
    getDamage: function (max, min) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    attack: function () {
      this.monsterHealth -= this.getDamage(10, 3);

      if (this.monsterHealth <= 0) {
        console.log('you won');
        this.gameIsRunning = false;
        return;
      }

      if (this.playerHealth <= 0) {
        console.log('you lose');
        this.gameIsRunning = false;
        return;
      }

      this.playerHealth -= this.getDamage(12, 5);

    },
    specialAttack: function () {

    },
    heal: function () {

    },
    giveUp: function () {

    }
  }
});