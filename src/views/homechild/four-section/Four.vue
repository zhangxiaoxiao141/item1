<template>
    <div class="four">
        <title-bar content="为什么选择我们"></title-bar>
        <four-bar></four-bar>

    </div>
  
</template>

<script>
import TitleBar from '@/components/content/TitleBar'
import FourBar from './FourBar';
export default {
    name:"Four",
    components: { 
        TitleBar,
        FourBar 
    },

}
</script>

<style scoped>
.four{
    height: calc(211px + 160px);
}

.title{
    width: 171px;
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #434343;
    margin: 0 auto;
    margin-top: 58px;
    margin-bottom: 57px;
    /* line-height: 139px; */
}

</style>