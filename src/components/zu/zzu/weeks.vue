<template>
    <div class="top">
        <lov :lov="week"></lov>
        <moneyy :moneyy="week"></moneyy>
        <works :works="week"></works>
        <botton></botton>
    </div>
</template>

<script>
    import lov from './lov.vue'
    import moneyy from './moneyy.vue'
    import works from './works.vue'
    import botton from './botton.vue'
    export default {
        name: "weeks",
       data(){
        return{
        week:'',
        }
       },
        components:{
            lov,
            moneyy,
            works,
            botton
        },
        created(){
            console.log(this.$route.query.id);
            let arr=[this.$route.query.id,'week']
            console.log(arr);
            this.$store.dispatch('get',arr)
            this.week =this.$store.state.week
            if (this.$store.state.week){
                this.week =this.$store.state.week
                window.localStorage.setItem('week',JSON.stringify(this.$store.state.week))
            } else if (window.localStorage.week) {
                this.week=JSON.parse(window.localStorage.week)
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
