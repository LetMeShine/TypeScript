<template>
    <!--创建游戏的主容器-->
    <div id="main">
        <!--设置游戏的舞台-->
        <div id="stage">
            <!--设置蛇-->
            <div id="snake">
                <!--snake内部的div 表示蛇的各部分-->
                <!-- 蛇头 -->
                <div style="border-radius: 50%; background: blue"></div>
                <!-- 蛇身体 -->
            </div>

            <!--设置食物-->
            <div id="food">
                <!--添加四个小div 来设置食物的样式-->
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <!--设置游戏的积分牌-->
        <div id="score-panel">
            <div>Score:<span id="score">0</span></div>
            <div>Level:<span id="level">1</span></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameControl from "./ts/GameControl";

@Component //从 vue-property-decorator 拿到 Component
export default class Game extends Vue {
    mounted() {
        new GameControl("Right");
    }
}
</script>

<style scoped lang="less">
@import './less/index.less'; // 这里引进会使得蛇的身体不长
</style>
