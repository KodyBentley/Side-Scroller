var SideScroller = SideScroller || {};

SideScroller.lvl2 = function() {};

SideScroller.lvl2.prototype = {

    preload: function() {

        this.game.time.advancedTiming = true;

        this.load.audio('coin', 'assets/audio/coin.wav');


    },


    create: function() {

        this.map = this.game.add.tilemap('lvl2');

        this.map.addTilesetImage('tiles_spritesheet', 'gameTiles');

        //create layers

        this.backgroundlayer = this.map.createLayer('backgroundLayer');

        this.blockedLayer = this.map.createLayer('blockedLayer');

        //collision on blockedLayer

        this.map.setCollisionBetween(1, 5000, true, 'blockedLayer');

        //resizes the game world to match the layer dimensions

        this.backgroundlayer.resizeWorld();

        //create player

        this.player = this.game.add.sprite(100, 100, 'player');

        //enable physics on player

        this.game.physics.arcade.enable(this.player);

        //player gravity

        this.player.body.gravity.y = 1000;

        //create enemies test


        this.enemies = this.game.add.sprite(300, 100, 'enemy');

        //multiple enemy test

        this.enemy2 = this.game.add.sprite(300, 50, 'enemy');

        //enable physics on enemies

        this.game.physics.arcade.enable(this.enemies);

        this.enemies.body.gravity.y = 1000;

        this.enemies.body.velocity.x = 100;

        //multiple enemy test

        this.game.physics.arcade.enable(this.enemy2);

        this.enemy2.body.gravity.y = 1000;

        this.enemy2.body.velocity.x = 0;



        //create coins

        this.coins = this.game.add.group();

        this.coins.enableBody = true;

        for (var i = 1; i < 2; i++) {
            var coin = this.coins.create(i * 70, 150, 'coin');
            var coin = this.coins.create(i * 400, 300, 'coin');
            var coin = this.coins.create(i * 1060, 150, 'coin');
            coin.body.gravity.y = 0;
        }

        /* this.coins = this.game.add.sprite(425, 100, 'coin');
         
         //enable physics on coins
         
         this.game.physics.arcade.enable(this.coins);
         
         this.coins.body.gravity.y = 0; */


        //the camera will follow the player

        this.game.camera.follow(this.player);


        //move the player using the cursor keys

        this.scoreText = this.game.add.text(16, 16, 'score: 0', {
            fontSize: '32px',
            fill: 'white'
        });

        this.score = 0;


        this.cursors = this.game.input.keyboard.createCursorKeys();

        //Sounds

        this.coinSound = this.game.add.audio('coin');



    },

    update: function() {

        //collision

        this.game.physics.arcade.collide(this.player, this.blockedLayer);

        this.game.physics.arcade.collide(this.enemies, this.blockedLayer);

        this.game.physics.arcade.collide(this.coins, this.blockedLayer);

        //coin collect

        this.game.physics.arcade.collide(this.player, this.coins, this.collectCoins, null, this);

        this.game.physics.arcade.collide(this.player, this.coins, null, this);

        //kill player

        this.game.physics.arcade.collide(this.enemies, this.player, this.killPlayer, null, this);

        this.game.physics.arcade.collide(this.enemy2, this.player, this.killPlayer, null, this);

        //multiple enemy test collision

        this.game.physics.arcade.collide(this.enemy2, this.blockedLayer, this.enemy2Jump, null, this);



        //player movement

        if (this.cursors.left.isDown) {

            this.player.body.velocity.x = -200;
        } else if (this.cursors.right.isDown) {

            this.player.body.velocity.x = 200;
        } else {

            this.player.body.velocity.x = 0;
        }

        //jumping

        if (this.cursors.up.isDown) {

            this.playerJump();
        }

        //enemies movement

        if (this.enemies.body.x > 475) {
            this.enemies.body.velocity.x = -200;
        }

        if (this.enemies.body.x < 350) {
            this.enemies.body.velocity.x = 200;
        }



        //multiple enemies movement test

        if (this.ememy2 && this.blockedLayer.collide) {
            this.enemy2Jump();
        }

        //kill player

        if (this.player && this.enemies.collide) {

            if (this.player && this.enemy2.collide) {

                this.killPlayer();
            }
        }

        //complete game and restart

        if (this.player.x >= this.game.world.width) {

            this.game.state.start('Game');
        }



    },



    render: function()

    {

        this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");

    }

};