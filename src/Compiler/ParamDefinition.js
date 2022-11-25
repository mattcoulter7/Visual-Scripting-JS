import DatabaseObject from "./DatabaseObject";

export default class ParamDefinition extends DatabaseObject {
    constructor(
        name,
        typeofType, // type string: 'object', 'boolean' 
        instanceofType, // instance object, i.e. Number, String, Date, Object, Array, CustomClass
        optional // bo
    ) {
        super();
        this.name = name;
        this.typeofType = typeofType;
        this.instanceofType = eval(instanceofType);
        this.optional = eval(optional);
    }

    Matches(param) {
        return (this.instanceofType ? (param instanceof this.instanceofType) : true) &&
            (this.typeofType ? (typeof param === this.typeofType) : true) &&
            (this.optional ? typeof param !== "undefined" : true)
    }

    ToJSON() {
        return {
            name:this.name,
            typeofType: this.typeofType,
            instanceofType: this.instanceofType.name,
            optional: String(this.optional)
        }
    }
}