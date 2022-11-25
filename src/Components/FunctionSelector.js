import React from "react";
import * as NativeFunctions from '../Compiler/NativeFunctions'

export default class FunctionSelectorComponent extends React.Component {
    render() {
        return (
            <select className="form-control" onChange={(e) => {
                this.props.onSelect(e.target.value);
            }}>
                {Object.keys(NativeFunctions).map((pair,i) => <option key={i} >{pair}</option>)}
            </select>
        )
    }
}