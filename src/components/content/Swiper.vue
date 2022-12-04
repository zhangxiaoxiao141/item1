<template>
    <div class="swiper">
        <div class="swiper-content">
            <div class="swiper-item" v-for="item in imgurl">
                <img :src="item" alt="">
            </div>
        </div>
        <div class="page">
            <span></span>
            <span></span>
            <span class="novisi"></span>
        </div>

    </div>
  
</template>

<script>
import {Swiper} from "components/content/swiper/swiper"
export default {
    name:"Swiper",
    data(){
        return{
            imgurl:[
                require("assets/img/banner.png"),
                require("assets/img/banner.png"),
                require("assets/img/banner.png")
            ]
        }
    },
    methods:{
        swiper(){
            new Swiper({
                content:".swiper-content",
                item:".swiper-item",
                page:".page"
            }) 
        }      
    },
    mounted(){
        this.swiper()
    }

}
</script>

<style scoped>
.swiper{
    width: 1920;
    height: 660px;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
}

.swiper-content{
    position: absolute;
    left: 0;
    display: flex;
}


.swiper-item{
    width: 1920;
    height: 660px;
}
.page{
    position: absolute;
    left: 920px;
    bottom: 37px;

}

.page span{
    display: inline-block;
    width: 35px;
    height: 4px;
    background: #F0F0F0;
    opacity: 0.5;
    margin: 0 10px;
}

.page .novisi{
    display: none;
}

</style>