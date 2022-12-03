<template>
    <div class="home">
        <top-bar class="top"></top-bar>
        <div class="swiper">
            <img src="~assets/img/banner_slices/banner.png" alt="">
            <div class="introduce">
                <div class="infirst">
                    <p>专注于</p>技术服务驻场远程服务商</div>
                <div class="insecond">给企业提供灵活用工技术研发人才</div>
                <div class="inthird">解决企业招聘难题</div>
            </div>
        </div>
    </div>
  
</template>

<script>
import TopBar from './TopBar.vue';
export default {
    name:"Home",
    components:{
        TopBar
    }

}
</script>

<style scoped>
.home{
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
    position: absolute;
    top: 0;
    left: 0;
}

.infirst,.insecond,.inthird{
    margin-top: 46px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;
    flex-wrap: nowrap;
}

p{
    display: inline;
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