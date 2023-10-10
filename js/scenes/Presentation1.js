import Section  from './Section.js'

class Presentation1 extends Section
{
    constructor ()
    {
        super("Presentation1");
    }

    start ({game, position}){
        super.create({
            position: position
        })

        this.game = game
        this.perfume = this.game.add.image(0, 0, 'perfume').setOrigin(0, 0);
        this.splash = this.game.add.image(0, 0, 'splash').setOrigin(0, 0);

        this.view.add(this.splash);
        this.view.add(this.perfume);
        

        this.scaleImage({
            img: this.splash,
            type:"pixels",
            value: this.sectionH * .8,
            side: "height"
        })

        this.scaleImage({
            img: this.perfume, 
            type:"pixels",
            value: this.sectionH * .7,
            side: "height"
        })

        this.centerSplashPos = this.centerIMG(this.splash)
        this.centerPerfumePos = this.centerIMG(this.perfume)
        /*
        
        
        
        
       
        
        */
    }
}

export default Presentation1;