<template>


    <div class="event">
        <!-- <h1 v-on:mousemove="getConsole()">Events</h1> -->

        <button v-on:click="getData('Single click button pressed')">Click Here for 1 click alert</button>
        <br /><br />
        <button v-on:dblclick="getData('double click button pressed')">Click Here for 2 clicks</button>
        <br /><br /><br />
        <button v-on:click="getCount()">Click Here to get count of single clicks</button>
        <h2>{{count}}</h2>
    </div>
</template>

<script>
export default {
    name: "MyHome",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        getData(data) {
            alert(data)
            console.log(data)
        },
        getConsole() {
            console.log("The mouse move event has been triggered");
        },
        getCount() {
            this.count = this.count + 1;
            console.log(this.count);
        }
    }

}
</script>

<style scoped>
.event {
    background-color: aqua;
}

h1 {
    color: orange;
}

button {
    background-color: aqua;
    color: crimson;
}
</style>
