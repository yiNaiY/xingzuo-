<template>
    <div >
        <div class="top">
            <div class="topo">
            <div class="topi">
                <p>综合指数:</p>
                <xing :num="5" :score=parseInt(today.all)*0.05 :size="'lg'"></xing>
            </div>
            <div class="topi" >
                <p>健康指数:</p>
                <xing :num="5" :score=parseInt(today.health)*0.05 :size="'lg'"></xing>
            </div>
            </div>
            <div class="topo">
                <div class="topi">
                    <p>爱情指数:</p>
                    <xing :num="5" :score=parseInt(today.love)*0.05 :size="'lg'"></xing>
                </div>
                <div class="topi" >
                    <p>财运指数:</p>
                    <xing :num="5" :score=parseInt(today.money)*0.05 :size="'lg'"></xing>
                </div>
            </div>
            <div class="topo">
                <div class="topi">
                    <p>工作指数:</p>
                    <xing :num="5" :score=parseInt(today.work)*0.05 :size="'lg'"></xing>
                </div>
                <div class="topi" >
                    <p>速配星座:</p>
                    <p class="wtopi">{{today.QFriend}}</p>
                </div>
            </div>
            <div class="topo">
                <div class="topi">
                    <p>幸运颜色:</p>
                    <p class="wtopi">{{today.color}}</p>
                </div>
                <div class="topii" >
                    <p>幸运数字:</p>
                    <p class="wtopi">{{today.number}}</p>
                </div>
            </div>
        </div>
        <gaikuan :gaikuan="today"></gaikuan>
        <botton></botton>
    </div>
</template>

<script>
    import xing from './xing.vue'
    import gaikuan from './gaikuan.vue'
    import botton from './botton.vue'
    export default {
        name: "todayy",
        components:{
            xing,
            gaikuan,
            botton
        },
        data(){
          return{
              cont:'',
              today:''
              // atf:''
          }
        },
        created() {

            // if(this.$store.state.cont){
            //     //存储在浏览器防止刷新数据消除
            //     //先转换成JSON字符串
            //     window.localStorage.setItem('todday',JSON.stringify(this.$store.state.cont))
            //     this.cont=JSON.parse(window.localStorage.todday)
            // }

            let arr = [this.$route.query.id,'today']
            console.log(arr);
            this.$store.dispatch('get', arr)
           // this.today = this.$store.state.today
            if (this.$store.state.today){
                this.today =this.$store.state.today
                window.localStorage.setItem('today',JSON.stringify(this.$store.state.today))
            } else if (window.localStorage.today) {
                this.today=JSON.parse(window.localStorage.today)
            } else {
                console.log(9);
            }
        }


    //         let arr=[this.$route.query.id,'today']
    //         console.log(arr);
    //         this.$store.dispatch('get',arr)
    //         setTimeout(function () {
    //             this.cont=this.$store.state.cont
    //             console.log(this.$store.state.cont);
    //         }.bind(this),1000)
    // }
    }
</script>

<style scoped lang="less">
.top{
    margin-left: 0.53rem;
    margin-top: 0.6rem;
    .pp{
        margin-left: 1.2rem;
    }
    .topo {
        display: flex;
        margin-bottom: 0.2rem;

        .topi {
            display: flex;
            margin-right: 0.1rem;
        }
        .topii {
            display: flex;
            margin-left: 1.2rem;
        }
        p {
            font-size: 0.3rem;
            color: #4e4e4e;
            display: block;
        }
        .wtopi{
            color: #8f8d8e;
        }
    }
}

</style>
