var SideScroller = SideScroller || {};

SideScroller.game = new Phaser.Game(746, 420, Phaser.AUTO, '');

SideScroller.game.state.add('Boot', SideScroller.Boot);

SideScroller.game.state.add('Menu', SideScroller.Menu);

SideScroller.game.state.add('Preload', SideScroller.Preload);

SideScroller.game.state.add('Game', SideScroller.Game);

SideScroller.game.state.add('Game2', SideScroller.Game2);

SideScroller.game.state.add('gameOver', SideScroller.gameOver);

SideScroller.game.state.start('Boot');