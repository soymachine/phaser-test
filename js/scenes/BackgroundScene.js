class BackgroundScene extends Phaser.Scene
{
    gameScene;
    layer;

    constructor ()
    {
        super({
            key:'BackgroundScene',
            active:true
        });        
    }

    start(game){
        this.game = game

        const bg = this.game.add.image(0, 0, 'bg').setOrigin(0, 0);

        bg.x = -1000
        bg.y = -1000

        // console.log(`w:${bg.width}`)
    }

    create ()
    {
        console.log(`create bg`)
        const width = this.scale.gameSize.width;
        const height = this.scale.gameSize.height;
    }
    
}

export default BackgroundScene;