var SideScroller = SideScroller || {};

SideScroller.Game = function(){};

SideScroller.Game.prototype = {
    
    preload: function() {
        
        this.game.time.advancedTiming = true;
        
        this.load.audio('coin', 'assets/audio/coin.wav');
        
        this.load.audio('music', 'assets/audio/pongtest-02.wav');
        
         this.game.load.image('space', 'assets/images/space.png');


        
    },
    
    
    create: function() {
        
        //background sprite
        
        this.game.stage.background = 'space';
        
        this.space = this.game.add.sprite(0.5, 0.5, 'space');
        
        this.map = this.game.add.tilemap('lvl1');
        
        this.map.addTilesetImage('tiles_spritesheet', 'gameTiles');
        
        //create layers
        
        this.backgroundlayer = this.map.createLayer('backgroundLayer');
        
        this.blockedLayer = this.map.createLayer('blockedLayer');
        
        //collision on blockedLayer
        
        this.map.setCollisionBetween(1, 5000, true, 'blockedLayer');
        
        //resizes the game world to match the layer dimensions
        
        this.backgroundlayer.resizeWorld();
        
        //create player
        
        this.player = this.game.add.sprite(100, 100, 'dude');
        
        //enable physics on player
        
        this.game.physics.arcade.enable(this.player);
        
        //player gravity
        
        this.player.body.gravity.y = 1000;
        
         this.player.animations.add('left', [1, ], 0, true);
         this.player.animations.add('right', [2, ], 0, true);
        
        //create enemies test
        
        
        this.enemies = this.game.add.sprite(300, 100, 'enemy');
        
        //multiple enemy test
        
        this.enemy2 = this.game.add.sprite(300, 50, 'enemy');
        
        this.enemy3 = this.game.add.sprite(500, 50, 'enemy');
        
        this.enemy4 = this.game.add.sprite(750, 280, 'enemy');
        
        this.enemy5 = this.game.add.sprite(1000, 50, 'enemy');
        
        this.enemy6 = this.game.add.sprite(1050, 50, 'enemy');
        
        this.enemy7 = this.game.add.sprite(1050, 280, 'enemy');
        
        this.enemy8 = this.game.add.sprite(1915, 280, 'enemy');
        
        this.enemy9 = this.game.add.sprite(1777, 280, 'enemy');
        
        //enable physics on enemies
        
        this.game.physics.arcade.enable(this.enemies);
        
        this.enemies.body.gravity.y = 1000;
        
        this.enemies.body.velocity.x = 100; 
        
        //multiple enemy test
        
        this.game.physics.arcade.enable(this.enemy2);
        
        this.enemy2.body.gravity.y = 1000;
        
        this.enemy2.body.velocity.x = 0; 
        
        this.game.physics.arcade.enable(this.enemy3);
        
        this.enemy3.body.gravity.y = 1000;
        
        this.enemy3.body.velocity.x = 0; 
        
        this.game.physics.arcade.enable(this.enemy4);
        
        this.enemy4.body.gravity.y = 1000;
        
        this.enemy4.body.velocity.x = 100;
        
        this.game.physics.arcade.enable(this.enemy5);
        
        this.enemy5.body.gravity.y = 1000;
        
        this.enemy5.body.velocity.x = 100;
        
        this.game.physics.arcade.enable(this.enemy6);
        
        this.enemy6.body.gravity.y = 1000;
        
        this.enemy6.body.velocity.x = 100;
        
        this.game.physics.arcade.enable(this.enemy7);
        
        this.enemy7.body.gravity.y = 0;
        
        this.enemy7.body.velocity.x = 100;
        
        this.game.physics.arcade.enable(this.enemy8);
        
        this.enemy8.body.gravity.y = 0;
        
        this.enemy8.body.velocity.x = 0;
        
        this.game.physics.arcade.enable(this.enemy9);
        
        this.enemy9.body.gravity.y = 0;
        
        this.enemy9.body.velocity.x = 0;
    
        
        
        //create coins
        
        this.coins = this.game.add.group();
        
        this.coins.enableBody = true;
        
        for (var i =1; i <2; i++)
        {
            var coin = this.coins.create(i *400, 150, 'coin');
            var coin = this.coins.create(i *400, 300, 'coin');
            var coin = this.coins.create(i *1060, 150, 'coin');
            var coin = this.coins.create(i *1850, 300, 'coin');
            var coin = this.coins.create(i *2626, 290, 'coin');
            coin.body.gravity.y = 0;
        }
                
       /* this.coins = this.game.add.sprite(425, 100, 'coin');
        
        //enable physics on coins
        
        this.game.physics.arcade.enable(this.coins);
        
        this.coins.body.gravity.y = 0; */
        
        
        //the camera will follow the player
        
        this.game.camera.follow(this.player);
        

        
        
        
        //to show score
        
        this.scoreText = this.game.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: 'white'});
        
        
        this.score = 0;
        
        this.scoreText.fixedToCamera = true;
        
        //to show game objective
        
        this.gameObjective = this.game.add.text(25, 350, 'Collect all coins to beat level 1!', {fontSize: '32px', fill: 'black'});

        //move player using keys
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
        //Sounds
        
        this.coinSound = this.game.add.audio('coin');
        
       // this.music = this.game.add.audio('music');
           // this.music.onDecoded.add(this,start, this);


        
        
    },
    
    update: function () {
        
        //collision
        
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        
        this.game.physics.arcade.collide(this.enemies, this.blockedLayer);
        
        this.game.physics.arcade.collide(this.coins, this.blockedLayer);
        
        //coin collect
        
        this.game.physics.arcade.overlap(this.player, this.coins, this.collectCoins, null, this);
        
        this.game.physics.arcade.overlap(this.player, this.coins, null, this);
        
        //kill player
        
        this.game.physics.arcade.collide(this.enemies, this.player, this.killPlayer, null, this);
        
        this.game.physics.arcade.collide(this.enemy2, this.player, this.killPlayer, null, this);
        
        this.game.physics.arcade.collide(this.enemy3, this.player, this.killPlayer, null, this);
        
        this.game.physics.arcade.collide(this.enemy4, this.player, this.killPlayer, null, this);
        
        this.game.physics.arcade.collide(this.enemy5, this.player, this.killPlayer, null, this);
        
        this.game.physics.arcade.collide(this.enemy6, this.player, this.killPlayer, null, this);
        
        this.game.physics.arcade.collide(this.enemy7, this.player, this.killPlayer,null, this);
        
        this.game.physics.arcade.collide(this.enemy8, this.player, this.killPlayer, null, this);
        
        this.game.physics.arcade.collide(this.enemy9, this.player, this.killPlayer, null, this);
        
        //multiple enemy test collision
        
        this.game.physics.arcade.collide(this.enemy2, this.blockedLayer, this.enemy2Jump, null, this);
        
        this.game.physics.arcade.collide(this.enemy3, this.blockedLayer, this.enemy2Jump, null, this);
        
        this.game.physics.arcade.collide(this.enemy4, this.blockedLayer);
        
        this.game.physics.arcade.collide(this.enemy5, this.blockedLayer);
        
        this.game.physics.arcade.collide(this.enemy6, this.blockedLayer);
        
        this.game.physics.arcade.collide(this.enemy7, this.blockedLayer);
        
        this.game.physics.arcade.collide(this.enemy8, this.blockedLayer);
        
        this.game.physics.arcade.collide(this.enemy9, this.blockedLayer);

        
        
        
        
     //player movement
        
            if(this.cursors.left.isDown) {
                
                this.player.body.velocity.x = -250;
            }
        
            else if (this.cursors.right.isDown) {
                
                this.player.body.velocity.x = 250;
            }
        
            else {
                
                this.player.body.velocity.x = 0;
            }
        
        //jumping
        
            if (this.cursors.up.isDown) {
                
                this.playerJump();
            }
        
        //animations test with sprite dude
        
         //  Reset the players velocity (movement)
    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        //  Move to the left
        this.player.body.velocity.x = -150;

        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        //  Move to the right
        this.player.body.velocity.x = 150;

        this.player.animations.play('right');
    }
    else
    {
        //  Stand still
        this.player.animations.stop();

        this.player.frame = 0;
    }

    //  Allow the player to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.body.velocity.y = -350;
    }
        //enemies movement
        
            if (this.enemies.body.x > 475) {
                this.enemies.body.velocity.x = -200;
            }
            
            if (this.enemies.body.x < 350) {
                this.enemies.body.velocity.x = 200;
            }
        
        //enemy4 side to side movement
        
            if (this.enemy4.body.x > 850) {
                this.enemy4.body.velocity.x = -200;
            }
        
            if (this.enemy4.body.x < 500) {
                this.enemy4.body.velocity.x = 200;
            }
        
        //enemy 5 side to side movement
        
        if (this.enemy5.body.x > 1500) {
                this.enemy5.body.velocity.x = -200;
            }
        
            if (this.enemy5.body.x < 900) {
                this.enemy5.body.velocity.x = 200;
            }
        
        //enemy 6 roundabout movement
        
        if (this.enemy6.body.x > 1175) {
            
            this.enemy6.body.velocity.x = -200
        }
        
        if (this.enemy6.body.x < 975) {
            
            this.enemy6.body.velocity.x = 200
        }
        
        //enemy 7 movement
        
        if (this.enemy7.body.x > 1175) {
            
            this.enemy7.body.velocity.x = -200;
        }
        
        if (this.enemy7.body.x < 975) {
            
            this.enemy7.body.velocity.x = 200;
        }
        
        //enemy 8 up down movement
        
        if(this.enemy8.body.y > 328) {
            
            this.enemy8.body.velocity.y = -200;
            
            this.enemy8.body.gravity.y = 0;
        }
        
        if (this.enemy8.body.y < 281) {
            
            this.enemy8.body.velocity.y = 200;
            
            this.enemy8.body.gravity.y = 50;
        }
        
        //enemy 9 up and down movement
        
        if(this.enemy9.body.y > 328) {
            
            this.enemy9.body.velocity.y = -200;
            
            this.enemy9.body.gravity.y = 0;
        }
        
        if (this.enemy9.body.y < 281) {
            
            this.enemy9.body.velocity.y = 200;
            
            this.enemy9.body.gravity.y = 50;
        }
            
            
        
        //multiple enemies movement test
        
            if (this.enemy2 && this.blockedLayer.collide) {
                   this.enemy2Jump();
            }
        
            //kill player
        
            if (this.player && this.enemies.collide) {
                
            if (this.player && this.enemy2.collide){
                
                if (this.player && this.enemy3.collide) {
                
                this.killPlayer();
            }
            }
            }
        
        //complete game and restart
        
           /* if(this.player.x >= this.game.world.width) {
            
            this.game.state.start('Game');
            }*/
        
         
       if (this.score >= 50 && this.player.x >= this.game.world.width ) {
            
            this.game.state.start('Game2');
        }
            
        
            
        
    },
    
    //player jump function
    
    playerJump: function() {
        
        if (this.player.body.blocked.down) {
            
           this.player.body.velocity.y = -625;
        }
      
    },
    
    //collect coins
         
    collectCoins: function(player,coins) {
        coins.kill();
        
        this.score +=10;
        this.scoreText.text = 'score: ' + this.score;
        
        //coin sound
        
        this.coinSound.play();
       // this.music.play();
        
        
     
        
    },
    
    
    
    //kill player
    
    killPlayer: function(enemies, player) {
        player.kill();
        
        this.game.state.start('gameOver');

    },
    
    //multiple enemy jump test
    enemy2Jump: function() {
            this.enemy2.body.gravity.y = 1000;
            this.enemy2.body.velocity.y = -600;
        
            this.enemy3.body.gravity.y = 1000;
            this.enemy3.body.velocity.y = -600; 
        
            
           
    },
     
    
    render: function()
    
    {
        
        this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
        
        
    }
    
};