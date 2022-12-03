<template>
    <div class="seconditem">
      <div class="item">
            <div class="img">
                <img :src="content.imgurl" alt="">
            </div>
            <p class="introduce">{{content.introduce}}</p>
            <p class="intro">{{content.intro}}</p>
        </div>
        <div class="bingo">
            <img v-for="item in [0,1,2,3]" :class="classes[item]" :src="content.bingo" alt="">
        </div>
        
        <div class="content">
            <p v-for="item in content.content">{{item}}</p>
        </div>
        <div class="button">
            <p>了解详情</p>
        </div>
      
    </div>
  </template>
  
  <script>
import SecondItemBar from './SecondItemBar'
  export default {
    name:"SecondItem",
    components: { 
        SecondItemBar 
    },
    data(){
        return {
            classes:["first","second","third","four"]
        }
    },
    props:["content"]
  
  }
  </script>
  
  <style scoped>
  .seconditem{
      width: 474px;
      height: 600px;
      background: #F0F8FF;
      border: 1px solid #0378E3;
      border-radius: 6px;
      position: relative;
  }
  
  .yellow{
    background: #FFFBF4;
    border: 1px solid #E1A83F;
    border-radius: 6px;
  }
  .item{
    width: 353px;
    border-bottom: 1px dashed #0277E1;
    margin:0 auto;
    margin-top: 24px;
    padding-bottom: 33px;
  }

.yellow .item{
  border-bottom: 1px dashed #E1A83F;
}
  .img{
    width: 74px;
    height: 74px;
    border: 1px dashed gray;
    margin: 0 auto;
  }

  .introduce{
    width: 80px;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #434343;
    /* line-height: 36px; */
    margin: 8px auto;
  }

  .intro{
    width: 128px;
    height: 14px;
    /* font-size: 18px; */
    font-size: 17px;
    /* 电脑可能没有该字体 导致出格 */
    font-weight: 400;
    color: #999999;
    /* line-height: 36px; */
    margin: 0 auto;
  }

  .content{
    width: 270px;
    height: 228px;
    font-size: 18px;
    font-weight: 400;
    color: #434343;
    line-height: 30px;
    position: absolute;
    left: 115px;
    top: 229px;
  }

  .bingo{
    position: absolute;
    left: 60px;
    top: 223px;
  }

  .bingo .first{
    position: absolute;
    top: 15px;
  }

  .bingo .second{
    position: absolute;
    top: calc(15px + 60px);
  }

  .bingo .third{
    position: absolute;
    top: calc(15px + 120px);
  }

  .bingo .four{
    position: absolute;
    top: calc(15px + 178px);
  }

.button{
    width: 186px;
    height: 44px;
    background: #0277E1;
    border-radius: 22px;
    position: absolute;
    line-height: 44px;
    top: 510px;
    left: 144px;
}

.button p{
    width: 58px;
    height: 12px;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    display: block;
    margin: 0 auto;
    /* line-height: 139px; */
}

.yellow .button{
  background: #E1A83F;
}


  </style>