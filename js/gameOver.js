var SideScroller = SideScroller || {};


SideScroller.gameOver = function(){};

SideScroller.gameOver.prototype = {



create: function() {
    
    this.game.stage.backgroundColor = 'black';
    
        
        this.text = this.game.add.text(200, 200, 'You Lost Faggot', {fontSize: '32px', fill: 'white'});
                                
    
        var enter = this.game.add.text(200, 350, 'Press enter to try again!', {fontSize: '32px', fill: 'white'});
        
        this.game.add.tween(this.text).to({
                    y:50
                    
        }, 1000, Phaser.Easing.Bounce.Out)
        .delay(250)
        .start();
    
    
    
    
    
        this.text.alpha = 0.1;
    
        this.game.add.tween(this.text).to( { alpha: 1 }, 2000, "Linear", true);
    
        this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

   
    
    
},
    
update: function() {
    
    //this.text.angle += 1;
    
    if(this.enterKey.isDown) {
                    
            this.state.start('Game');
        }
    
    
}













}
    
    