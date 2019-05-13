<template>
    <div class="top">
        <div class="topp"><img src="../../../assets/imagess/gaishu.png" > <span>今日概述</span></div>
        <div class="gaiu">{{gaikuan.summary}}</div>
    </div>
</template>

<script>
    export default {
        name: "gaikuan",
        props:['gaikuan'],
        data(){
            return{

            }
        },
        created(){
            // if(this.$store.state.cont){
            //     //存储在浏览器防止刷新数据消除
            //     //先转换成JSON字符串
            //     window.localStorage.setItem('todday',JSON.stringify(this.$store.state.cont))
            //     this.cont=JSON.parse(window.localStorage.todday)
            // }

            // this.cont=JSON.parse(window.localStorage.todday)
            // this.cont=this.$store.state.cont
        }
    }
</script>

<style scoped lang="less">
.top{
    width: 6rem;
   .topp{
       display: flex;
       span{
           font-size: 0.5rem;
           display: block;
           color: #4e4e4e;
           margin-left: 0.15rem;
           line-height: 0.8rem;
       }
   }
 .gaiu{
     margin-top: 0.36rem;
     font-size: 0.3rem;
     color: #828281;
 }
}
</style>
