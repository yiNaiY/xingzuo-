<template>
    <div class="top">
        <lov :lov="nextweek"></lov>
        <moneyy :moneyy="nextweek"></moneyy>
        <works :works="nextweek"></works>
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
                nextweek:'',
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
            let arr=[this.$route.query.id,'nextweek']
            console.log(arr);
            this.$store.dispatch('get',arr)
            this.nextweek =this.$store.state.nextweek
            if (this.$store.state.nextweek){
                this.nextweek =this.$store.state.nextweek
                window.localStorage.setItem('nextweek',JSON.stringify(this.$store.state.nextweek))
            } else if (window.localStorage.nextweek) {
                this.nextweek=JSON.parse(window.localStorage.nextweek)
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
