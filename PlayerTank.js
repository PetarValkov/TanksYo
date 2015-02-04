playerTank = function( game, velocity, speed, xCoord, yCoord)
{
	Phaser.Sprite.call(this, game, xCoord, yCoord, 'tank');
	
	
	this.speed = speed;
	game.physics.arcade.enable(this);
	this.body.collideWorldBounds =true;
	this.body.tilePadding.set(32);
	
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
	 }
	  else if (cursors.right.isDown)
	 {
	 //  Move to the right
	 this.body.velocity.x = this.speed;
	 }
	 	  else if (cursors.up.isDown)
	 {
	 //  Move up
	 this.body.velocity.y = -this.speed;
	 }	  else if (cursors.down.isDown)
	 {
	 //  Move down
	 this.body.velocity.y = this.speed;
	 }
	


}