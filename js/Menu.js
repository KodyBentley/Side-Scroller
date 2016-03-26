var SideScroller = SideScroller || {};


SideScroller.Menu = function() {};

SideScroller.Menu.prototype = {



    preload: function() {
        this.game.load.image('player', 'assets/images/player.png');

        this.game.load.image('nightscape', 'assets/images/nightscape.png');

    },

    create: function() {

        this.game.stage.background = 'nightscape';

        this.backGround = this.game.add.sprite(0.5, 0.5, 'nightscape');

        this.backGround.scale.setTo(0.3, 0.3);


        var textTest = this.game.add.text(175, 200, 'Square Dudes Quest', {
            fontSize: '32px',
            fill: 'white'
        });

        var enter = this.game.add.text(200, 210, 'Press enter to play!', {
            fontSize: '32px',
            fill: 'white'
        });

        this.game.add.tween(textTest).to({
                y: 50
            }, 1000, Phaser.Easing.Bounce.Out)
            .delay(250)
            .start();

        this.player = this.game.add.sprite(0, 300, 'dude');
        //this.game.physics.arcade.enable(this.player);

        this.player.animations.add('right', [2, ], 0, true);


        //enable physics on player

        this.game.physics.arcade.enable(this.player);

        //player gravity

        this.player.body.velocity.x = 200;

        this.player.body.gravity.y = 0;

        //this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        //this.state.start('Game');

        this.game.input.onDown.add(this.startGame, this);


    },

    update: function() {

        if (this.player.body.velocity.x > 0) {

            this.player.animations.play('right');

        }

        //this.game.input.onDown.add(this.startGame, this);

        /*if(this.enterKey.isDown) {
                    
            this.state.start('Game');
        }*/


    },
    startGame: function() {
        this.state.start('Game');
    }

};