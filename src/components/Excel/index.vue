<template>
    <!--创建游戏的主容器-->
    <div id="main">
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component //从 vue-property-decorator 拿到 Component
export default class Game extends Vue {
    mounted() {
        
    }
}
</script>

<style scoped lang="less">
// @import './less/index.less'; // 这里引进会使得蛇的身体不长
</style>
