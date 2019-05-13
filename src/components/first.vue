<template>
<div class="top">
    <span @click="add()">点击进入</span>
</div>
</template>

<script>
export default {
  name: 'first',
    methods:{
      add(){
          this.$router.push({name:'selectcon'})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top{
    background: url("../assets/shof.jpg") no-repeat;
   background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    span{
        font-size: 0.5rem;
        color: #fff;
        position: absolute;
        padding: 0.2rem 1.3rem;
        border: 1px solid #fff;
        border-radius: 0.2rem;
        top:80%;
        left: 20%;
    }
}
</style>
