<template>
    <div class="home">
        <top></top>
        <first></first>
        <second></second>
        <third></third>
        <four></four>
        <five></five>
        <foot></foot>
    </div>
  
</template>

<script>
import Top from './homechild/top-section/Top';
import First from './homechild/first-section/First';
import Second from './homechild/second-section/Second';
import Third from './homechild/third-section/Third';
import Four from "./homechild/four-section/Four";
import Five from './homechild/five-section/Five';
import Foot from './homechild/foot-section/Foot';
export default {
    name:"Home",
    components:{
        Top,
        First,
        Second,
        Third,
        Four,
        Five,
        Foot
    }

}
</script>

<style scoped>


</style>