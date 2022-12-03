<template>
    <div class="firstbar">
        <first-item v-for="item in $store.state.firstdata">
            <div class="img">
                <img :src="item.imgurl" alt="">
            </div>
            <p class="introduce">{{item.desc}}</p>
            <div class="intro">入门水平<p>也能</p>做到超神</div>
        </first-item>
    </div>
  
</template>

<script>
import FirstItem from './FirstItem'
export default {
    name:"FirstBar",
    components: { 
        FirstItem 
    }

}
</script>

<style scoped>
.firstbar{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.img{
    width: 93px;
    height: 93px;
    display: block;
    margin: 0 auto;
    margin-top: 16px;
    border: 1px dashed black;
}

</style>