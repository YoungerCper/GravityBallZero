
const w = {
    standartG: 2,
    gX: 0,
    gY: 2,
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    k: 0.8
};


const ballFactory = {
    ballArray: [],

    Factory(We, R, posx, posy)
    {

        const bodySpace = document.getElementById("main");
        const e = document.createElement('div');

        const we = parseInt(We, 10);
        const r = parseInt(R, 10);
        const posX = parseInt(posx, 10);
        const posY = parseInt(posy, 10);

        e.className = 'ball';
        e.style.top = posY + 'px';
        e.style.left = posX + 'px';
        e.style.background = this.RandomColor();
        e.style.width = 2 * r + 'px';
        e.style.height = 2 * r + 'px';
        bodySpace.appendChild(e);

        const newBall = {
            element: e,
            weight: we,
            xpos: posX,
            ypos: posY,
            speedX: 0,
            speedY: 0,
            diametr: 2 * r,
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
                if(this.xpos + this.diametr >= w.width || this.xpos <= 0)
                { 
                    this.speedX = (this.xpos <= 0) ? Math.floor(-this.speedX * w.k) : Math.ceil(-this.speedX * w.k);
                    this.xpos = (this.xpos <= 0) ? 0 : w.width - this.diametr; 
                }

                if(this.ypos + this.diametr >= w.height || this.ypos <= 0)
                {
                    this.speedY = (this.ypos <= 0) ? Math.floor(-this.speedY * w.k) : Math.ceil(-this.speedY * w.k);
                    this.ypos = (this.ypos <= 0) ? 0 :  w.height - this.diametr;
                }        
            
            }
        };

        this.ballArray.push(newBall);
    },

    Work()
    {
        for(let i = 0; i < this.ballArray.length; i++)
        {
            this.ballArray[i].Draw();
            this.ballArray[i].Move();
        }
    },

    RandomColor()
    {
        let color = Math.floor(Math.random() * 0xFFFFFF);
        return '#' + color.toString(16);
    },

    Сollision(a, b)
    {

    }
};

alert(w.height);

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
    //alert(w.width);
    ballFactory.Work()
    //alert(w.width);
    requestAnimationFrame(main);
}

document.addEventListener("keydown", KeyReader);
ballFactory.Factory(1, 10, 10, 10);

main();