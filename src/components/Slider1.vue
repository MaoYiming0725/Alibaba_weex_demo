<template>
    <slider class="slider" ref="slider" @change="onchange" @scroll="scrollHandler" offset-x-accuracy="0.05" auto-play="false" infinite="false">
      <div class="frame"  v-for="item,idx in infoList">
        <image v-bind:style="imgStyle[idx]" resize="stretch" class="img" :src="item.src" ></image>
        <!--<div class="title_block">
          <text class="title">{{item.title1}}</text>
          <text class="title">{{item.title2}}</text>
        </div>-->
      </div>
    </slider>
</template>
<style scoped>
  .slider{
    width:750px;
    height: 500px;
  }
  .frame{
    width:750px;
    height: 500px;
    justify-content: center;
    align-items: center;
  }
  .img{
    width:700px;
    height: 500px;
  }
  .title_block{
    padding-top: 50px;
  }
  .title{
    font-size:40px;
    font-weight: bold;
    width: 400px;
    text-align: center;
    color: white;
  }
</style>
<script>
    const modal = weex.requireModule('modal');
    export default {
        props:["infoList", "pic_index"],
        data () {
            return {
              imgStyle:[],
            }
        },
        created () {
          for(var i = 0; i < this.infoList.length; i++){
            this.imgStyle.push({ width: '700', height: '500'});
          }
        },
        mounted () {
          for(var i = 0; i < this.infoList.length; i++){
            this.imgStyleHandler(i);
          }
        },
        methods: {
            onchange(event) {
              this.$parent.$emit("slider-change", event.index);
            },
            picSet(index){
              if(this.pic_index == index)return 'img';
              else return 'img1';
            },
            scrollHandler(event){
              //modal.toast({message: event.offsetXRatio + ':' + this.pic_index, duration: 0.5});
              this.imgStyleHandler(this.pic_index, Math.abs(event.offsetXRatio));
              if(event.offsetXRatio < 0 && this.pic_index < this.infoList.length - 1){
                this.imgStyleHandler(this.pic_index + 1,  1 - Math.abs(event.offsetXRatio));
              }
              if(event.offsetXRatio > 0 && this.pic_index > 0){
                this.imgStyleHandler(this.pic_index - 1,  1 - Math.abs(event.offsetXRatio));
              }
            },
            imgStyleHandler(idx, scale){
              //console.log(this.imgStyle);
              let w, h;
              if(scale == undefined){
                if(idx != this.pic_index){
                  scale = 1;
                }else{
                  scale = 0;
                }
              }
              w = 650 - scale * 100;
              h = 450 - scale * 100;
              this.imgStyle[idx].width = w.toString();
              this.imgStyle[idx].height = h.toString();
            }

        }
    }
</script>
