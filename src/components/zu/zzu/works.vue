<template>
    <div class="top">
        <div class="topp"><img src="../../../assets/imagess/gong.png" > <span>工作</span></div>
        <div class="gaiu">{{works.work}}</div>
    </div>
</template>

<script>
    export default {
        name: "works",
        props:['works']
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
