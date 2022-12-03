<template>
    <div class="fivebar">
        <five-item v-for="item in $store.state.fivedata" :content="item" class="fiveitem"></five-item>
    </div>
  
</template>

<script>
import FiveItem from './FiveItem';
export default {
    name:"FiveBar",
    components:{
        FiveItem
    }

}
</script>

<style scoped>
.fivebar{
    width:calc(100% - 356px - 356px) ;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.fiveitem{
    margin-bottom: 15px;
}

</style>