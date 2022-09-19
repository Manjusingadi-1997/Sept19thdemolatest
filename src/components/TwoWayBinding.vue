<!-- Two way binding is binding the view with the model that is if something changes in view should automatically reflect in model and vice versa -->

<template>
    <div class="binding">
        <h1>Two Way Binding</h1>
        <input type="text" v-model="count" />
        <h2>{{count}}</h2>
    </div>

</template>
  
<script>
export default {
    name: 'TwoWayBinding',
    data() {
        return {
            count: 10
        }
    }
}
</script>
<style scoped>
.binding {
    background-color: aquamarine;
}

h1 {
    color: black;
    text-decoration: underline;
}
</style>