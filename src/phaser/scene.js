import Phaser from "phaser";
import logoImg from "../assets/logo.png";

import diamond from "./assets/Pineapple.png";
import background from "./assets/Brown.png";
import platform from "./assets/platform.png";
import woof from "./assets/Run.png";

class playGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");

        this.player;
        this.stars;
        this.platforms;
        this.cursors;
        this.movingPlatform;
    }

    preload() {

        this.load.image('sky', background);
        this.load.image('ground', platform);
        this.load.spritesheet('star', diamond, {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('dude', woof, {frameWidth: 32, frameHeight: 32});
    }

    create() {
        this.add.tileSprite(50, 0, 1200, 800, 'sky')

        // this.add.image(400, 300, 'sky');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 400, 'ground').setScale(2).refreshBody();

        this.platforms.create(100, 100, 'ground');
        this.platforms.create(250, 250, 'ground');
        this.platforms.create(750, 220, 'ground');

        this.movingPlatform = this.physics.add.image(400, 400, 'ground');


        this.movingPlatform.setImmovable(true);
        this.movingPlatform.body.allowGravity = false;
        this.movingPlatform.setVelocityX(50);

        this.player = this.physics.add.sprite(100, 350, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{key: 'dude', frame: 4}],
            frameRate: 20
        });


        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 8}),
            frameRate: 10,
            repeat: -1
        });

          //Pineapple animation
          this.anims.create({
            key: 'pineapple',
            frames: this.anims.generateFrameNumbers('star', {start: 0, end: 17}),
            frameRate: 10,
            repeat: -1
        });



        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: {x: 12, y: 0, stepX: 70}
        });

        this.stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.4));
            child.anims.play('pineapple', true);

        });

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.player, this.movingPlatform);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.stars, this.movingPlatform);

        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-300);
        }

        if (this.movingPlatform.x >= 500) {
            this.movingPlatform.setVelocityX(-50);
        } else if (this.movingPlatform.x <= 300) {
            this.movingPlatform.setVelocityX(50);
        }
    }

    collectStar(player, star) {
        star.disableBody(true, true);
    }
}

export default playGame;
