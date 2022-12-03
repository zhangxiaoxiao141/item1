<template>
    <div class="third">
        <title-bar content="服务流程"></title-bar>
        <third-bar class="thirdbar"></third-bar>
        <div class="line"></div>

    </div>
  
</template>

<script>
import TitleBar from '@/components/content/TitleBar';
import ThirdBar from './ThirdBar';
export default {
    name:"Third",
    components:{
        TitleBar,
        ThirdBar
    }

}
</script>

<style scoped>
.third{
    background: url(@/assets/img/背景.png);
    width: 100%;
    height: 500px;
    /* overflow: hidden; */
    margin-top: 70px;
    display: inline-block;
    border: 1px dashed gray;
    position: relative;
}

.title{
    width: 98px;
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #434343;
    /*line-height: 139px;*/
    margin: 0 auto;
    margin-top: 74px;
    margin-bottom: 67px;
}


.thirdbar{
    width: calc(100% - 396px - 396px);
    margin: 0 auto;
    border: red;
}

.line{
    width: 1920px;
    height: 1px;
    background: #D2D2D2;
    position: absolute;
    top: 292px;
}
</style>