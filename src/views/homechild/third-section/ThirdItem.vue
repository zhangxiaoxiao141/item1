<template>
    <div class="item">
        <div class="img">
            <img :src="content.imgurl" alt="">
        </div>
        <div></div>
        <div class="line"></div>
        <div class="cube"></div>
        <p class="description">{{content.description}}</p>
        <div class="desc">
            <p v-for="item in content.desc">{{item}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"ThirdItem",
    props:["content"]

}
</script>

<style scoped>
.item{
    width: 145px;
    text-align: center;
}
.img{
    width: 78px;
    height: 78px;
    border: 1px dashed gray;
    margin: 0 auto;
}

.line{
    margin: 0 auto;
    width: 1px;
    height: 44px;
    background: #D2D2D2;
}

.cube{
    width: 8px;
    height: 8px;
    background: #D2D2D2;
    border-radius: 50%;
    margin: 0 auto;
}
.description{
    margin-top: 55px;
    margin-bottom: 27px;
    height: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #444444;
    /* line-height: 139px; */
}

.desc{
    height: 68px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 14px;
}

</style>