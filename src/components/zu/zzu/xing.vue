<template>
    <ul class="iii">
        <li class="xgg" v-for="(item,index) in oScore" :class="item" :key="index" ></li>
    </ul>
</template>

<script>
    export default {
        name: "xing",
        props: {
            num: {
                type: Number,
                default: 8
            },
            size: {
                type: String,
                default: ""
            },
            score: {
                type: Number,
                default: 4.5
            }
        },
        computed: {
            oScore() {
                let arr = [];
                let Init = Math.floor(this.score);
                let Float = (this.score - Init) * 10;
                while (arr.length < Init) {
                    arr.push('on')
                }
                if (Float > 4) arr.push('half');
                while (arr.length < this.num) {
                    arr.push('off')
                }
                return arr
            }
        }
    }
</script>

<style scoped lang="less">
    .xgg{
        width: 0.3rem;
        height: 0.3rem;
        float: left;
        margin-left: 0.06rem;
        background-size: 0.3rem 0.3rem;
        background: url('../../../assets/imagess/star24_off@2x.png ') no-repeat;
    }
    .on{
        background-image: url('../../../assets/imagess/star24_on@2x.png');
        background-size: 0.3rem 0.3rem;
    }
    .half{
        background-image: url('../../../assets/imagess/star24_half@2x.png');
        background-size: 0.3rem 0.3rem;
    }
    .off{
        background-image: url('../../../assets/imagess/star24_off@2x.png');
        background-size: 0.3rem 0.3rem;
    }

</style>
