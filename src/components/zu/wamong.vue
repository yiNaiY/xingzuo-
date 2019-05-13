<template>
<div class="top">
    <div class="topp">
    <img src="@/assets/imagess/aries.png" >
        <p>{{name}} {{digit}} </p>
        <p>{{cont}}</p>
    </div>
</div>
</template>

<script>
    export default {
        name: "wamong",
        data(){
            return {
                name: '',
                cont:'',
                digit:''
            }
        },
        created(){
           this.name = this.$route.query.id
            this.cont=this.$route.query.dan
            this.digit=this.$route.query.digit
            // console.log(this.$route.query.id)
            // if(this.$store.state.cont){
            //     //存储在浏览器防止刷新数据消除
            //     //先转换成JSON字符串
            //     window.localStorage.setItem('todday',JSON.stringify(this.$store.state.cont))
            //     this.cont=JSON.parse(window.localStorage.todday)
            // }

        }
    }
</script>

<style scoped lang="less">
    .top{
        position: relative;
        height: 1.8rem;
    }
    .topp{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
       margin: 0 2.7rem;
        top:-0.4rem;
        p{
            font-size: 0.21rem;
            color: #313030;
            text-align: center;
            margin-top: 0.26rem;
        }
        p+p{
            color: #6a6a6a;
            font-size: 0.22rem;
            margin-top: 0.11rem;
        }
    }

</style>
