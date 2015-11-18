var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

game.state.add('titlescreen', titlescreen);


game.state.add('Options', Options)


game.state.add('Game', Game);

game.state.start('titlescreen');