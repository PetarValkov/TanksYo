BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

var bullets;

BasicGame.Game.prototype = {

    cursors: null,
	
    create: function () {
        
		this.stage.backgroundColor = "#3f3f3f";
        this.map = this.add.tilemap("level");
        this.map.addTilesetImage("tiles");
        this.world.setBounds(0, 0, 640, 480);
		
		this.nonbreakable = this.map.createLayer("Tile Layer 1");
		this.walls = this.game.add.group();
		
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = new playerTank(this.game, 550, 240, this.world.height-64);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.arcade.enable(this.nonbreakable);
		this.map.setCollisionBetween(1,200);
		
		bullets = this.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;

		bullets.createMultiple(50, 'bullet');
		bullets.setAll('checkWorldBounds', true);
		bullets.setAll('outOfBoundsKill', true);
		
		 this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

		// add keyboard controls
			var flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
			flapKey.onDown.add(this.player.fire, this.player);
    },

    update: function () {
	this.physics.arcade.collide(this.player, this.nonbreakable);
        this.player.moveTank(this.cursors);
		
		// if (this.flapKey.)
		// {
			// this.player.fire("gosho", bullets);
		// }
    },

    render: function () {
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};
