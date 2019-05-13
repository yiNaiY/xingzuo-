<template>
    <div class="top">
        <div class="topp"><img src="../../../assets/imagess/jiankang.png" > <span>健康</span></div>
        <div class="gaiu">{{jianka.health}}</div>
    </div>
</template>

<script>
    export default {
        name: "jianka",
        props:['jianka']
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
