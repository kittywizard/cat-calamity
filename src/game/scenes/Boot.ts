import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        //this.load.image('background', 'assets/bg.png');
        this.loadFonts();
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
       //this.add.image(512, 384, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {
    
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });

        this.load.on("complete", () => {
                this.scene.start("MainMenu")
        },this)
    }

        loadFonts() {
        this.load.bitmapFont(
        "minogram",
        "assets/fonts/minogram_6x10.png",
        "assets/fonts/minogram_6x10.xml"
        );
    }

}
