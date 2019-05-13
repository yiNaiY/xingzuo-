<template>
    <div class="top">
        <lov :lov="months"></lov>
        <moneyy :moneyy="months"></moneyy>
        <works :works="months"></works>
        <jianka :jianka="months"></jianka>
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
        name: "weeks",
        data(){
            return{
                months:'',
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
            let arr=[this.$route.query.id,'month']
            console.log(arr);
            this.$store.dispatch('get',arr)
            this.months =this.$store.state.month
            if (this.$store.state.month){
                this.months =this.$store.state.month
                window.localStorage.setItem('month',JSON.stringify(this.$store.state.month))
            } else if (window.localStorage.month) {
                this.months=JSON.parse(window.localStorage.month)
            } else {
                console.log(9);
            }
        }
    }
</script>

<style scoped lang="less">
    .top{
        margin-left: 0.53rem;
    }
</style>
