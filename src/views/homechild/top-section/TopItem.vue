<template>
    <div class="topitem">
        <slot></slot>
    </div>
  
</template>

<script>
export default {
    name:"TopItem"
}
</script>

<style scoped>
.topitem{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
}

</style>