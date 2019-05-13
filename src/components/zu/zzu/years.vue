<template>
    <div class="top">
        <lov :lov="years"></lov>
        <moneyy :moneyy="years"></moneyy>
        <works :works="years"></works>
        <jianka :jianka="years"></jianka>
        <botton></botton>
    </div>
</template>

<script>
    import lov from './lov.vue'
    import moneyy from './moneyy.vue'
    import works from './works.vue'
    import botton from './botton.vue'
    import jianka from './jianka.vue'
    export default {
        name: "years",
        data(){
            return{
                years:'',
            }
        },
        components:{
            lov,
            moneyy,
            works,
            botton,
            jianka
        },
        created(){
            console.log(this.$route.query.id);
            let arr=[this.$route.query.id,'year']
            console.log(arr);
            this.$store.dispatch('get',arr)

            if (this.$store.state.year){
                this.years =this.$store.state.year
                window.localStorage.setItem('year',JSON.stringify(this.$store.state.year))
            } else if (window.localStorage.year) {
                this.years=JSON.parse(window.localStorage.year)
            } else {
                console.log(9);
            }
            // window.localStorage.setItem('year',JSON.stringify(this.$store.state.year))
            //
            // console.log(JSON.parse(window.localStorage.year))
            // this.todayData=JSON.parse(window.localStorage.year)
            // this.years =window.localStorage.year
        }
    }
</script>

<style scoped lang="less">
    .top{
        margin-left: 0.53rem;
    }
</style>
