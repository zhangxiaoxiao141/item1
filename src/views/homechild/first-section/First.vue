<template>
    <div class="first">
        <title-bar content="技术细分方向"></title-bar>
        <first-bar class="firstbar"></first-bar>
    </div>
  
</template>

<script>
import TitleBar from '@/components/content/TitleBar'
import FirstBar from './FirstBar'
export default {
    name:"First",
    components: { 
        FirstBar,
        TitleBar 
    }

}
</script>

<style scoped>

.first{
    width: calc(100% - 360px - 360px);
    margin: 0 auto;
    background: #fff;
}

.title{
    width: 147px;
    height: 24px;
    margin: 0 auto;
    font-size: 24px;
    font-weight: bold;
    color: #434343;
    margin-top: 59px;
    margin-bottom: 58px;
    /* line-height: 139px; */
}

</style>