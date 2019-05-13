<template>
    <div>
    <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide ><todayy ></todayy></swiper-slide>
        <swiper-slide ><tomorrws ></tomorrws></swiper-slide>
        <swiper-slide ><weeks></weeks></swiper-slide>
        <swiper-slide><nextweeks></nextweeks></swiper-slide>
        <swiper-slide><months></months></swiper-slide>
        <swiper-slide><years></years></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import todayy from './zzu/todayy.vue'
    import tomorrws from './zzu/tomorrws.vue'
    import weeks from './zzu/weeks.vue'
    import nextweeks from './zzu/nextweeks.vue'
    import months from './zzu/months.vue'
    import years from './zzu/years.vue'
    export default {
        name: "weeplu",
        components: {
            swiper,
            swiperSlide,
            todayy,
            tomorrws,
            weeks,
            nextweeks,
            months,
            years
        },
        data() {
            return {
                swiperOption: {
                    pagination:{
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className, text) {
                            switch(index){
                                case 0:text='今日';break;
                                case 1:text='明日';break;
                                case 2:text='本周';break;
                                case 3:text='下周';break;
                                case 4:text='本月';break;
                                case 5:text='本年';break;
                            }
                            return '<span class="' + className + '">' + text + '</span>';
                        },
                    },
                    // clickable: true,
                    // renderBullet: function (index, className) {
                    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
                    // }
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(0, 1000, false)
        }
    }
</script>

<style scoped lang="less">
top{
    position: absolute;
    position: relative;
    width: 20rem;
}
</style>

<sytly lang="less">
    .swiper-container {
    position: relative;
    padding-top: 0.8rem !important;
    }
    .swiper-pagination-bullet-active {

    opacity: 1 !important;
    }
    .swiper-pagination-bullet{
    color: blueviolet;
    font-size:0.4rem;
    width: 1rem !important;
    background: transparent !important;
    height: 0.5rem !important;
    line-height: 0.5rem;
    position: relative;
    top: -0.2rem;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    }
</sytly>
