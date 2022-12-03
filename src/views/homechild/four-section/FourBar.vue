<template>
    <div class="fourbar">
        <four-item v-for="item in $store.state.fourdata" :content="item" class="fouritem"></four-item>
    </div>
  
</template>

<script>
import FourItem from './FourItem';
export default {
    name:"FourBar",
    components:{
        FourItem
    }

}
</script>

<style scoped>
.fourbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 359px - 359px);
    margin: 0 auto;
}


.fouritem{
    width: 284px;
    height: 140px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.03);
}
</style>