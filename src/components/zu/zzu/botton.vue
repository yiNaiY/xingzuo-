<template>
    <div class="top">
        <div class=" topp"><img src="../../../assets/imagess/maitui.png"><span>每日推荐</span></div>
        <div class="img"><img src="../../../assets/imagess/sunm_03.png"></div>
        <div class="tpi">
            <div><img src="../../../assets/imagess/shouy.png"><p>首页</p></div>
            <div><img src="../../../assets/imagess/tout.png"><p class="iop">头条</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "botton"
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
        .img{
            margin-top: 0.18rem;
          img{
              width: 6rem;
          }
        }
        .tpi{
            display: flex;
            div{
                margin-left: 1.6rem;
            }
            p{
                font-size: 0.3rem;
                text-align: center;
                color: blueviolet;
            }
            .iop{
                color: #000;
            }
        }
    }
</style>
