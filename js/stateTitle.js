var StateTitle = {
  preload: function () {
    // load assets
    game.load.image('logo', '/images/title/gameLogo.png');

    // Check if mobile
    if (screen.width < 1500) {
      // Force orientation (landscape, portrait)
      game.scale.forceOrientation(false, true);
    }
  },

  create: function () {
    this.logo = game.add.sprite(game.world.centerX, 180, 'logo');
    this.logo.anchor.set(0.5, 0.5);
    this.setListeners();
  },

  setListeners: function () {
    if (screen.width < 1500) {
      game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
      game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
    }
  },

  wrongWay: function () {
    document.getElementById("wrongWay").style.display="block";

  },

  rightWay: function () {
    document.getElementById("rightWay").style.display="none";

  },

  update: function () {

  }

}
