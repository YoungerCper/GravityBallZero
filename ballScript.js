
const w = {
    standartG: 2,
    gX: 0,
    gY: 2,
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    k: 0.8
}

alert(w.height);

function BallCreator(we, posX, posY)
{

    let e = document.getElementById('ball');

    return {
        element: e,
        weight: we,
        xpos: 50,
        ypos: 50,
        speedX: 0,
        speedY: 0,
        Draw()
        {
            this.element.style.top = this.ypos + 'px';
            this.element.style.left = this.xpos + 'px';
        },

        Move()
        {
            
            this.xpos += this.speedX + w.gX / 2;
            this.ypos += this.speedY + w.gY / 2;    
            this.speedY += w.gY;
            this.speedX += w.gX;
            if(this.xpos + 100 >= w.width || this.xpos <= 0)
            { 
                this.speedX = (this.xpos <= 0) ? Math.floor(-this.speedX * w.k) : Math.ceil(-this.speedX * w.k);
                this.xpos = (this.xpos <= 0) ? 0 : w.width - 100; 
            }

            if(this.ypos + 100 >= w.height || this.ypos <= 0)
            {
                this.speedY = (this.ypos <= 0) ? Math.floor(-this.speedY * w.k) : Math.ceil(-this.speedY * w.k);
                this.ypos = (this.ypos <= 0) ? 0 :  w.height - 100;
            }        
        
        }
    };
}

function KeyReader(e)
{
    switch(e.keyCode)
    {
        case 37: 
            w.gX = -w.standartG;
            w.gY = 0;
            break;
        case 38:
            w.gX = 0;
            w.gY = -w.standartG;
            break;
        case 39:
            w.gX = w.standartG;
            w.gY = 0;
            break;
        case 40:
            w.gX = 0;
            w.gY = w.standartG;
            break;
    }

}

function main()
{
    
    ballObj.Move();
    ballObj.Draw()
    //alert(w.width);
    requestAnimationFrame(main);
}


document.addEventListener("keydown", KeyReader);
const ballObj = BallCreator(1, 10, 10);

main();