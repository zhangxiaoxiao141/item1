<template>
    <div class="hometop">
        <top-bar class="top"></top-bar>
        <swiper></swiper>
        <div class="introduce">
            <div v-for="(item,index) in desc" :class="classes[index]">{{item}}</div>
            <p></p>
        </div>
    </div>
  
</template>

<script>
import Swiper from 'components/content/Swiper';
import TopBar from './TopBar.vue';
export default {
    name:"Top",
    components:{
        TopBar,
        Swiper
    },
    data(){
        return{
            desc:[
                "专注于技术服务驻场远程服务商",
                "给企业提供灵活用工技术研发人才",
                "解决企业招聘难题"
            ],
            classes:["infirst","insecond","inthird"]
        }
    }

}
</script>

<style scoped>
.hometop{
    width: 1920px;
    height: 660px;
    background: #EBEBEB;
}
.top{
    width: 100%;
    height: 660px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    margin-top: 22px;
}
.swiper{
    width: 1920px;
    height: 660px;
    position: absolute;
    top: 0;
    left: 0;
}

.infirst,.insecond,.inthird{
    margin-top: 46px;
    font-weight: 400;
    color: #FFFFFF;
    flex-wrap: nowrap;
}

p{  
    position: absolute;
    left: 359px;
    top: calc(287px + 21px + 19px);
    display: inline;
    width: 113px;
    height: 2px;
    background: #FFBA00;
}
.infirst{
    /* width: 601px; */
    height: 43px;
    font-size: 43px; 
    position: absolute;
    left: 359px;
    top: 225px; 
}

.insecond{
    /* width: 539px; */
    height: 35px;
    font-size: 36px; 
    position: absolute;
    left: 362px;
    top: 325px; 
}

.inthird{
    /* width: 288px; */
    height: 35px;
    font-size: 36px;
    position: absolute;
    left: 360px;
    top: 406px;
}

</style>