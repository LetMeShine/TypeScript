<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
        <!-- <Demo msg="Welcome to Your Vue.js + TypeScript App" />
        <GreedySnake/> -->
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from './components/HelloWorld.vue';
// import Demo from "./components/Demo.vue";
// import GreedySnake from "./components/GreedySnake/index.vue"

@Component({
    name: "App",
    components: {
        // HelloWorld,
        // Demo,
        // GreedySnake
    },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

// 因为此处样式应用的DOM是动态生成的，所以在组件应用生效，所以提前引用
#snake {
    & > div {
        width: 10px;
        height: 10px;
        background-color: #000;
        // 蛇的边框颜色和背景颜色相同
        border: 1px solid #b7d4a8;;
        // 开启绝对定位
        position: absolute;
    }
}
</style>