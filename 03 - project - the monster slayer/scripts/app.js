const STRENGTHS = {
  PLAYER: { MIN: 3, MAX: 10 },
  MONSTER: { MIN: 3, MAX: 10 },
}
new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  watch: {
    monsterHealth: function (newHealth, oldHealth) {
      this.turns.unshift({ isPlayer: false, oldHealth, newHealth })
    },
    playerHealth: function (newHealth, oldHealth) {
      this.turns.unshift({ isPlayer: true, oldHealth, newHealth })
    }
  },
  methods: {
    restHealth: function () {
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    startGame: function () {
      this.gameIsRunning = true;
      this.restHealth();
    },
    resetGame: function () {
      this.gameIsRunning = false;
    },
    getDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    attack: function () {
      // when player attacks, monster loose some health
      this.monsterHealth -= this.getDamage(
        STRENGTHS.MONSTER.MIN,
        STRENGTHS.MONSTER.MAX
      );
      // check if player already a winner
      this.checkWin();
      // if still game is ON, then reduce the player health
      if (this.gameIsRunning) {
        this.monsterAttacks();
      }
    },
    monsterAttacks: function () {
      // player also loose some health
      this.playerHealth -= this.getDamage(
        STRENGTHS.PLAYER.MIN,
        STRENGTHS.PLAYER.MAX
      );
      // then it will be checked
      this.checkWin();
    },
    specialAttack: function () {
      this.monsterHealth -= this.getDamage(
        STRENGTHS.MONSTER.MIN + 10,
        STRENGTHS.MONSTER.MAX + 10
      );
      // check if player already a winner
      this.checkWin();
      // if still game is ON, then reduce the player health
      if (this.gameIsRunning) {
        this.monsterAttacks();
      }
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      }
      this.monsterAttacks();
    },
    giveUp: function () {
      this.resetGame();
    },
    checkWin: function () {

      if (this.monsterHealth <= 0) {
        // to avoid negative values
        this.monsterHealth = 0;
        this.gameIsRunning = false;
        alert('You won!');
      }

      if (this.playerHealth <= 0) {
        // to avoid negative values
        this.playerHealth = 0;
        this.gameIsRunning = false;
        alert('You lost!');
      }

    }
  }
});