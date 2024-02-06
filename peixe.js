var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    //carregar a imagem
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carregar o jogo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');
    
    //carregar 
    this.load.image('areia', 'assets/cenario/areia.png');
    
    //carregar o peixe
    this.load.image('alga', 'assets/cenario/algas.png');
}

function create() {
    //adicionar o mar na tela
    this.add.image(400, 300, 'mar');
    
    //adicionar o logo na tela
    this.add.image(400, 75, 'logo').setScale(0.5);
    
    //adicionar o logo na tela
    this.add.image(700, 525, 'areia');
    
    //adicionar o logo na tela
    this.add.image(700, 430, 'alga').setScale(0.05);    
    
    //adicionar o logo na tela
    this.add.image(400, 500, 'alga').setScale(0.02);
    
    //adicionar o logo na tela
    this.add.image(100, 430, 'alga').setScale(0.05);
    
    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a váriavel
    peixinho.setFlip(true, false);
}

function update() {
    //add controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    
}