<template>
    <h2 :class="{green:backgroundcolor,err:true}">Dynamic Class Binding</h2>
    <!-- <h2 :class="applybackgroundcolor">Dynamic Class Binding</h2> -->
    <button v-on:click="backgroundcolor=!backgroundcolor">Apply/Remove background color</button>
</template>
<script>
export default {
    name: "DynamicClassBinding",
    data() {
        return {
            backgroundcolor: true
        }
    },
    //use computed method to dynamically bind multiple classes
    computed: {
        applybackgroundcolor() {
            return {
                green: this.backgroundcolor,
                err: true,
                other: true
            }
        }
    }
}
</script>
<style scoped>
.green {
    background-color: green;
    width: 200 px;
    padding: 10 px;
}

.err {
    color: dodgerblue;
}

.other {
    font-style: italic;
}
</style>