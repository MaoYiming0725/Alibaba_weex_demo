<template>
  <div>
    <div style="position: absolute; width:750px; height:300px;">
      <image class="background_img" src="http://img95.699pic.com/photo/50068/7102.jpg_wh300.jpg!/fh/300//quality/90"></image>
    </div>
    <list class="wrapper" style="height: 1200px;" @scroll="scrollHandler">
      <header>
        <div class="header_block" style="margin-bottom: 200px;" :class="[headerStyleHandler()]">
          <text class="header_text">{{pageInfo.head}}</text>
        </div>
      </header>
      <cell class="abstract">
        <div class="ab_block">
          <text class="ab_title">{{abstract.title}}</text>
          <text class="ab_content">{{abstract.content}}</text>
        </div>
      </cell>
      <cell>
        <block2 :head="recommend.head" :productList="recommend.productInfoList"></block2>
          <!--
          <div class="producr_image" @appear="appearHandler(idx)">
            <image class="img" :src="item.src"></image>
          </div>
          <text class="product_title">{{item.title}}</text>
          <text class="product_price">{{item.price}}</text>
          -->
      </cell>
    </list>
  </div>
</template>
<style scoped>

.background_img{
  position: absolute;
  width:750px;
  height:300px;
}

.wrapper{
  background-color: rgba(0, 0, 0, 0.05);
  flex-direction: row;
}

.header_block{
  width:750px;
  height: 100px;
  justify-content: center;
  align-items: center;
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

.header_text{
  text-align: center;
}

.abstract{
  width:750px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ab_block{
  width:700px;
  height: 150px;

}

.ab_title{
  text-align: left;
  font-size: 40px;
  margin-bottom: 10px;
}

.ab_content{
  text-align: left;
  font-size: 25px;
}

</style>
<script>
import Block2 from "@/components/Block2.vue";
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const animation = weex.requireModule('animation');
const dom = weex.requireModule('dom');
export default {
  components: {
    'block2': Block2,
  },
  data () {
    return {
      pageInfo: {
        head: "ELECTRONICS & ENTERTAINMENT",
        content_offset: 0,
        styleObj:{
          height: weex.config.env.deviceHeight
        },

      },
      abstract: {
        title:"Smart Gadget Marketplace",
        content:"Can't find the next top selling products? We provide the varies smart gadgets which can keep the high retail price.",
      },
      recommend:{
        head: "Recommended for you",
        productInfoList:[
          {title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src:"//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50"},
          {title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src:"//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50"},
          {title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src:"//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50"},
          {title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src:"//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50"},
          {title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src:"//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50"},
          {title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src:"//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50"},
        ],
        imgSrc: [],
      },
    }
  },


  methods:{
    headerStyleHandler(){
      if(this.pageInfo.content_offset < 200){
        let tmp = parseInt(this.pageInfo.content_offset / 20);
        return 'header' + tmp.toString();
      }
      else{
        return 'header';
      }
    },
    appearHandler(idx){
      const _this = this;
      setTimeout(function(){
      },800);
    },

    scrollHandler(event){
      this.pageInfo.content_offset = -event.contentOffset.y;
    },


  }
}
</script>
