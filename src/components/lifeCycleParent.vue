<template>
    <div>LifeCycle Methods
        <h2>Parent Component</h2>
        <button v-on:click="showchild=!showchild">Toggle Child</button>

        <lifeCycleChild v-if="showchild" />
    </div>
</template>

<script>
import lifeCycleChild from './lifeCycleChild.vue'
export default {
    components: { lifeCycleChild },
    name: "lifeCycleparent",
    data() {
        return {
            showchild: true,
        };
    },
    beforeCreate() {
        console.log("Parent beforeCreate() executed")
    },
    created() {
        console.log("Parent Created() executed")
    },
    beforeMount() {
        console.log("Parent beforeMount() executed")
    },
    mounted() {
        console.log("Parent Mounted() executed")
    },
    beforeUpdate() {
        console.log("Parent beforeUpdate() executed")
    },
    updated() {
        console.log("Parent Updated() executed")
    },
    beforeUnmount() {
        console.log("Parent beforeMounted() executed")
    },
    unmounted() {
        console.log("Parent Unmounted() executed")
    }

}

</script>
<style scoped>
h1 {
    color: orange;
    text-decoration: underline;
}
</style>