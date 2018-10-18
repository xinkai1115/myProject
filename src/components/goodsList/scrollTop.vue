<template>
    <!--<transtion name="el-fade-in" >-->
        <div class="global_back_top" @click="scrollToTop" v-show="toTopShow" >
            <!--<a href="javascript:void(0)" @click="toTop" class="global_back_top"></a>-->
        </div>
    <!--</transtion>-->
</template>

<script>
    export default {
        name: "scrollTop",
        data(){
          return {
              toTopShow:false
          }
        },
        methods: {
            handleScroll() {
                //首先修改相对滚动位置
                this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
                if (this.scrollTop > 300) {
                    this.toTopShow = true
                }else {
                    this.toTopShow = false
                }
            },
            scrollToTop() {
                let timer = null, _that = this
                //动画，使用requestAnimationFrame代替setInterval
                cancelAnimationFrame(timer)
                timer = requestAnimationFrame(function fn() {
                    if (_that.scrollTop > 0) {
                        _that.scrollTop -= 50
                        //然后修改这里实现动画滚动效果
                        document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
                        timer = requestAnimationFrame(fn)
                    } else {
                        cancelAnimationFrame(timer);
                        _that.toTopShow = false
                    }
                })
            }
        },
        mounted() {
            this.$nextTick(function () {
                //修改事件监听
                window.addEventListener('scroll', this.handleScroll)

            })
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .global_back_top {
        position: fixed;
        width: 80px;
        height: 80px;
        right: 24px;
        bottom: 132px;
        background: url(../../assets/img/backTop.png) no-repeat center;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        /*display: none;*/
    }
</style>