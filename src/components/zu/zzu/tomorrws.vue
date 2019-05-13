<template>
    <div class="top">
   <gaikuan :gaikuan="tomorrow"></gaikuan>
    <botton></botton>
    </div>
</template>

<script>
    import gaikuan from './gaikuan.vue'
    import botton from './botton.vue'
    export default {
        name: "tomorrws",
        data(){
          return {
              tomorrow:''
          }
        },
        components:{
            gaikuan,
            botton
        },
        created(){
            // if(this.$store.state.cont){
            //     //存储在浏览器防止刷新数据消除
            //     //先转换成JSON字符串
            //     window.localStorage.setItem('tomorrws',JSON.stringify(this.$store.state.cont))
            //     this.cont=JSON.parse(window.localStorage.tomorrws)
            // }
            // this.atf =this.$store.state.cont
            //     this.cont=JSON.parse(window.localStorage.todday)
            // this.cont=this.$store.state.cont

            console.log(this.$route.query.id);
            let arr=[this.$route.query.id,'tomorrow']
            console.log(arr);
            this.$store.dispatch('get',arr)
            this.tomorrow=this.$store.state.tomorrow
            if (this.$store.state.tomorrow){
                this.tomorrow =this.$store.state.tomorrow
                window.localStorage.setItem('tomorrow',JSON.stringify(this.$store.state.tomorrow))
            } else if (window.localStorage.year) {
                this.tomorrow=JSON.parse(window.localStorage.tomorrow)
            } else {
                console.log(9);
            }
        }
    }
</script>

<style scoped lang="less">
.top{
    margin-left: 0.49rem;
}
</style>
