<template>
    <div class="firstitem">
        <slot></slot>
    </div>
  
</template>

<script>
export default {
    name:"FirstItem",
    

}
</script>

<style scoped>
.firstitem{
    width: 284px;
    height: 188px;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.11);
    border-radius: 3px;
    margin-right: 12px;
}



.introduce{
    width: 106px;
    height: 18px;
    /* font-size: 16px; */
    font-size: 15px;
    font-weight: bold;
    color: #666666;
    /* line-height: 139px; */
    margin: 0 auto;
    margin-bottom: 17px;
}
.intro{
    width: 143px;
    height: 14px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    /* line-height: 139px; */
    margin: 0 auto;
}

.intro p{
    display: inline;
    border-top: 1px solid #279DFE;
    width: 30px;
    height: 1px;
    padding-top: 10px;
}
</style>