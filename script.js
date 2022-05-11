// function z(){
//     var b=900;
// function x(){
//     var a=7;
//    function y(){
//        console.log(a,b);
//    }
//    y();
// }
// x();
// }
// z();


//setTimeout with closure
// function x(){ 
//     for(var i=1;i<=5;i++){
//     setTimeout(function ()
//     {
//         console.log(i);
//     },i*1000);
    
// }
// console.log("Deepankar");
// }
// x();

//with let 
// function x(){ 
//     for(let i=1;i<=5;i++){
//     setTimeout(function ()
//     {
//         console.log(i);
//     },i*1000);
    
// }
// console.log("Deepankar");
// }
// x();

// function x(){ 
//     for(var i=1;i<=5;i++){
//     function close(i){
//         setTimeout(function ()
//     {
//         console.log(i);
//     },i*1000);
//     }
//     close(i);
// }
// console.log("Deepankar");
// }
// x();

// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     var a=10;
//     return inner;
// }
// var close=outer();
// close();


//Function Statement aka Function Declaration
//  function a(){
//      console.log("a is called");
//  }

//Function Expression
//  var b=function xyz(){
//      console.log("b is called");
//  }

// a();
// b(1,2); //arguments passed
//Anonymous Function
// function (){

// }

//Named Function Expression
// var b=function xyz(){
//     console.log("b is called");
// }
//Difference between Parameters & Arguements?
// var b=function (param1,param2){
//     console.log("b is called");
// }
//First class Function-Ability to be used like values
//First class citizens

//Arrow Function

//What is Callback Function in JavaScript

// setTimeout(function(){
//     console.log("timer");
// },5000);
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
//  console.log("y");
// });
//javaScript is a synchronous  and single threaded language

//Blocking the main thread

//Power of Callback?

//Deep about Event listeners

//Closures Demo with Event Listeners

//Scope Demo with Event Listeners

//Garbage Collection & removeEventListeners

// function attachEventListeners(){
//     let count=0;
//     document.getElementById("clickMe").addEventListener("click",function xyz(){
//         console.log("Button Clicked",++count);
//     });
// }
// attachEventListeners();


// console.log("Start");

// document.getElementById("btn")
// .addEventListener("click",function cb(){
//     console.log("Callback");
// });

// console.log("End");

// console.log("Start");
// setTimeout(function cbT(){
//     console.log("CB setTimeout");
// },1);
// fetch("https://api.netflix.com")
// .then(function cbC(){
//     console.log("CB Netflix");
// });
// console.log("End");


// console.log("Start");
// setTimeout(function cb(){
//     console.log("Callback");
// },0);
// console.log("End");

// let startDate=new Date().getTime();
// let endDate =startDate;
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log("While Expires");


// const a=10;
// {
//     const a=2;
//     console.log(a);
// }
// console.log(a);

// c='volvo';
// console.log(c);
// var c;

// var a=1;
// var a='ghj';
// a=true;

// let a;     
//a=2;   //reassign possible with let
// let a='ui';        //redeclare not possible in let
// console.log(a);


// let arr = [1, 2, [3, 4], [5, 6,[8],9]].reduce(function (acc, curr) {
//     return acc.concat(curr)
//   }, []);
// console.log(arr);

// var multiDimensionArray = [1, 2, [3, 4], [5, 6,[8],9]]; //array of arrays
// var flatArray = Array.prototype.concat.apply([], multiDimensionArray); //flatten array of arrays
// console.log(flatArray);

// let arr = [1, 2, [3, 4], [5, 6,[8],9]]
// var merged = [].concat.apply([], arr);
// console.log(merged);


//flat array element
// const numbers = [1, 2, [3, 4], [5, 6,[8],9]];
// const flatNumbers = numbers.flat(Infinity);

// console.log(flatNumbers);

// moment().format();


//Object iteration simple way
// monthArr = [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2,3]
// monthObj = { 1: 'January', 2: 'Febuary', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December' }
// console.log(monthObj);
// var monObj=Object.entries(monthObj);
// console.log(Object.entries(monthObj));
// for(var k=0;k<monthArr.length;k++){
//    for(var i=0;i<monObj.length;i++)
//    {
//        if(monthArr[k]==monObj[i][0]){
//            console.log(monObj[i][1]);
//        }
//    }
// }
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// Object.entries(anObj).map(obj => {
//    const key   = obj[0];
//    const value = obj[1];

//    // do whatever you want with those values.
//   console.log(key);
//   console.log(value);
// });

// var arr=["uttam"];
// var arr1=[];
// var arr2=[];
// console.log(arr);
// var arr1=arr;
// var arr2=arr;
// console.log(arr1);
// console.log(arr2);
// arr1.push("deepankar");
// arr2=["ankur"]
// console.log(arr)
// console.log(arr1);
// console.log(arr2);


// const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// const firstDate = new Date(2008, 1, 12);
// const secondDate = new Date(2008, 1, 22);
// console.log(firstDate)
// console.log(secondDate)

// const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
// console.log(diffDays)

// monthEnd = { '1': 31, '2': 28, '3': 31, '4': 30, '5': 31, '6': 30, '7': 31, '8': 31, '9': 30, '10': 31, '11': 30, '12': 31 }
// console.log(monthEnd);
// var arr=[3]
// var monend = Object.entries(this.monthEnd);
// console.log(monend)
// for(let i=0;i<monend.length;i++)
// {
//     if(arr[0] == monend[i][0]){
//         console.log(monend[i][1])
//     }
// }

// function abc(year,month){
//     let y=year;
//     let m=month;
//     const d =new Date()
//     d.setFullYear(y,m,0)
//     var d1=new Date(d);
//    var d2= d1.getFullYear()+'-' + (d1.getMonth()+1);
//     var d3=new Date(d2);
//     var m2=(d3.getMonth()+1)-10;
    // for(let i=m;i<m2;i--)
    // {
    //     d3.setMonth(i);
    // var d4= d3.getFullYear()+'-' + (d3.getMonth()+1);
    // console.log(d4);
    // }
    // d3.setMonth(m2);
    // var d4= d3.getFullYear()+'-' + (d3.getMonth()+1);
    // console.log(d2);
    // console.log(d4);
    // var d5 = new Date(d4)
    // var fs = d5.getFullYear();
    // var ms = d5.getMonth()+1;
    // console.log(fs);
    // console.log(ms);
//     for(let i=0;i<10;i++)
// {
//     console.log(y,m)
//     m--;
//     if(m == 12){
//         y=y-1;
//     }
//     else if(m==0){
//         m=m+12
//         y=y-1
//     }
//    }
// }

// let xyz = abc(2021,3)
// var marr =[1,2,3,4,5,6,7,8,9,10,11,12];
// var year=2021;
// var month=3;
// for(let i=0;i<marr.length;i++){
// console.log(marr[(i+10)-12])
// }

// object sort with two keys
var arr=[ {month: 6, year: 2020},
        {month: 7, year: 2020},
        {month: 8, year: 2020},
        {month: 9, year: 2020},
        {month: 10, year: 2020},
        {month: 11, year: 2020},
        {month: 12, year: 2020},
        {month: 3, year: 2019},
        {month: 4, year: 2020},
        {month: 5, year: 2020},
        {month: 1, year: 2020},
        {month: 2, year: 2020}]
console.log(arr);
let arr1 = [...arr];
    var at=arr1.sort(
        function(a,b){
           if (a.year==b.year){
              return (a.month-b.month);
           } else {
              return (a.year-b.year);
           }
        });
        console.log(at)
        

// function cmp(a, b) {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// }

// function sortByKey(arr, key) {
//     arr.sort((a, b) => cmp(key(a), key(b)))
// }
// sortByKey(arr, item => [item.month, item.year])
// console.log(arr)

//find max sum and product of given array elements
// let ar = [33,-33,-56,-76,54,56,2,0,-2,-1,6,7,76]
// ar.sort((a, b) => a - b);
// console.log(ar)
// var sum1= ar[0]*ar[1]
// var sum2= ar[ar.length-2]*ar[ar.length-1]
// if(sum1 == sum2){
//    console.log("Maximum Product Pair",ar[0],ar[1],ar[0]*ar[1])
//    console.log("Maximum Sum Pair", ar[ar.length-2],ar[ar.length-1],ar[ar.length-2]+ar[ar.length-1])
// }
// else if(sum1>sum2){
//    console.log("Maximum Product Pair",ar[0],ar[1],ar[0]*ar[1])
//    console.log("Maximum Sum Pair", ar[0],ar[1],ar[0]+ar[1])
// }
// else{
//    console.log("Maximum Product Pair",ar[ar.length-2],ar[ar.length-1],ar[ar.length-2]*ar[ar.length-1])
//    console.log("Maximum Sum Pair",ar[ar.length-2],ar[ar.length-1],ar[ar.length-2]+ar[ar.length-1])
// }


//leap year program
// var year = 1700
// if((year%4==0) && ((year%400==0) || (year%100!==0)))
// {  
//     console.log('leap year',year)  
// } else {  
//     console.log('not leap year',year)
// }

// function dateformatchange(date) {
//    if (date == null || date == undefined) {
//      return "";
//    }
//    var datear1 = date.split('T')[0];
//    var datearr = datear1.split("-");
//    return datearr[2] + '/' + datearr[1] + '/' + datearr[0];
//  }
// var d1 = new Date();
//  let date1 = dateformatchange(d1)
//  console.log(d1);

// const getData = async() => {
//     var y = await "Hello World";
//     console.log(y);
//     console.log(5+3)
//     var z = await "hii";
//     console.log(z);
// }

// const getEmp = async() => {
//     var p = await "Hello";
//     console.log(p);
// }
  
// console.log(1);
// getData();
// console.log(2);
// getEmp();
// console.log(3)
// console.log(getEmp())

// var str = 'Heloo, hi "I am There"'
// var arr = str.split(" ");
// let res =[];
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     if(i%2 == 0)
//     {
//          res[i] = arr[i].toUpperCase();
//     }
//     else{
//    res[i]=arr[i];
//     }
// }
// console.log(res.join(" "));
