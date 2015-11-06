var game = new Phaser.Game(800, 600, 
Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('cube', 'cubes/playercube.png');
    game.stage.backgroundColor = '#C0C0C0';
    
    
}// end preload function

var player;
var walls;
var cursors;
function create() {
    player = game.add.sprite(0, 0, 'cube');
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
game.physics.arcade.enable(player);
    
player.body.collideWorldBounds = true;    
cursors = game.input.keyboard.createCursorKeys();    


} // end create function

function update() {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    if (cursors.left.isDown)
    {
        //move left
        player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
        //move right
        player.body.velocity.x = 150;
    }
     
    else if (cursors.up.isDown)
    {
        //move right
        player.body.velocity.y = -150;
    }
     else if (cursors.down.isDown)
    {
        //move right
        player.body.velocity.y = 150;
    }
    
    
    
}// end update function