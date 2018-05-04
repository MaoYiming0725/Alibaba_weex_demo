<template>
  <div class="wrapper">
    <text class="head">{{head}}</text>
    <div class="box">
      <div class="box_item" v-for="item in productList">
        <image class="img" :src="item.src"></image>
        <text class="title">{{item.title}}</text>
        <text class="price">{{item.price}}</text>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper{
  width: 750px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 10px;
  padding-bottom: 40px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.head{
  margin: 40px;
}

.box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 750px;
}

.box_item{
  width:300px;
  height:400px;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

.img{
  width: 300px;
  height:300px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
}

.title{
  text-align: center;
  font-size: 25px;
  lines: 2;
  width: 300px;
}

.price{
  stext-align: left;
  font-size: 25px;
  width: 300px;
}
</style>
<script>
    export default {
        props:["head","productList"],
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>
