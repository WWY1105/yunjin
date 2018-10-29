<template>
    <div id="categoryItems">
    
        <!-- 背景文字 -->
    
        <fixText :bottomTextShow="bottomTextShow"></fixText>
    
        <!-- 右上角返回主页按钮 -->
    
        <span class="goBackHome" @click.self="goToHome">Home</span>
    
        <div class="content">
    
           <div class="left">
                <span class="enName">{{categoryItems.enName}}</span><br>
            <span class="title">Painting</span><br>

            <span class="smallTitle">in Yunjin Brocade</span><br>

            <span class="cnName">{{categoryItems.cnName}}</span><br>
           </div>
           <div class="right">
               <div class="picBox" v-for="item,index in categoryItems.data" :key="item.id">
                   <img :src="item.src" alt="" >
               </div>
           </div>

    
        </div>
    
    </div>
</template>

<script>
import fixText from "@/components/fixText";

export default {
  data() {
    return {
      bottomTextShow: false,

      categoryItems: {
        enName: "Portrait",

        cnName: "人物",

        data: [
          {
            src: require("../../assets/images/category1.jpg"),

            id: 0
          },

          {
            src: require("../../assets/images/category1.jpg"),

            id: 1
          },

          {
            src: require("../../assets/images/category1.jpg"),

            id: 2
          },

          {
            src: require("../../assets/images/category1.jpg"),

            id: 3
          },

          {
            src: require("../../assets/images/category1.jpg"),

            id: 4
          },

          {
            src: require("../../assets/images/category1.jpg"),

            id: 5
          },

          {
            src: require("../../assets/images/category1.jpg"),

            id: 6
          },

          {
            src: require("../../assets/images/category1.jpg"),

            id: 7
          }
        ]
      }
    };
  },

  mounted() {},

  components: {
    fixText
  },

  methods: {
    goToHome() {
      console.log("点击");

      this.$router.push({
        path: "/category"
      });
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.content {
  padding: 35px;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  height: auto;
}
.content .right{
   width: 70%;
   background: #f3f2f7;
   max-height: 550px;
   padding: 40px 30px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}
.content .right .picBox{
    margin-right: 30px;
    margin-bottom: 40px;
}
.content span {
  display: inline-block;
}
.content .title {
  margin: 8px 0;
  color: #b3a777;
  font-size: 30px;
}

.content .enName,
.content .smallTitle {
  font-size: 14px;
  color: #b3a777;
}
.content .smallTitle,
.content .cnName {
  padding-left: 35px;
}
.content .cnName {
  margin-top: 18px;
  font-size: 18px;
}
#categoryItems {
  width: 100%;

  height: 100%;

  background: #fcfafb;

  /* padding: 30px 60px 60px 30px; */
}

.goBackHome {
  margin-top: 30px;

  margin-left: 30px;

  font-size: 14px;

  color: #005fce;

  padding: 0 4px 3px 4px;

  border-left: 2px solid #b3a777;

  border-right: 2px solid #b3a777;

  text-decoration: underline;

  display: inline-block;
}
</style>
