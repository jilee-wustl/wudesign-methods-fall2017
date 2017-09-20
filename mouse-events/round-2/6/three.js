//var app = new PIXI.Application(1800, 1800, { backgroundColor: 0x000000 });
//document.body.appendChild(app.view);
//
//var graphics = new PIXI.Graphics();
//
//// set a fill and line style
//graphics.beginFill(0xFF3300);
//graphics.lineStyle(4, 0xffd900, 1);
//
//// draw a circle, set the lineStyle to zero so the circle doesn't have an outline
//graphics.lineStyle(0);
//graphics.beginFill(0xFFFFFF, 1);
//graphics.drawCircle(470, 90 ,60);
//graphics.endFill();
//
//graphics.lineStyle(0);
//graphics.beginFill(0xFFFFFF, 1);
//graphics.drawCircle(470, 400 ,60);
//graphics.endFill();
//
//app.stage.addChild(graphics);
//
////// Set the initial position
////sprite.anchor.set(0.5);
////sprite.x = app.renderer.width / 2;
////sprite.y = app.renderer.height / 2;
//
//// Opt-in to interactivity
//graphics.interactive = true;
//
//// Shows hand cursor
//graphics.buttonMode = true;
//
//// Pointers normalize touch and mouse
//graphics.on('pointerdown', onClick);
//
//// Alternatively, use the mouse & touch events:
//// sprite.on('click', onClick); // mouse-only
//// sprite.on('tap', onClick); // touch-only
//
//function onClick () {
//    graphics.beginFill(0x000000, 1);
//    graphics.drawCircle(470, 90 ,60);
//    graphics.endFill();
//    
//    graphics.beginFill(0x000000, 1);
//    graphics.drawCircle(470, 400 ,60);
//    graphics.endFill();
//}
//

var app = new PIXI.Application();
document.body.appendChild(app.view);

// create some textures from an image path
var textureButton = PIXI.Texture.fromImage('button.png');
var textureButtonDown = PIXI.Texture.fromImage('buttonDown.png');
var textureButtonOver = PIXI.Texture.fromImage('buttonOver.png');

var buttons = [];

var buttonPositions = [
    175, 75,
    655, 75,
    410, 325,
    150, 465,
    685, 445
];

for (var i = 0; i < 5; i++) {

    var button = new PIXI.Sprite(textureButton);
    button.buttonMode = true;

    button.anchor.set(0.5);
    button.x = buttonPositions[i*2];
    button.y = buttonPositions[i*2 + 1];

    // make the button interactive...
    button.interactive = true;
    button.buttonMode = true;

    button
        // Mouse & touch events are normalized into
        // the pointer* events for handling different
        // button events.
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);

        // Use mouse-only events
        // .on('mousedown', onButtonDown)
        // .on('mouseup', onButtonUp)
        // .on('mouseupoutside', onButtonUp)
        // .on('mouseover', onButtonOver)
        // .on('mouseout', onButtonOut)

        // Use touch-only events
        // .on('touchstart', onButtonDown)
        // .on('touchend', onButtonUp)
        // .on('touchendoutside', onButtonUp)

    // add it to the stage
    app.stage.addChild(button);

    // add button to array
    buttons.push(button);
}

// set some silly values...
buttons[0].scale.set(1.2);
buttons[2].rotation = Math.PI / 10;
buttons[3].scale.set(0.8);
buttons[4].scale.set(0.8,1.2);
buttons[4].rotation = Math.PI;

function onButtonDown() {
    this.isdown = true;
    this.texture = textureButtonDown;
    this.alpha = 1;
}

function onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
        this.texture = textureButtonOver;
    }
    else {
        this.texture = textureButton;
    }
}

function onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = textureButtonOver;
}

function onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = textureButton;
}


