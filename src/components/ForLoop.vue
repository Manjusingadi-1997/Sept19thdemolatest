<template>
    <div class="forloop">
        <h1>For Loop in Vue</h1>
        <ul>
            <li v-for="item in Products" :key="item">
                {{item}}

            </li>
        </ul>
        <br /><br />
        <ul>
            <li v-for="details in user" :key="details.id">
                User ID is {{details.id}}, name is {{details.name}} and corresponding email is {{details.email}}

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ForLoop',
    data() {
        return {
            Products: ['Shoes', 'TShirts', 'Cargos', 'Jackets'],
            user: [{
                id: "1",
                name: "John",
                email: "john@test.com"

            },
            {
                id: "2",
                name: "Sam",
                email: "sam@test.com"


            },
            {
                id: "3",
                name: "Bruce",
                email: "bruce@test.com"
            },
            {
                id: "4",
                name: "Mark",
                email: "mark@test.com"
            }
            ]


        }
    }
}
</script>
<style scoped>
.forloop {
    background-color: cadetblue;
}
</style>
