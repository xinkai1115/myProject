<template>
    <div class="goods_detail">
        <div class="det-head" >
            <a class="head-l" href="#"></a>
            <h1>商品详情</h1>
            <a class="head-r" href="">首页</a>
        </div>
        <div class="swiper-con" >
            <swiper :options="swiperOption" class="swiper_box" >
                <swiper-slide><img src="../assets/img/home.svg"></swiper-slide>
                <swiper-slide><img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18462/display_18462_69001.jpg"></swiper-slide>
                <swiper-slide><img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18462/display_18462_69001.jpg"></swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "goodsDetail",
        components:{
            swiper,
            swiperSlide
        },
        data(){
            return{
                swiperOption: {
                    pagination:{
                        el:'.swiper-pagination'
                    },
                    slidesPerView:1,
                    autoplay:{
                        delay:3000,
                        disableOnInteraction:false
                    },
                    spaceBetween:30,
                    loop:true
                }
            }
        },
        created(){
            this.$http.get(`${this.$api}/detail?goodsId=5bc5d76650ffb124431cec7f`).then(({data})=>{
                console.log(data);
            })
        }

    }
</script>

<style lang="less" scoped>

    .goods_detail{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        .det-head{
            position: relative;
            height: 88px;
            h1{
                height: 88px;
                line-height: 88px;
                text-align: center;
                color: #a38d6b;
            }
            .head-l{
                position: absolute;
                width:88px;
                height: 100%;
                left: 0;
                top: 0;
                &:after{
                    content: '';
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    background: url("../assets/img/back.svg") no-repeat center;
                    -webkit-background-size: 400px 400px;
                    background-size: 400px 400px;
                    top: 50%;
                    margin-top: -20px;
                    background-position: -80px -120px;
                    left: 20px;
                }
            }
            .head-r{
                box-sizing: border-box;
                position: absolute;
                width: 108px;
                height: 88px;
                line-height: 88px;
                padding-left:32px;
                right: 0;
                top: 0;
                color: #a38d6b;
                font-size: 20px;
                &:before{
                    content: '';
                    position: absolute;
                    width: 32px;
                    height: 32px;
                    background: url("../assets/img/home.svg") no-repeat center;
                    -webkit-background-size: 64px 160px;
                    background-size: 64px 160px;
                    left: 0;
                    top: 50%;
                    margin-top: -18px;
                    background-position: 0 0;
                    transform: scale(0.9);
                    -webkit-transform: scale(0.9);
                }
            }
        }
        background-color: #fff;
        .swiper-con{
            height: 480px;
            .swiper_box{
                height: 100%;
                width: 100%;
            }
        }


    }
</style>