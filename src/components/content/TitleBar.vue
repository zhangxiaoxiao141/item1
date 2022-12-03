<template>
    <div class="title">
        {{content}}
        <p></p>
    </div>
  
</template>

<script>
export default {
    name:"TitleBar",
    props:[
        "content"
    ]

}
</script>

<style scoped>
p{
    border-top: 2px solid #279DFE;  
    width: 39px;
    margin: 0 auto;
}

</style>