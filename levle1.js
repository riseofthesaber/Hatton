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
var wall;
var barrier;
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
    wall=map.create('wallkey',12,12,48,48);
   // map.putTile(0,6,6,wall);
    map.setCollision(0);
    
    var allwalls = [
        [3,1], [3,2],[3,3],
        [5,5],[6,5],
        [1,9],[2,9],[3,9],
        [3,10],[3,11],
        [10,8],[10,9],[10,10],[10,11],
        
    ];
    
    for (var WG=0; WG < allwalls.length; WG++) {
        console.log("Adding index #", WG);
        var coordinates = allwalls[WG];
        console.log("Coordinates", coordinates);
        var x = coordinates[0];
        var y = coordinates[1];
        map.putTile(0, x, y, wall);
    }
    
//    for(var WG = 1; WG <=4;WG++){
//        map.putTile(0,4,WG,wall);   
//    }
//    for(var WG = 2; WG <=4;WG++){
//        map.putTile(0,WG,9,wall);   
//    }
//    


} // end create function

function update() {
    
    game.physics.arcade.collide(player,wall);
    
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