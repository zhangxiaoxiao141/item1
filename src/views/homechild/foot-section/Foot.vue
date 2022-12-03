<template>
    <div class="foot">
        <section class="sec1">
            <p>前端无忧教育 隶属于驻场教育旗下平台</p>
            <p>© 2019 驻场无忧信息技术有限公司 京ICP备17023025号-1</p>
        </section>
        <section class="sec2">
            <p>扫描二维码 关注前端无忧</p>
        </section>
        <div class="img">
            <img src="~assets/img/二维码.png" alt="">
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.foot{
    height: 124px;
    background: #F0F0F0;
    margin-top: 69px;
    position: relative;
}

.sec1{
    position: absolute;
    left: 359px;
    top: 41px;
    /* width: 262px; */
    height: 13px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 13px;
}

.sec2{
    position: absolute;
    left: 1364px;
    top: 44px;

}

p{
    margin: 0;
    margin-bottom: 23px;
}

.sec2 p{
    width: 84px;
    height: 38px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
}

.img{
    position: absolute;
    left: 1468px;
    top: 16px;
}
</style>