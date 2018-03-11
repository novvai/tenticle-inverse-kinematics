export class TenticlePart {
    public a = {
        x: 0,
        y: 0
    };
    public b = {
        x: 0,
        y: 0
    }
    protected contex: any;
    protected angle: number;
    protected lenght: number;
    protected parent: TenticlePart | null;

    constructor(angle: number, ln: number, contex: any, x:any, y?:number) {
        this.contex = contex;
        if (y != null) {
            this.a.x = x;
            this.a.y = y!;
        }else{
            this.parent = x;
            // this.to(this.parent!.a.x, this.parent!.b.y)
        }
        this.angle = angle;
        this.lenght = ln;
    }
    /**
     * to
     */
    public to(targetX: number, targetY: number) {
        let tg = {
            x: targetX | 0,
            y: targetY | 0
        }
        let dir = {
            x: tg.x - this.a.x,
            y: tg.y - this.a.y
        }
        this.angle = Math.atan2(dir.y, dir.x);
        let mag = Math.sqrt(Math.pow(dir.x, 2) + Math.pow(dir.y, 2))
        if (mag != 0 && mag !=1){
            dir.x /= mag;
            dir.y /= mag;
        }
        dir.x *= this.lenght;
        dir.y *= this.lenght;
        dir.x = -dir.x;
        dir.y = -dir.y;

        this.a.x = dir.x + tg.x;
        this.a.y = dir.y + tg.y;
    }
    /**
     * update
     */
    public update() {
        this.calculate();
    }
    /**
     * calculat`e
     */
    private calculate() {
        let dx = this.lenght * Math.cos(this.angle);
        let dy = this.lenght * Math.sin(this.angle);

        this.b.x = this.a.x + dx;
        this.b.y = this.a.y + dy;
    }
    /**
     * draw
     */
    public draw() {
        this.contex.beginPath();
        this.contex.moveTo(this.a.x, this.a.y)
        this.contex.lineTo(this.b.x, this.b.y)
        this.contex.stroke()

        this.contex.beginPath();
        this.contex.fillStyle = 'red';
        this.contex.fill()
        this.contex.arc(this.a.x, this.a.y, 2,0, Math.PI*2)
        this.contex.stroke()
        
        this.contex.beginPath();
        this.contex.arc(this.b.x, this.b.y, 2, 0, Math.PI * 2)
        this.contex.fill()
        this.contex.stroke()
    }
}