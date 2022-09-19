<template>
    <div class="child">
        <h2>{{message}}</h2>
        <button v-on:click="senddata()">Call Parent function from child</button>

    </div>
</template>

<script>
export default {
    name: 'ChildComp',

    props: {
        message: String,
        senddata: Function

    }
}
</script>

<style scoped>
.child {
    background-color: bisque;
}
</style>
