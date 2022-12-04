export class Swiper{
    constructor(options){
        this.$options = options
        this.__init()
        this.__thetime()
        this.__scroll()
        console.log(this)
    }
    __init(){
        this.content = document.querySelector(this.$options.content)
        this.item = document.querySelectorAll(this.$options.item)
        this.page = document.querySelector(this.$options.page).children
        this.$current = 0;
        [...this.page][0].style.opacity = "1"
    }

    __scroll(){
        [...this.page].forEach((item,index) => {
            item.onclick = () => {
                clearInterval(this.timer)
                this.$current = index
                this.__move()
                this.__thetime()
            }
        })
    }

    __move(){
        this.content.style.left = -1920 * this.$current + "px"
        
    }

    __thetime(){
        this.timer = setInterval(() => {
            this.content.style.transition = "all .7s"
            if (this.$current == this.item.length - 1){
                this.content.style.transition = "";
                [...this.page][0].style.opacity = "1"
            }
            this.$current = (this.$current + 1) % this.item.length
            this.__move()
            this.__changepage()
        },3000)

    }

    __changepage(){
        if(this.$current == this.item.length - 1){
            [...this.page][0].style.opacity = "1"
        }
        [...this.page][(this.$current - 1 + this.item.length) % this.item.length].style.opacity = "0.1";
        [...this.page][this.$current].style.opacity = "1"
    }

}