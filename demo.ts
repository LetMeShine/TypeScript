let a:number | string = 1;
a = 'a';
let str:string = `hello${a}`

let arr1 : number[] = [1,2];
let arr2 : string[] = ['1','2'];

// 泛型 把类型当成变量，可以传进去 <T>T是变量
let arr3:Array<number> = [1,2];
let arr4:Array<number | string> = [1,2,'a'];

// 接口
interface Person {
    name:string;
    age:number;
    sex?:string; // 可选
    obj:{};
    [propName: string]: string | number | Object // 任意属性 那么任意属性的值的类型是必填和可选你的并集或大于
}
let obj:Person = {
    name: 'zs',
    age: 18,
    obj:{},
}

function fn(x:number,y:number):void{
    x+y
}
// 函数表达式
let fn1 = function (x:number,y:number):number{
    return x+y
}
// 箭头函数
let fn2 = (x:number,y:number):number => x+y
// 参数默认值
function fn3 (x:number = 1,y:number = 2):number{
    return x+y
}
fn3();
// 可选参数必须在必填参数后面
function fn4 (x:number = 1,y?:number):number{
    return x+y
}

// 接口写函数
interface ObjName {
    id: number;
    name: string;
}
function fn5(obj: ObjName):ObjName{
    return obj;
}

function fn6(str: string | number[]): number | string{
    // 联合类型 那么在使用str过程中的属性必须是两个类型的公共属性，不然会报错，因为如果传入number类型是没有length属性的
    if(typeof str === 'string'){
        return str;
    } else {
        return str.length
    }
}

// 泛型 Generics
function fn7(x:string):string[]{
    return [x];
}
function fn77(x:number):number[]{
    return [x];
}
function fn777(x:boolean):boolean[]{
    return [x];
}

function fn8<T>(x:T):T[]{
    return [x];
}
fn8<number>(1)
fn8<string>('1')
fn8<boolean>(true)

function fn9<T,N>(sum:[T,N]):[T,N]{
    console.log(sum);
    return [sum[0], sum[1]];
}
fn9<string,number>(['abc',2]);


// 类的定义
class Cat {
    name:string;
    color:string;
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    eat(){
        console.log('吃')
    }
}
let c1 = new Cat('tom','blue');

// 类的继承
class Animal {
    type:string;
    constructor(type){
        this.type = type;
    }
    say(){
        return '叫'
    }
}

class Dog extends Animal {// Dog继承Animal
    name: string;
    age: number;
    constructor(type: string, name:string, age:number){
        super(type); // 调用父类的构造器 表示父类的构造函数
        this.name = name;
        this.age = age;
    }
    action(){
        console.log('....')
    }
}

let dog = new Dog('dog', 'tom', 1);

// static 修饰符 静态方法 不需要实例化，可以直接通过类调用
class Obj{
    static str: string = 'abc';
    static eat(){
        console.log('...');
    }
}
Obj.str
Obj.eat()
// public
// private
// protected 子类可以访问

class Obj1{
    private static str: string = 'abc';
    public constructor(type: string){
        // super(type); // 调用父类的构造器 表示父类的构造函数
        Obj1.str = type;
    }
    protected eat(){
        console.log('...');
        return Obj1.str
    }
}
class myObj extends Obj1{
    constructor(name:string){
        super(name);
    }
    say(){
        return this.eat()
    }
}

// 类和接口的区别
// 接口对类进行约束，类是为了代码复用
interface Person1 {
    name: string;
    action(): string // 返回值必须是字符串
}
let p1: Person1 = { // : 表示强制制定类型
    name: 'hh',
    action: () => 'lvelve'
}

// 类实现接口 implements实现 类Person11受接口Person1的约束 implements不强制
class Person11 implements Person1{
    name: string;
    age: number; // 可以比接口多属性
    constructor(name: string){
        this.name = name;
    }
    action: () => 'abc'
}
// 一个类实现多个接口，用,分隔
