var game = new Phaser.Game(624,624, 
Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('cube', 'cubes/playercube.png');
    game.stage.backgroundColor = '#C0C0C0';

   game.load.spritesheet('WpartG', 'cubes/wallcube(green).png',48,48);   

    game.load.spritesheet('enter', 'cubes/opening portal.png',48,48);  
    
    game.load.spritesheet('barrier', 'cubes/Barior bottom(96,48).png',96,48); 
    
    game.load.spritesheet('lazercube', 'cubes/lazer cube (red).png',48,48);
    
    
}// end preload function

var player;
var walls;
var cursors;
var wallGroup;
var map;
var wall;

var barrier;
var rim;

var open;
var enter;

var pro;
var lazer;

var lazrmap;
var lazrwll;

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
//    map.addTilesetImage('enter',null,48,48);
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
//    map.replace(0,1,1,1,48,48);
    
    
    
//     open=game.add.tilemap();
//    open.addTilesetImage('enter',null,48,48);
//    enter=open.create('o',12,12,48,48);
//    map.putTile(0,1,1,enter);
//    open.setCollision(0);
    
//    
//          rim=game.add.tilemap();
//    rim.addTilesetImage('barrier',null,96,48);
//    barrier=rim.create('b',6,12,96,48);
//    map.putTile(0,1,1,barrier);
//    rim.setCollision(0);
//    
    
//    for(var p = 1; p <=4;p++){
//        map.putTile(0,4,WG,open);   
//    }
//    for(var p = 2; p <=4;p++){
//        map.putTile(0,WG,9,open);   
//    }
//    

//    
//    barrier.enableBody = true;
//    
//rim = game.add.sprite(48, game.world.height 576, 'barrier');    
//    
    
    
       
lazrmap=game.add.tilemap();
     lazrmap.addTilesetImage('lazercube',null,48,48);
  lazrwll=lazrmap.create('lazrkey',12,12,48,48);
    
    // Move between X = 6 and X = 8
    var X = 6;
    var badtile = lazrmap.putTile(0,X,11,lazrwll);
    
    var numSeconds = 2;
    setInterval(function () {
        lazrmap.removeTile(X,11);
        
        if (X == 6) { X = 7; }
        else if (X == 7) { X = 8; }
        else if (X== 8) { X = 9;}
         else if (X== 9) { X = 8;}
        
        
        
        badtile = lazrmap.putTile(0,X,11,lazrwll);
    }, numSeconds*1000);
    
    
    
    

} // end create function

function update() {
    
    game.physics.arcade.collide(player,wall);
    
    game.physics.arcade.collide(player,open);
    
    
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