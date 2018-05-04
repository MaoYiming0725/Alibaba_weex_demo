<template>
  <div class="wrapper">
    <text class="head">{{head}}</text>
    <scroller class="scroll" scroll-direction="horizontal" show-scrollbar="false">
      <div class="column" v-for="item in infoList">
        <image class="img" resize="stretch" :src="item.src" ></image>
        <text class="title">{{item.title}}</text>
      </div>
    </scroller>
  </div>
</template>
<style scoped>
.head{
  margin-top:20px;
  margin-left: 25px;
}

.scroll{
  flex-direction: row;
  height: 300px;
}

.column{
  width: 700px;
  height:300px;
  margin-left:25px;
  justify-content: center;
}

.img{
  width: 700px;
  height: 500px;
  position: absolute;
  top: 0;
}

.title{
  font-size:50px;
  font-weight: bold;
  width: 600px;
  text-align: left;
  padding-left:35px;
  color: white;
}
</style>
<script>
    export default {
        props:["head","infoList"],
        data () {
            return {
              header:"EXPERTS' CHOICE",
              img:[
                { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
              ]
            }
        },
        methods: {
        }
    }
</script>
