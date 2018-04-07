import { Vector } from "../vendor/Vector";

export class TenticlePart {
    public pointA = new Vector();
    public b = {
        x: 0,
        y: 0
    }
    protected contex: any;
    protected angle: number;
    protected lenght: number;
    protected parent: TenticlePart | null;

    constructor(angle: number, ln: number, contex: any, x?:any, y?:number) {
        this.contex = contex;
        if (y != null) {
            this.pointA.x = x;
            this.pointA.y = y!;
        }
        this.angle = angle;
        this.lenght = ln;
    }
    /**
     * to
     */
    public to(targetX: number, targetY: number) {
        let tg = new Vector(targetX | 0, targetY | 0)
        let dir = Vector.subtract(tg, this.pointA);

        this.angle = dir.heading();

        dir.setMagnitude(-this.lenght);

        this.pointA = Vector.add(tg, dir);
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
        let dXY = new Vector(dx, dy);

        this.b = Vector.add(this.pointA, dXY);
    }
    /**
     * draw
     */
    public draw() {
        this.contex.beginPath();
        this.contex.moveTo(this.pointA.x, this.pointA.y)
        this.contex.lineTo(this.b.x, this.b.y)
        this.contex.stroke()

        this.contex.beginPath();
        this.contex.fillStyle = 'red';
        this.contex.fill()
        this.contex.arc(this.pointA.x, this.pointA.y, 2,0, Math.PI*2)
        this.contex.stroke()
        
        this.contex.beginPath();
        this.contex.arc(this.b.x, this.b.y, 2, 0, Math.PI * 2)
        this.contex.fill()
        this.contex.stroke()
    }
}