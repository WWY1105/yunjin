<template>
    <div id="bgText">
         <!-- 又上方固定文字 -->
            <div class="topText">
                <p>南京云锦研究所</p>
                <p>NANJING YUNJIN RESEARCH INSTITUTE</p>
            </div>
        <!-- 右下方固定文字 -->
        <div class="bottomText" v-if="bottomTextShow">
                <p>南京云锦 | 人类非物质文化遗产</p>
                <p>Nanjing Yunjin Brocade | Human Intangible Cultual Heritage</p>
            </div>
    </div>
</template>

<script>
export default {
    props:['bottomTextShow']
};
</script>

<style>
#bgText {
  color: #3e3936;
  width: 100%;
  position: absolute;
  height: 100%;
  /* z-index: -999; */
  font-size: 11px;
}
.topText {
  position: fixed;
  top: 10px;
  right: 10px;
  transform: rotateZ(90deg);
  top: 92px;
  right: -51px;
}
.bottomText{
    position: fixed;
    bottom:10px;
    right: 25px;
    text-align: right;
}
</style>
