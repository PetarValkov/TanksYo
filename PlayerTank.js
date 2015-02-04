playerTank = function( game, velocity, speed, xCoord, yCoord)
{
	Phaser.Sprite.call(this, game, xCoord, yCoord, 'tank');
	
	
	this.speed = speed;
	game.physics.arcade.enable(this);
	this.body.collideWorldBounds =true;
	this.body.tilePadding.set(32);
	
	this.anchor.setTo(0.5, 0.5);
	
	game.add.existing(this);
		game.camera.follow(this, Phaser.Camera.FOLLOW_PLATFORMER);
	}


playerTank.prototype = Object.create(Phaser.Sprite.prototype);
playerTank.prototype.constructor = playerTank;

playerTank.prototype.getSpeed = function (){
	return this.speed;
}

playerTank.prototype.setSpeed = function (addSpeed)
{
	this.speed = addSpeed;
}


playerTank.prototype.moveTank = function(cursors)
{
	this.body.velocity.y = 0;
	this.body.velocity.x = 0;
	if (cursors.left.isDown)
	 {
		//  Move to the left 	
	 this.body.velocity.x = -this.speed;
	 this.rotate('left');
	 }
	  else if (cursors.right.isDown)
	 {
	 //  Move to the right
	 this.body.velocity.x = this.speed;
	 	 this.rotate('right');

	 }
	 	  else if (cursors.up.isDown)
	 {
	 //  Move up
	 this.body.velocity.y = -this.speed;
	 	 this.rotate('up');

	 }	  else if (cursors.down.isDown)
	 {
	 //  Move down
	 	 this.rotate('down');

	 this.body.velocity.y = this.speed;
	 }
	


}

playerTank.prototype.rotate = function(direction)
{
	if (direction == 'up')
	{
		this.body.rotation = 0 - 90;
	}
	else if (direction == 'down')
	{
		this.body.rotation = 0 + 90;
	}
	else if	(direction == 'right')
	{
		this.body.rotation = 0;
	}
	else
	{
		this.body.rotation = 0 - 180;
	}
	
}

var nextFire = 0;
var fireRate = 500;

playerTank.prototype.fire = function()
{
	 if (this.game.time.now > nextFire && bullets.countDead() > 0)
    {
        nextFire = this.game.time.now + fireRate;

        var bullet = bullets.getFirstDead();

        bullet.reset(this.x - 8, this.y - 8);

        this.game.physics.arcade.moveToPointer(bullet, 300);
    }
}