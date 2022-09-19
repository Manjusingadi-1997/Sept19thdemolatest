<template>
    <ChildComp message="Sending the message from parent to child component" :senddata="senddata" />

</template>

<script>
import ChildComp from './ChildComp.vue'
export default {
    name: 'ParentComp',
    components: {
        ChildComp

    },

    methods: {
        senddata() {
            console.log("Parent function is called"),
                alert("Parent function is called")
        }
    }
}
</script>

<style>

</style>
