<template>
    <div id="category">
    
        <!-- 左上角logo -->
    
        <textLogo></textLogo>
    
        <!-- 背景文字 -->
    
        <fixText></fixText>
    
        <!-- 右上角标题 -->
    
    
    
        <!-- 内容开始-->
    
        <div class="content">
    
            <div class="eachCategory" v-for="item,index in allCategory" @click="gotoSeeItems" :key="index">
    
                <p class="title">{{item.title}}</p>
    
                <div class="categoryList">
    
                    <div class="pibBox" v-for="i,d in item.data">
    
                        <img :src="i.src" alt="">
    
                        <p class="name">{{i.name}}</p>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    
    
    </div>
</template>

<script>
    import fixText from '@/components/fixText';
    
    import textLogo from '@/components/textLogo';
    
    export default {
    
        name: 'category',
    
        data() {
    
            return {
    
            
                allCategory: {
    
                    artsList: {
    
                        title: '艺术品',
    
                        data: [{
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            },
    
                            {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }
    
                        ]
    
                    },
    
                    craftsList: {
    
                        title: '工艺品',
    
                        data: [{
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            },
    
                            {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }, {
    
                                src: require('../../assets/images/category1.jpg'),
    
                                name: '人物'
    
                            }
    
                        ]
    
                    },
    
                }
    
            }
    
        },
    
        components: {
    
            fixText,
    
            textLogo
    
        },
    
        methods: {
    
            gotoSeeItems() {
    
                this.$router.push({
    
                    path: '/categoryItems'
    
                })
    
            }
    
        }
    
    }
</script>

<style scoped>
    #category {
    
        background: #fcfafb;
    
        position: relative;
    
        width: 100%;
    
        height: 100%;
    
    }
    
    
    
    #category .content {
    
        position: absolute;
    
        top: 187px;
    
        left: 40px;
    
        width: 90%;
    
    }
    
    
    
    #category .content .title {
    
        color: #b3a777;
    
        font-size: 24px;
    
        letter-spacing: 5px;
    
    }
    
    
    
    #category .categoryList {
    
        display: flex;
    
        align-items: center;
    
        justify-content: flex-start;
    
        width: 100%;
    
        overflow: scroll;
    
    }
    
    
    
    #category .categoryList .pibBox {
    
        width: 120px;
    
        /* height: 80px; */
    
        margin-right: 15px;
    
        display: flex;
    
        flex-direction: column;
    
        align-items: center;
    
        justify-content: center;
    
    }
    
    
    
    #category .categoryList .pibBox img {
    
        max-height: 80px;
    
    }
    
    
    
    #category .categoryList .pibBox .name {
    
        color: #b3a777;
    
        font-size: 18px;
    
    }
</style>
