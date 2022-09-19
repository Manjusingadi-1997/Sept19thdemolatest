<template>
    <h2> Profile</h2>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    name: "ProfileRouting",
    mounted() {
        const route = useRoute();
        console.log("Route", route.params)
    }
}
</script>
<style scoped>
h2 {
    color: orange;
    text-decoration: underline;
}
</style>