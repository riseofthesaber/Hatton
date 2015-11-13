var game = new Phaser.Game(960,768, 
Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('cube', 'cubes/playercube.png');
    game.stage.backgroundColor = '#C0C0C0';

   game.load.spritesheet('WpartG', 'cubes/wallcube(green).png',48,48);   

    
}// end preload function

var player;
var walls;
var cursors;
var wallGroup;
var map;
var walls2;
function create() {
    
    
    game.physics.startSystem(Phaser.Physics.ARCADE) 
    
    player = game.add.sprite(48, 48, 'cube');
    //  We're going to be using physics, so enable the Arcade Physics system
    
    
    game.physics.arcade.enable(player);
    
//   function topdownFollow(){
//    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
//       style = 'STYLE_TOPDOWN';
//   }

    player.body.collideWorldBounds = true;    
    cursors = game.input.keyboard.createCursorKeys(); 
  
    map=game.add.tilemap();
    map.addTilesetImage('WpartG',null,48,48);
    walls2=map.create('wallkey',12,12,96,96);
    map.putTile(0,5,5,walls2);
    map.setCollision(0);
    
    
//    for(var wall=0; wall<=10; wall++){
//     walls = game.add.sprite(48*wall,0, 'WpartG');
//    
//    
////    game.add.sprite(48,48, 'WpartG'); 
////    game.add.sprite(96,48, 'WpartG'); 
////    game.add.sprite(144,48, 'WpartG'); 
//    walls.enableBody = true;
//
//    // walls.create(400, 400, 'WpartG');   
//    walls.animations.add('flashG', [0,1], 4, true);
//    walls.animations.play('flashG');
//    wallGroup = game.add.group();
//     
//        game.physics.arcade.enable(walls);
////        walls.body.immovable = true;
//        
//    }
    

} // end create function

function update() {
    
    game.physics.arcade.collide(player,walls2);
    
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