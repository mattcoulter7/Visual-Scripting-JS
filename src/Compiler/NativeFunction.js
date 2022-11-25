import Invokable from "./Invokable";

export default class NativeFunction extends Invokable {
    constructor(name,func, paramInputTypes, funcOutputType) {
        super(paramInputTypes, funcOutputType);
        this.name = name;
        this.func = func;
    }

    GetParams() {
        return arguments;
    }

    HandleInvoke(...params) {
        return this.func(...params)
    }
}