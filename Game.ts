import { Canvas } from "./canvas";
import { TenticlePart } from "./TenticlePart";

export class Game extends Canvas {
    protected mouseEvent: MouseEvent;
    protected elements: Array<TenticlePart> = [];

    protected head: TenticlePart;
    constructor(el: string) {
        super(el, 1396, 800);
        this.setFrames(60);  

        this.head = new TenticlePart(0, 20, this.context, 0, 0);
        this.elements.push(this.head);
        // this.seg2 = new TenticlePart(0, 30, this.context, this.seg1);
        for (let index = 0; index < 20; index++) {
            this.elements.push(new TenticlePart(0, 40, this.context, this.elements[index-1]));
        }
    }

    protected draw() {
        this.context!.clearRect(-this.width / 2, -this.height / 2, this.width, this.height)
        
        this.head.to(this.mouseX, this.mouseY);
        for (let index = 1; index < this.elements.length; index++) {
            this.elements[index].to(this.elements[index - 1].a.x, this.elements[index - 1].a.y);
            this.elements[index].update();
            this.elements[index].draw();
        }
    }
}