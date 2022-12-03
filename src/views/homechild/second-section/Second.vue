<template>
    <div class="second">     
        <title-bar content="开发服务方案"></title-bar>
        <second-bar></second-bar>
    </div>
  
</template>

<script>
import TitleBar from '@/components/content/TitleBar';
import SecondBar from './SecondBar'
export default {
    name:"Second",
    components: { 
        SecondBar,
        TitleBar 
    },

}
</script>

<style scoped>
.second{
    width: calc(100% - 455px - 458px);
    margin: 0 auto;
    margin-top: 60px;
}
.title{
    width: 148px;
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #434343;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 55px;
    /* line-height: 139px; */
}


</style>