<template>
  <div>
    <div style="position: absolute; width:750px; height:500px;">
      <image class="background_img" :src="sliderInfo.sliderList[sliderInfo.pic_index].src"></image>
      <image ref="cover" class="background_img trans" :src="sliderInfo.sliderList[sliderInfo.pic_index0].src" v:bind-style="pageInfo.bgImgObj"></image>
    </div>
    <list class="wrapper" @loadmore="fetch" loadmoreoffset="100" style="height: 1200px;" @scroll="scrollHandler">
      <header>
        <div class="header_block" :class="[headerStyleHandler(pageInfo.scroll_count)]">
          <text class="header_text">{{pageInfo.head}}</text>
        </div>
      </header>
      <cell>
        <div class="slider1_block">
          <slider1 :infoList = "sliderInfo.sliderList" :pic_index="sliderInfo.pic_index"></slider1>
        </div>
      </cell>
      <cell>
        <div class="scroll_block">
          <block1 :head="experts.head" :infoList="experts.imgList"></block1>
        </div>
      </cell>
      <cell>
        <text class="recommend_head">{{recommend.head}}</text>
      </cell>
      <cell v-for="item,idx in recommend.imgList">
        <div class="list_item">
          <text class="list_title">{{item.title}}</text>
          <div class="listImage" @appear="appearHandler(idx)">
            <image class="img" :src="recommend.imgSrc[idx].src1"></image>
            <image class="img" :src="recommend.imgSrc[idx].src2"></image>
            <image class="img" :src="recommend.imgSrc[idx].src3"></image>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>
<style scoped>
.background_img{
  -webkit-filter: blur(10px); /* Chrome, Opera */
     -moz-filter: blur(10px);
      -ms-filter: blur(10px);
          filter: blur(10px);
  position: absolute;
  width:750px;
  height:500px;
}

.trans{
  -webkit-transition-property: 'opacity';
  -webkit-transition-duration: '500ms';
}

.wrapper{
  background-color: rgba(0, 0, 0, 0.05);
}
.column{
  width: 750px;
  height:100px;
}
.header0{
  background-color: rgba(255, 255, 255, 0);
}
.header1{
  background-color: rgba(255, 255, 255, 0.1);
}
.header2{
  background-color: rgba(255, 255, 255, 0.2);
}
.header3{
  background-color: rgba(255, 255, 255, 0.3);
}
.header4{
  background-color: rgba(255, 255, 255, 0.4);
}
.header5{
  background-color: rgba(255, 255, 255, 0.5);
}
.header6{
  background-color: rgba(255, 255, 255, 0.6);
}
.header7{
  background-color: rgba(255, 255, 255, 0.7);
}
.header8{
  background-color: rgba(255, 255, 255, 0.8);
}
.header9{
  background-color: rgba(255, 255, 255, 0.9);
}
.header{
  background-color: rgba(255, 255, 255, 1);
}

.header_block{
  width:750px;
  height: 100px;
  justify-content: center;
  align-item: center;
}

.header_text{
  text-align: center;
}

.slider1_block{
  width:750px;
  height: 500px;
  margin-top: 20px;
  justify-content: center;
  align-item: center;
}

.scroll_block{
  width:750px;
  margin-top: 20px;
}

.recommend_head{
  margin-top: 20px;
  margin-left: 25px;
}

.list_item{
  width: 650px;
  height: 250px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  background-color:rgba(255, 255, 255, 1);
  justify-content: center;
  align-item: center;
  border-radius: 10px;
}

.list_title{
  font_end: 46px;
  text-align: left;
  padding-left:10px;
}

.listImage{
  width: 650px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
}

.img{
  width: 150px;
  height:150px;
}

@keyframes my_opacity{
  from {opacity: 1;}
  to {opacity: 0;}
}
</style>
<script>
import Slider1 from "../components/Slider1.vue";
import Block1 from "../components/Block1.vue";
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const animation = weex.requireModule('animation');
const dom = weex.requireModule('dom');
export default {
  name: 'App',
  components: {
    'slider1': Slider1,
    'block1': Block1,
  },
  data () {
    return {
      pageInfo: {
        head: "ELECTRONICS & ENTERTAINMENT",
        content_offset: 0,
        styleObj:{
          height: weex.config.env.deviceHeight
        },
        bgImgObj: {
          opacity: '1',
        },

      },
      sliderInfo: {
        pic_index: 0,
        pic_index0: 0,
        sliderList: [
          { title1: "Smart Gadget", title2: "Marketplace", src: 'http://img95.699pic.com/photo/50068/7102.jpg_wh300.jpg!/fh/300//quality/90'},
          { title1: "Outdoor sports", title2: " products in spring", src: 'http://img95.699pic.com/photo/50081/8379.jpg_wh300.jpg!/fh/300//quality/90'},
          { title1: "Selected Electronic", title2: " Cigarette Brands", src: 'http://img95.699pic.com/photo/50053/7463.jpg_wh300.jpg!/fh/300//quality/90'},
          { title1: "Consumer Electronics", title2: " Accessories Marketplace", src: 'http://img95.699pic.com/photo/50026/9909.jpg_wh300.jpg!/fh/300//quality/90'}

        ],
      },
      experts:{
        head: "EXPERTS' CHOICE",
        imgList: [
          { title: "FISHING PRODUCTS EXPO", src: 'http://img95.699pic.com/photo/50001/3850.jpg_wh300.jpg!/fh/300//quality/90'},
          { title: "SHENZHEN ECIG EXPO", src: 'http://img95.699pic.com/photo/50000/3850.jpg_wh300.jpg!/fh/300//quality/90'},
          { title: "TOYS FROM MAJOR MANUFACTURERS", src: 'http://img95.699pic.com/photo/50008/5974.jpg_wh300.jpg!/fh/300//quality/90'},
          { title: "FEATURED SPORTS SUPPLIERS", src: 'http://img95.699pic.com/photo/50019/1108.jpg_wh300.jpg!/fh/300//quality/90'},
          { title: "QUALIFIED E-CIFARETTE BRANDS", src: 'http://img95.699pic.com/photo/00017/0541.jpg_wh300.jpg!/fh/300//quality/90'},
        ],
      },
      recommend:{
        head: "YOU MAY LIKE",
        imgList:[
          {title: "Smart Gadget Marketplace", src1:"http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2:"http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3:"http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg"},
          {title: "Smart Gadget Marketplace", src1:"http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2:"http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3:"http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg"},
          {title: "Smart Gadget Marketplace", src1:"http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2:"http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3:"http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg"},
          {title: "Smart Gadget Marketplace", src1:"http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2:"http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3:"http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg"},
          {title: "Smart Gadget Marketplace", src1:"http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2:"http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3:"http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg"},
          {title: "Smart Gadget Marketplace", src1:"http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2:"http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3:"http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg"},
        ],
        imgSrc: [],
      },
    }
  },

  created (){
    //const initSrc = {src1:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src2:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src3:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg"};
    //const initSrc = {src1: '', src2: '', src3: ''};
    for(let i = 0; i < this.recommend.imgList.length; i++){
      this.recommend.imgSrc.push({src1: '', src2: '', src3: ''});
    }
    this.$on('slider-change', function(){
      //modal.toast({message: this.sliderInfo.pic_index, duration: 0.5});
      this.sliderChangeHandler(arguments[0]);
    });
  },

  methods:{
    headerStyleHandler(scrollCount){
      if(this.pageInfo.content_offset < 200){
        let tmp = parseInt(this.pageInfo.content_offset / 20);
        return 'header' + tmp.toString();
      }
      else{
        return 'header';
      }
    },
    fetch(event){
      modal.toast({message: "loadmore", duration: 1});
      setTimeout(() => {
        const length = this.recommend.imgList.length;
        //const data = {title: "Smart Gadget Marketplace", src1:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src2:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src3:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg"};
        //const initSrc = {src1: '', src2: '', src3: ''};
        for(var i = length; i < length + 4; i++){
          this.recommend.imgList.push({title: "Smart Gadget Marketplace", src1:"http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2:"http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3:"http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg"});
          this.recommend.imgSrc.push({src1: '', src2: '', src3: ''});
        }
      },800);
    },
    sliderChangeHandler(idx){
      const cover = this.$refs.cover;
      let _this = this;
      this.sliderInfo.pic_index = idx;
      modal.toast({message: idx, duration: 0.5});
      animation.transition(cover, {
          styles: {
            opacity: '0',
          },
          duration: 500, //ms
          timingFunction: 'ease',
          needLayout:false,
          delay: 0 //ms
        }, function () {
          //modal.toast({ message: 'animation finished.', duration: 0.5});
          _this.sliderInfo.pic_index0 = _this.sliderInfo.pic_index;
          animation.transition(cover, {
              styles: {
                opacity: '1',
              },
              duration: 0, //ms
              needLayout:false,
              delay: 0 //ms
            });

        });
    },
    appearHandler(idx){
      //const top = this.getOffsetTop(event.target);
      const _this = this;
      setTimeout(function(){
        _this.recommend.imgSrc[idx].src1 = _this.recommend.imgList[idx].src1;
        _this.recommend.imgSrc[idx].src2 = _this.recommend.imgList[idx].src2;
        _this.recommend.imgSrc[idx].src3 = _this.recommend.imgList[idx].src3;
      },800);
    },

    scrollHandler(event){
      this.pageInfo.content_offset = -event.contentOffset.y;
    },

    getOffsetTop(ele){
      let top = ele.offsetTop;
      let node = ele.offsetParent;
      while(node != null){
        top += node.offsetTop;
        node = node.offsetParent;
      }
      return top;
    },

  }
}
</script>
