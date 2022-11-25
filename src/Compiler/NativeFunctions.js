import * as NativeParams from './NativeParams';
import NativeFunction from './NativeFunction';

export const variable = new NativeFunction("Variable",(value) => {
    return Object(value);
}, [NativeParams.any("Value")], NativeParams.object());

export const string = new NativeFunction("String",(text) => {
    return new String(text)
}, [NativeParams.stringObject("Text")], NativeParams.stringObject());

export const number = new NativeFunction("Number",(num) => {
    return new Number(num)
}, [NativeParams.stringObject("num")], NativeParams.numberObject());

export const log10 = new NativeFunction("Log10",(num) => {
    return new Number(Math.log10(num))
}, [
    NativeParams.numberObject("num")
], NativeParams.numberObject());

export const log = new NativeFunction("Log",(num) => {
    return new Number(Math.log(num))
}, [
    NativeParams.numberObject("num")
], NativeParams.numberObject());


export const pow = new NativeFunction("Power",(num, power) => {
    return new Number(num ** power);
}, [
    NativeParams.numberObject("num1"),
    NativeParams.numberObject("num2")
], NativeParams.numberObject());

export const add = new NativeFunction("Addition",(num1, num2) => {
    return new Number(num1 + num2);
}, [
    NativeParams.numberObject("num1"),
    NativeParams.numberObject("num2")
], NativeParams.numberObject());

export const multiply = new NativeFunction("Multiply",(num1, num2) => {
    return new Number(num1 * num2);
}, [
    NativeParams.numberObject("num1"),
    NativeParams.numberObject("num2")
], NativeParams.number());

export const divide = new NativeFunction("Divide",(num1, num2) => {
    return new Number(num1 / num2);
}, [
    NativeParams.numberObject("num1"),
    NativeParams.numberObject("num2")
], NativeParams.numberObject());

export const subtract = new NativeFunction("Subtract",(num1, num2) => {
    return new Number(num1 - num2);
}, [
    NativeParams.numberObject("num1"),
    NativeParams.numberObject("num2")
], NativeParams.numberObject());