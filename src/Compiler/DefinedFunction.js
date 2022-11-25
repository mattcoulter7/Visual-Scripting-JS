import Invokable from "./Invokable";
import * as NativeParams from "./NativeParams"

export default class DefinedFunction extends Invokable {
    constructor(invokableChild, params = [], paramInputTypes = null, funcOutputType = null) {
        super(paramInputTypes, funcOutputType);
        this.SetInvokableChild(invokableChild);
        this.params = params;
    }

    SetInvokableChild(invokableChild){
        this.name = invokableChild ? invokableChild.name : "null";
        this.paramInputTypes = invokableChild ? invokableChild.paramInputTypes : [];
        this.funcOutputType = invokableChild ? invokableChild.funcOutputType : NativeParams.any;
        this.invokableChild = invokableChild;
    }

    GetParams() {
        let params = [...arguments];
        this.params.forEach((param,i) => params[i] = param);
        return params;
    }

    HandleInvoke(...params) {
        return this.invokableChild ? this.invokableChild.Invoke(...params) : null;
    }
}