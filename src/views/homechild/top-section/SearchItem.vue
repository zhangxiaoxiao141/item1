<template>
    <div class="searchitem">
        <input type="search" placeholder="输入想搜索的内容">
        <img src="~assets/img/搜索.png" alt="" class="search">
    </div>
  
</template>

<script>
export default {
    name:"SearchItem"

}
</script>

<style scoped>

.searchitem{
    position: relative;
    width: 248px;
    height: 38px;
}
input{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border: none;
    border-radius: 19px;
    outline: none;
    padding-left: 23px;
    padding-right: 30px;
}
.search{
    position: absolute;
    top: 8px;
    right: 13px;

}
</style>