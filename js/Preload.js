var SideScroller = SideScroller || {};

//loading the game assets

SideScroller.Preload = function(){};

SideScroller.Preload.prototype = {
    
    preload: function() {
        
        //show loading screen
        
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        
        this.preloadBar.anchor.setTo(0.5);
        
        this.preloadBar.scale.setTo(3);
        
        this.load.setPreloadSprite(this.preloadBar);
        
        //load lvl 1
        
        this.load.tilemap('lvl1', 'assets/tilemaps/lvl1.json', null, Phaser.Tilemap.TILED_JSON);
        
        this.load.image('gameTiles', 'assets/images/tiles_spritesheet.png');
        
        //load lvl 2
        
        this.load.tilemap('lvl2', 'assets/tilemaps/lvl2.json', null, Phaser.Tilemap.TILED_JSON);
        
        this.load.image('gameTiles', 'assets/images/tiles_spritesheet.png'); 
        
        //load assets
        
        this.load.image('player', 'assets/images/player.png');
        
        this.load.image('enemy', 'assets/images/enemy.png');
        
        this.load.image('coin', 'assets/images/coin.png');
        
        this.load.image('goldCoin', 'assets/images/coin.png');
        
        this.load.audio('coin', 'assets/audio/coin.wav');
        
        //background images
        
        this.load.image('space', 'assets/images/space.png');
        
        this.game.load.spritesheet('dude', 'assets/images/squareDude0.png', 32, 36);

        
    },
    
    create: function() {
        
        this.state.start('Menu');
        
        
        
        
    }
    
};