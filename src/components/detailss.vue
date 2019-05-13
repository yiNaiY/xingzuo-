<template>
    <div>
        <wtop></wtop>
        <wamong></wamong>
        <weeplu></weeplu>
    </div>
</template>

<script>
    import wtop from './zu/wtop.vue'
    import wamong from './zu/wamong.vue'
    import weeplu from './zu/weeplu.vue'
    export default {
        name: "detailss",
        components:{
            wtop,
            wamong,
            weeplu
        }
    }
</script>

<style scoped>

</style>
