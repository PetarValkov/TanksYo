playerTank = function( game, speed, xCoord, yCoord)
{
	Phaser.Sprite.call(this, game, xCoord, yCoord, 'tank');
	
	
	this.seed = speed;
	game.physics.enable(this);
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
	if (cursors.left.isDown)
	 {
		//  Move to the left 	
	 velocity *= -1;
	 this.body.velocity.x = -this.speed;
	 this.Sprite.anchor.setTo(.5,.5);
	 this.scale.x*=-1;
	 }
	  else if (cursors.right.isDown)
	 {
	 //  Move to the right
	 this.body.velocity.x = this.speed;
	 this.Sprite.anchor.setTo(.5,.5);
	 this.scale.x*=-1;
	 }
	 	  else if (cursors.right.isDown)
	 {
	 //  Move up
	 this.body.velocity.y = this.speed;
	 this.Sprite.anchor.setTo(.5,.5);
	 this.scale.y*=-1;
	 }	  else if (cursors.right.isDown)
	 {
	 //  Move down
	 this.body.velocity.y = this.speed;
	 this.Sprite.anchor.setTo(.5,.5);
	 this.scale.y*=-1;
	 }



}