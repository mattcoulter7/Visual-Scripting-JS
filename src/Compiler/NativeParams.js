import ParamDefinition from "./ParamDefinition";

export let number = (name) => new ParamDefinition(name,'number', undefined, false);
export let optionalNumber = (name) => new ParamDefinition(name,'number', undefined, true);

export let numberObject = (name) => new ParamDefinition(name,'object', Number, false);
export let optionalNumberObject = (name) => new ParamDefinition(name,'object', Number, true);

export let string = (name) => new ParamDefinition(name,'string', undefined, false);
export let optionalString = (name) => new ParamDefinition(name,'string', undefined, true);

export let stringObject = (name) => new ParamDefinition(name,'object', String, false);
export let optionalStringObject = (name) => new ParamDefinition(name,'object', String, true);

export let object = (name) => new ParamDefinition(name,'object', Object, false);
export let optionalObject = (name) => new ParamDefinition(name,'object', Object, true);

export let array = (name) => new ParamDefinition(name,'object', Array, false);
export let optionalarray = (name) => new ParamDefinition(name,'object', Array, true);

export let optionalAny = (name) => new ParamDefinition(name,undefined, undefined, true);
export let any = (name) => new ParamDefinition(name,undefined, undefined, false);