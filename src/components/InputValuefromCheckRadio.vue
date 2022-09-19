<template>
    <div class="input">
        <h3>Getting input value from Checkbox & Radio button</h3>
        <label for="Angular">Java</label>
        <input type="checkbox" value="Angular" id="Angular" v-model="technology" />
        <label for="Vue">Vue</label>
        <input type="checkbox" value="Vue" id="Vue" v-model="technology" />
        <label for="React">React</label>
        <input type="checkbox" value="React" id="React" v-model="technology" />
        <br />
        <h4>Selected Technology is/are : {{technology}}</h4>

        <label for="Student">Student</label>
        <input type="radio" value="Student" id="Student" name="Profession" v-model="Profession" />
        <label for="Developer">Developer</label>
        <input type="radio" value="Developer" id="Developer" name="Profession" v-model="Profession" />

        <br />
        <h4>Profession is : {{Profession}}</h4>

    </div>

</template>

<script>
export default {
    name: 'GetInputValue',

    data() {
        return {
            technology: [],
            Profession: null
        }
    }
}

</script>
<style scoped>
h2 {
    color: black;
    text-decoration: underline;
}

.input {
    background-color: lightgreen;
}
</style>
