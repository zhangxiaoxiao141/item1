<template>
    <div class="secondbar">
        <second-item v-for="(item,index) in content" :content="item" :class="{'yellow': index == 1}"></second-item>

    </div>
  
</template>

<script>
import SecondItem from './SecondItem'
export default {
    name:"SecondBar",
    components: { 
        SecondItem 
    },
    data(){
        return{
            content:[
                {
                    imgurl:require("assets/img/组驻场服务.png"),
                    introduce:"驻场服务",
                    intro:"On site service",
                    bingo:require("assets/img/对号.png"),
                    content:["按月聘用程序员,最快一天到岗,节省55%的人力成本。" ,"1-5年+经验多层次" ,"可选全职兼职，支持定制每周工时", "每天提交日报，进度可控"],    
                },
                {
                    imgurl:require("assets/img/远程服务.png"),
                    introduce:"远程服务",
                    intro:"Remote service",
                    bingo:require("assets/img/对号黄.png"),
                    content:["按月聘用程序员,最快一天到岗,节省55%的人力成本。" ,"1-5年+经验多层次" ,"可选全职兼职，支持定制每周工时", "每天提交日报，进度可控"],    
                }
            ]

        }
    }

}
</script>

<style scoped>
.secondbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>