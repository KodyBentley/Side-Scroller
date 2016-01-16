var SideScroller = SideScroller || {};


SideScroller.Menu = function(){};

SideScroller.Menu.prototype = {
    
    
    
    preload: function() {
      this.game.load.image('player', 'assets/images/player.png');  
        
        this.game.load.image('space', 'assets/images/space.png');
        
    },
    
    create: function() {
        
        this.game.stage.background = 'space';
        
        this.space = this.game.add.sprite(0.5, 0.5, 'space');
        
        var textTest = this.game.add.text(175, 200, 'My SideScroller Quest', {fontSize: '32px', fill: 'white'});
        
        var enter = this.game.add.text(200, 210, 'Press enter to play!', {fontSize: '32px', fill: 'white'});
        
        this.game.add.tween(textTest).to({
                    y:50
        }, 1000, Phaser.Easing.Bounce.Out)
        .delay(250)
        .start();
        
        this.player = this.game.add.sprite(0, 300, 'player');
                //this.game.physics.arcade.enable(this.player);

               //  this.player.animations.add('right', [2, ], 0, true);

        
        //enable physics on player
        
        this.game.physics.arcade.enable(this.player);
        
        //player gravity
        
        this.player.body.velocity.x = 200;
        
        this.player.body.gravity.y = 0;
        
        this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        //this.state.start('Game');
           
        
    },
    
    update: function(){
    
        if(this.enterKey.isDown) {
                    
            this.state.start('Game');
        }
        
    
}
    
};