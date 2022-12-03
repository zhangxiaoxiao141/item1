<template>
    <div>
        <div class="img">
            <img :src="content.imgurl" alt="">
        </div>
    </div>
  
</template>

<script>
export default {
    name:"FiveItem",
    props:["content"]

}
</script>

<style scoped>
.img{
    width: 226px;
    height: 96px;
    border: 1px dashed gray;
}

</style>