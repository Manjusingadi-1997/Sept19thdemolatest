<template>

    <h2 ref="user">Child Component</h2>
</template>
<script>


export default {
    name: 'lifeCycleChild',
    beforeCreate() {
        console.log("Child beforeCreate() executed")
    },
    created() {
        console.log("Child Created() executed")
    },
    beforeMount() {
        console.log("Child beforeMount() executed")
    },
    mounted() {
        console.log("Child Mounted() executed")
    },
    beforeUpdate() {
        console.log("Child beforeUpdate() executed")
    },
    updated() {
        console.log("Child Updated() executed")
    },
    beforeUnmount() {
        console.log("Child beforeMounted() executed", this.$refs['user'])
    },
    unmounted() {
        console.log("Child Unmounted() executed", this.$refs['user'])
    }
}

</script>
<style scoped>

</style>