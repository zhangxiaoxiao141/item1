<template>
    <div class="thirdbar">
        <third-item v-for="item in $store.state.thirddata" :content="item"></third-item>
    </div>
  
</template>

<script>
import ThirdItem from './ThirdItem';
export default {
    name:"ThirdBar",
    components:{
        ThirdItem
    }

}
</script>

<style scoped>
.thirdbar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

</style>