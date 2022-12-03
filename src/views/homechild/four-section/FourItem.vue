<template>
    <div>
        <div class="img">
            <img :src="content.imgurl" alt="">
        </div>
        <div class="description">
            <p class="desc1">{{content.description}}</p>
            <p class="desc2">{{content.desc}}</p>
        </div>
    </div>
  
</template>

<script>
export default {
    name:"FourItem",
    props:["content"]
}
</script>

<style scoped>
.img{
    width: 284px;
    height: 154px;
    border: 1px dashed gray;
}

.description{
    width: 284px;
    height: 140px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.03);
}
.desc1{
    width: 98px;
    height: 16px;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin: 0 auto;
    margin-top: 21px;
    margin-bottom: 19px;
    /* line-height: 139px; */
}

.desc2{
    width: 214px;
    height: 37px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    margin: 0 auto;
    line-height: 24px;
}

</style>