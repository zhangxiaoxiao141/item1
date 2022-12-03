<template>
    <div class="topbar">
        <div class="logo">
            <img src="~assets/img/logo.png" alt="">
        </div>
        <search-item class="search"></search-item>
        <top-item v-for="(item,index) in $store.state.topbar" :class="classes[index]">
            <p v-for="i in item">{{i}}</p>
        </top-item>
    </div>
  
</template>

<script>
import TopItem from './TopItem';
import SearchItem from './SearchItem';
export default {
    name:"TopBar",
    components:{
        TopItem,
        SearchItem
    },
    data(){
        return {
            classes:["first","second","third","four"]
        }
    }

}
</script>

<style scoped>
.topbar{
    position: relative;
}

.logo{
    position: absolute;
    left: 356px;
}

p{
    display: inline;
}

.search{
    position: absolute;
    left: 827px;
}

.first{
    width: 208px;
    height: 12px;
    position: absolute;
    left: 550px;
    
}

.second{
    width: 144px;
    height: 12px;
    position: absolute;
    left: 1124px;
    
}

.third{
    width: 188px;
    height: 13px;
    position: absolute;
    left: 1368px;
    
}

</style>