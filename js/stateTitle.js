var StateTitle = {
  preload: function () {
    // load assets
    game.load.image('logo', '/images/title/gameLogo.png');

  },

  create: function () {
    this.logo = game.add.sprite(game.world.centerX, 180, 'logo');
    this.logo.anchor.set(0.5, 0.5);
  }

}
