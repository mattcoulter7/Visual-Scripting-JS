import DatabaseObject from "./DatabaseObject";

export default class Invokable extends DatabaseObject {
    constructor(paramInputTypes, funcOutputType) {
        super();
        this.paramInputTypes = paramInputTypes;
        this.funcOutputType = funcOutputType;
    }

    ValidateParamTypes(...params) {
        if (params.length > this.paramInputTypes.length) throw new Error(`Too many arguments`);

        this.paramInputTypes.forEach((paramType, i) => {
            let param = params[i];

            if (!paramType.Matches(param))
                throw new Error(`Params ${param} does not match required param type of ${paramType}`);
        })
    }

    GetParamValues(...params) {
        return params
        .map(param => typeof param === "function" ? param() : param) // stored as getter func
        .map(param => param instanceof Invokable ? param.Invoke(...param.params) : Object(param));
    }

    GetParams() {} // override this

    Invoke() {
        // params is an array of Invokable
        let params = this.GetParams(...arguments);
        let paramValues = this.GetParamValues(...params);
        this.ValidateParamTypes(...paramValues);
        return this.HandleInvoke(...paramValues);
    }
}


