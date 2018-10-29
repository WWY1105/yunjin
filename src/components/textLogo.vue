<template>
    <div class="leftTopText">
        <div class="logo">
            <span>云</span><span>锦</span>
        </div>
        <span class="otherText">绘纹成锦 X 织画成锦</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.leftTopText {
    position: fixed;
    top: 60px;
    left: 40px;
    display: flex;
    align-items: flex-end;
}
.leftTopText .logo{
    color:#cb0715;
    font-size: 24px;
    display: inline-block;
    margin-right: 25px;
}
.leftTopText .logo span{
    display: inline-block;
    border:1px solid #cb0715;
    padding:7px 10px;
    margin: 0 4px;
}
.otherText{
    margin-bottom: 2px;
}
</style>
