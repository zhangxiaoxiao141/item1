<template>
    <div>
        <title-bar content="合作伙伴"></title-bar>
        <five-bar></five-bar>
    </div>
  
</template>

<script>
import TitleBar from '@/components/content/TitleBar'
import FiveBar from './FiveBar';
export default {
    name:"Five",
    components: { 
        TitleBar,
        FiveBar
    },

}
</script>

<style scoped>
.title{
    width: 98px;
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #434343;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 53px;
    /* line-height: 139px; */
}

</style>