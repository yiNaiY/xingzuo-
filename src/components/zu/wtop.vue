<template>
    <div class="top" :style="tops">
        <div class="topp" >
        <img src="@/assets/imagess/xinleft.png" @click="bad()">
            <p>星座伴侣</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wtop",
        data(){
            return{
                tops:{
                    backgroundImage: "url(" + require("@/assets/imagess/xintop.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"100% 2.08rem"
                }
            }
        },
        methods:{
            bad (){
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="less">
.top{
    width:100%;
    height: 2.08rem;
    .topp{
        display: flex;
        padding-top: 0.8rem;
    img {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        margin-left: 0.43rem;
    }
        p{
            font-size: 0.4rem;
            color: #fff;
            margin-left: 2rem;
        }
    }
}
</style>
