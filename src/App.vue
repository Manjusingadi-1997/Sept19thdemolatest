<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Vue.js Assignment" />
  <EventTrigger />
  <TwoWayBinding />
  <GetInputValue />
  <ChildComp />
  <ForLoop />
  <IfElseCondition />
  <InputValuefromCheckRadio />
  <ParentComp />
  <DynamicClassBinding />
  <LifeCycleParent />
  <HomeRouting />
  <router-link to="/">Home</router-link><br />
  <router-link to="/login">Login</router-link><br />
  <router-link to="/profile/mark">Mark's Profile Page</router-link><br />
  <router-link to="/profile/john">John's Profile Page</router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EventTrigger from './components/EventTrigger.vue';
import TwoWayBinding from './components/TwoWayBinding.vue';
import GetInputValue from './components/GetInputValue.vue';
import ChildComp from './components/ChildComp.vue';
import ForLoop from './components/ForLoop.vue';
import IfElseCondition from './components/IfElseCondition.vue';
import InputValuefromCheckRadio from './components/InputValuefromCheckRadio.vue';
import ParentComp from './components/ParentComp.vue';
import DynamicClassBinding from './components/DynamicClassBinding.vue';
import LifeCycleParent from './components/lifeCycleParent.vue';
import HomeRouting from './components/HomeRouting.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    EventTrigger,
    TwoWayBinding,
    GetInputValue,
    ChildComp,
    ForLoop,
    IfElseCondition,
    InputValuefromCheckRadio,
    ParentComp,
    DynamicClassBinding,
    LifeCycleParent,
    HomeRouting
  }
}
</script>
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}
</style>


