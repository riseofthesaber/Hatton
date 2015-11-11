var game = new Phaser.Game(960, 960, Phaser.AUTO,'', {preload: preload, create: create, update: update });


function preload() {
    game.load.image('cube', 'cubes/playercube.png');
    game.stage.backgroundColor = '#C0C0C0';

   game.load.spritesheet('WpartG', 'cubes/wallcube(green).png',96,96);   

    
}// end preload function

var player;
var walls;
var wall
var cursors;
var wallGroup;
function create() {
    player = game.add.sprite(0, 0, 'cube');
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;    
    cursors = game.input.keyboard.createCursorKeys(); 
    
    for(wall=1; wall<=10; wall++){
        walls = game.add.sprite(48*wall,0, 'WpartG');
    
    
    
    
    
    
//    game.add.sprite(48,48, 'WpartG'); 
//    game.add.sprite(96,48, 'WpartG'); 
//    game.add.sprite(144,48, 'WpartG'); 
    walls.enableBody = true;

    // walls.create(400, 400, 'WpartG');   
    walls.animations.add('flashG', [0,1], 4, true);
    walls.animations.play('flashG');
    wallGroup = game.add.group();
    }
    


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