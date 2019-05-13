<template>
    <div class="top">
        <p class="sel">选择星座</p>
        <div class="pict">
            <ul>
                <li v-for="(item,index) in arr" :key="index" @click="addf('白羊座','Aries','(3.24-4.19)')">
                    <img :src="item.img" alt="">
                    <p class="xin">{{item.name}}</p>
                    <p class="dan">{{item.dan}}</p>
                    <p class="digit">{{item.digit}}</p>
                </li>
                <li class="middle" @click="addf('金牛座','Taurus','(4.20-5.20)')">
                    <img src="../assets/images/2_05.png" alt="">
                    <p class="xin">金牛座</p>
                    <p class="dan">Taurus</p>
                    <p class="digit">(4.20-5.20)</p>
                </li>
                <li @click="addf('双子座','Gemini','(5.21-6.21)')">
                    <img src="../assets/images/2_07.png" alt="">
                    <p class="xin">双子座</p>
                    <p class="dan">Gemini</p>
                    <p class="digit">(5.21-6.21)</p>
                </li>
            </ul>
            <ul>
                <li @click="addf('巨蟹座','Kingcarb','(6.22-7.22)')">
                    <img src="../assets/images/2_12.png" alt="">
                    <p class="xin">巨蟹座</p>
                    <p class="dan">Kingcarb</p>
                    <p class="digit">(6.22-7.22)</p>
                </li>
                <li class="middle" @click="addf('狮子座','Leo','(7.23-8.22)')">
                    <img src="../assets/images/2_13.png" alt="">
                    <p class="xin">狮子座</p>
                    <p class="dan">Leo</p>
                    <p class="digit">(7.23-8.22)</p>
                </li>
                <li @click="addf('处女座','Virgo','(8.23-9.22)')">
                    <img src="../assets/images/2_14.png" alt="">
                    <p class="xin">处女座</p>
                    <p class="dan">Virgo</p>
                    <p class="digit">(8.23-9.22)</p>
                </li>
            </ul>
            <ul>
                <li @click="addf('天秤座','Libra','(9.23-10.23)')">
                    <img src="../assets/images/2_19.png" alt="">
                    <p class="xin">天秤座</p>
                    <p class="dan">Libra</p>
                    <p class="digit">(9.23-10.23)</p>
                </li>
                <li class="middle" @click="addf('天蝎座','Scorpio','(10.24-11.22)')">
                    <img src="../assets/images/2_21.png" alt="">
                    <p class="xin">天蝎座</p>
                    <p class="dan">Scorpio</p>
                    <p class="digit">(10.24-11.22)</p>
                </li>
                <li @click="addf('射手座')">
                    <img src="../assets/images/2_22.png" alt="">
                    <p class="xin">射手座</p>
                    <p class="dan">Sagittairius</p>
                    <p class="digit">(11.23-12.21)</p>
                </li>
            </ul>
            <ul>
                <li @click="addf('摩羯座','capricomus','(12.22-1.19)')">
                    <img src="../assets/images/2_27.png" alt="">
                    <p class="xin">摩羯座</p>
                    <p class="dan">capricomus</p>
                    <p class="digit">(12.22-1.19)</p>
                </li>
                <li class="middle" @click="addf('水瓶座','Aquarius','(1.20-2.18)')">
                    <img src="../assets/images/2_21.png" alt="">
                    <p class="xin">水瓶座</p>
                    <p class="dan">Aquarius</p>
                    <p class="digit">(1.20-2.18)</p>
                </li>
                <li @click="addf('双鱼座','Pisces','(2.19-3.20)')">
                    <img src="../assets/images/2_22.png" alt="">
                    <p class="xin">双鱼座</p>
                    <p class="dan">Pisces</p>
                    <p class="digit">(2.19-3.20)</p>
                </li>
            </ul>
            <div class="bottom-s">
            <p class="bottom" @click="fan()">x</p>
            </div>
        </div>

    </div>
</template>

<script>
    import bay from '../assets/images/2_03.png'
    export default {
        name: "selectcon",
        data(){
            return{
                arr:[
                    {img:bay,name:'白羊座',dan:'Aries',digit:'(3.24-4.19)'}
                    ]
            }
        },
        methods:{
            fan(){
                this.$router.back()
            },
            addf(e,r,t){
            this.$router.push({path:'/detailss',query:{id:e,dan:r,digit:t}})
            }
        }
    }
</script>

<style scoped lang="less">
p{
        color: #fefefe;
    }
.top{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(161,83,247), rgb(161,84,245));
    margin: 0;
    .sel{
        font-size: 0.34rem;
        color: #fefefe;
        padding-top: 1.08rem;
        text-align: center;
    }
    .pict{
        margin: 1.43rem 0.83rem 0rem 0.74rem;
        img{
            height: 1.20rem;
            width: 1.21rem;
            vertical-align: bottom;
        }
        ul{
            display: flex;
        }
        .middle{
            margin: 0 1.14rem 0 1.15rem;
        }
        .xin{
            font-size: 0.26rem;
            margin-top:0.17rem;
            text-align: center;
        }
        .dan{
            margin-top: 0.12rem;
            font-size: 0.22rem;
            text-align: center;
        }
        .digit{
            margin-top: 0.09rem;
            font-size: 0.18rem;
            margin-bottom: 0.37rem;
            text-align: center;
        }
        .bottom-s{
            display: flex;
            justify-content: center;
        .bottom{
            height: 1rem;
            width: 1rem;
            border-radius: 50% 50%;
            border: 0.1rem solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.6rem;
        }
        }
    }

}
</style>
