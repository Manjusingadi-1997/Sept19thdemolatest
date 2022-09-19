<template>
    <div class="ifelse">
        <h2 v-if="show">If Else Condition</h2>

        <!-- <h2 v-else>Executing the else condition</h2> -->
        <button v-on:click="show=!show">Hide</button>
    </div>
</template>
  
<script>
export default {
    name: 'IfElseCondition',
    data() {
        return {
            show: true
        }
    }

}
</script>
<style scoped>
.ifelse {
    background-color: gray;
}
</style>
  
  
  
  