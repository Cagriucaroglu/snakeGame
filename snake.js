const canvas = document.getElementById('canvas');

const ctx = canvas.getContext("2d"); // Now you have the 2D rendering context for a canvas and you can draw within it.

let initialState = {  // Bu JavaScript kodu bir oyunun başlangıç durumunu temsil eden bir nesne olan "initialState" adlı bir değişkeni tanımlar. 
    cols: 30,     // içersindeki cols , rows , score vb ifadeler de bu nesnenin propertyleridir. Nesneler propertyler ve değerlerden oluşur
    rows: 20,
    score: 0,
    tail: [],
    static: 20,
    snakeX: 0,
    snakeY: 0,
    eatX: null,
    eatY: null,
    velX: 0,
    velY: 0,
    gameOver: false
}

canvas.height = initialState.rows * initialState.static; // 600
canvas.width = initialState.cols * initialState.static;  // 400

//canvas üstünde boardlarımızı , yılanımızı , yiycekleri çizebilmemiz için veya yazılarımızı yazdırabilmemiz için class yapıları oluşturcaz

class Square {

    constructor(x, y, width, height, color) {

        this.x = x  // this.x Square.x propertysidir
        this.y = y
        this.width = width
        this.height = height
        this.color = color

    }

    draw() { // draw adındaki çizim fonksiyonu bu bizim için bir fillRect çizicek

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Text {  // oyun bitti yazısını yazdırcak 

    constructor(text, x, y, textAlign, fontSize) {
        this.text = text
        this.x = x
        this.y = y
        this.textAlign = textAlign
        this.fontSize = fontSize
    }

    draw() {
        ctx.fillStyle = "red"
        ctx.font = `${this.fontSize}px Roboto Mono`
        ctx.textAlign = this.textAlign
        ctx.fillText(this.text, this.x, this.y)
    }
}

addEventListener("keydown", ({ key }) => { // ({ key }) => { } şeklindeki bir ok işlevi (arrow function) geçerlidir ve JavaScript dilinde kullanılabilir. Bu sözdizimi, bir nesne üzerindeki belirli bir özelliği (key özelliği) alarak işlem yapmak için kullanılan bir desctructuring (yapı çözümleme) yöntemidir.
                                           // Arrow function, (parametre) => { } şeklinde bir sözdizimine sahiptir. Parantez içindeki parametre bölümü, işlevin parametrelerini temsil eder. Bu durumda, { key } destructuring yöntemi kullanılarak gelen nesnenin key özelliği alınır.
    switch (key) {
        case "w":
            initialState.velX = 0;
            initialState.velY = -1;
            break;
        case "s":
            initialState.velX = 0;
            initialState.velY = 1;
            break;
        case "a":
            initialState.velX = -1;
            initialState.velY = 0;
            break;
        case "d":
            initialState.velX = 1;
            initialState.velY = 0;
            break;
        default:
            break;
    }

    
});

const generateEat = () => {
    initialState.eatX = Math.floor(Math.random() * initialState.cols) * initialState.static
    initialState.eatY = Math.floor(Math.random() * initialState.rows) * initialState.static
}

generateEat();

const loop = () => {
    setInterval(() => {

        document.getElementById('score').innerText = initialState.score
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ourSize = new Square(0, 0, canvas.width, canvas.height, 'black')
        ourSize.draw();
       
        
       new Square(initialState.snakeX , initialState.snakeY , initialState.static , initialState.static , "green").draw();

       new Square(initialState.eatX , initialState.eatY , initialState.static , initialState.static , "red").draw();

       initialState.snakeX += initialState.velX * initialState.static
       initialState.snakeY += initialState.velY * initialState.static

       if(initialState.snakeX == initialState.eatX && initialState.snakeY == initialState.eatY){
            initialState.tail.push([initialState.eatX , initialState.eatY])
            initialState.score += 1
            generateEat()
       }


       for(let i=initialState.tail.length - 1; i >= 1 ; i--){
            initialState.tail[i] = initialState.tail[i - 1];
       }
       
       if(initialState.tail.length){
            initialState.tail[0] = [initialState.snakeX , initialState.snakeY]
       }

       for (let i = 0; i < initialState.tail.length; i++){
        new Square(initialState.tail[i][0] , initialState.tail[i][1] , initialState.static , initialState.static , "green").draw()
       }

       if(initialState.snakeX < 0 || initialState.snakeX > canvas.width || initialState.snakeY < 0 || initialState.snakeY > canvas.height){
            gameOverFunc();
       }

       if(initialState.gameOver){
        new Text('Game Over' , canvas.width/2 , canvas.height/2 - 25 , 'center' , 50).draw();
        new Text('Click to Start Again' , canvas.width/2 , canvas.height/2 + 25 , 'center' , 20).draw();
       }

       
    }, 1000 / 7)  // 1000/10 milisaniyede bir 0.1 saniyede bir arrow functionu çalıştır
    //The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
}

const gameOverFunc = () =>{
    initialState.score = 0,
    initialState.tail = [],
    initialState.static = 0,
    initialState.snakeX = 0,
    initialState.snakeY = 0,
    initialState.velX = 0,
    initialState.velY = 0,
    initialState.gameOver = true
}

addEventListener('click' , ()=> {
    initialState.gameOver = false,
    initialState.static = 20
})

loop();