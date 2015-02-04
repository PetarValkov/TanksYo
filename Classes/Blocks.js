//creating the blocks

breakableBlock = function (game, x, y, key, frame) {
    Phaser.Sprite.call(this, game, x, y, key, frame);
    game.physics.arcade.enable(this);

    this.initialKey = key;
    this.isBreakable = false;
    this.resistent = false;
    this.body.immovable = true;
}

breakableBlock.prototype = Object.create(Phaser.Sprite.prototype);
breakableBlock.prototype.constructor = breakableBlock;
breakablelock.prototype.startBreak = function () {
    

};


//powerups prototype
powerUp = function (game, x, y, key, frame) {
    Phaser.Sprite.call(this, game, x, y, key, frame);
    game.physics.arcade.enable(this);

    this.body.immovable = false;
}

powerUp.prototype = Object.create(Phaser.Sprite.prototype);
powerUp.prototype.constructor = powerUp;
powerUp.prototype.apply = function (game, player) {

}
powerUp.prototype.revert = function (game, player) {

}

//immortal blocks
blockIce = function (game, x, y, key, frame) {
    powerUp.call(this, game, x, y, key, frame);
};


blockIce.prototype = Object.create(powerUp.prototype);
blockIce.prototype.constructor = powerUp;
blockIce.prototype.apply = function (game, player) {
    this.kill();


    for (var bidx in game.burning_blocks.children) {
        var child = game.burning_blocks.children[bidx];
        child.loadTexture("f" + child.initialKey);
        child.resistent = true;
    }
    this.game.time.events.add(Phaser.Timer.SECOND * 10, this.revert, this, game, player);

}
blockIce.prototype.revert = function (game, player) {
    for (var bidx in game.burning_blocks.children) {
        var child = game.burning_blocks.children[bidx];
        child.loadTexture(child.initialKey);
        child.resistent = false;
    }
}