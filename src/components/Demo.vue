<template>
    <div class="hello">
        <input type="text" @keyup.enter="addFeature" />
        <ul>
            <li v-for="(item, index) in features" :key="index">{{ item }}</li>
        </ul>
        <p>{{ menu }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface Reslut<T> {
    data: T;
}
@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string; // 父组件的传过来的值
    features: any[]; // 相当于data中的数据项
    menu: string;
    constructor() {
        super();
        this.features = [this.msg, "a", "b", "c"];
        this.menu = "";
    }
    // 相当于methods中的方法
    addFeature(event: any) {
        let arr = this.initArray(Number(event.target.value), 0);
        let myData = this.getReslut<string>("test");
        this.features = [...arr, myData.data];
        this.getPromise<string>("my Promise").then((res) => {
            this.menu = res.data;
        });
        event.target.value = "";
    }
    initArray<T>(len: number, val: T): T[] {
        let arr: T[] = [];
        for (let i = 0; i < len; i++) {
            arr[i] = val;
        }
        return arr;
    }
    getReslut<T>(data: T): Reslut<T> {
        return { data };
    }
    getPromise<T>(x: T): Promise<Reslut<T>> {
        return new Promise((resolve, reject) => {
            if (x) resolve({ data: x });
            else reject(x);
        });
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
</style>
