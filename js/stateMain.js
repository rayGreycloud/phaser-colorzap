var StateMain = {
  preload: function () {
    // load assets
    game.load.image('red', 'images/main/blocks/red.png');
    game.load.image('blue', 'images/main/blocks/blue.png');
    game.load.image('green', 'images/main/blocks/green.png');
    game.load.image('yellow', 'images/main/blocks/yellow.png');
  },

  create: function () {
    console.log('Ready!');
    // set up objects, variables
    var red = game.add.image(0, 0, 'red');
    var blue = game.add.image(0, 100, 'blue');
    var green = game.add.image(100, 0, 'green');
    var yellow = game.add.image(100, 100, 'yellow');

    this.blockGroup = game.add.group();
    this.blockGroup.add(red);
    this.blockGroup.add(blue);
    this.blockGroup.add(green);
    this.blockGroup.add(yellow);

    this.blockGroup.x = game.world.centerX - this.blockGroup.width / 2;
    this.blockGroup.y = game.height - 250;

    // sounds, text

    // characters, explosions

  },

  update: function () {
    // constant loop

  }
}
