var StateTitle = {
  preload: function () {
    // load assets
    game.load.image('logo', '/images/title/gameLogo.png');

  },

  create: function () {
    this.logo = game.add.sprite(0, 0, 'logo');
  }

}
