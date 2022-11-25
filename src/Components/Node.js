import React from "react";
import Connector from "./Connector";
import Draggable from "./Draggable";
import FunctionSelector from "./FunctionSelector";
import Scene from "./Scene";
import * as NativeFunctions from "../Compiler/NativeFunctions";

export default class NodeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "No Name"
        }
    }
    getResult() {
        try {
            return this.props.definedFunction.Invoke()
        } catch (e) {
            return e;
        }
    }
    onChange(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }
    onDelete() {
        Scene.Instance.removeDefinedFunction(this);
        console.log(Scene.Instance);
    }

    onChangeFunction(newFunctionKey) {
        let newFunction = NativeFunctions[newFunctionKey];
        this.props.definedFunction.SetInvokableChild(newFunction);
        this.forceUpdate();
    }

    render() {
        return (
            <Draggable x={this.props.x} y={this.props.y}>
                <div className="shadow-sm p-3 bg-white rounded" style={{
                    position: "absolute",
                    display: "inline-flex",
                    flexDirection: "column",
                    margin: "0",
                    overflow: "auto",
                    minWidth: "400px"
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {this.props.definedFunction.paramInputTypes.map((pit, i) =>
                                    <div key={i} className="col">
                                        <Connector
                                            node={this}
                                            inputIndex={i}
                                            connectorType="input"
                                            definedFunction={this.props.definedFunction}
                                            paramInputType={pit}>
                                            <span>{pit.name}</span>
                                        </Connector>
                                    </div>
                                )}
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Name" onChange={(e) => this.onChange('name', e)}></input>
                                <FunctionSelector onSelect={(func) => this.onChangeFunction(func)}>{this.props.definedFunction.name}</FunctionSelector>
                                <span>{String(this.getResult())}</span>
                            </div>
                            <div className="col">
                                <Connector node={this} connectorType="output" definedFunction={this.props.definedFunction}>
                                    <span>Output</span>
                                </Connector>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={() => alert(this.getResult())}>Run</button>
                        <button className="btn btn-secondary" onClick={() => this.onDelete()}>Delete</button>
                    </div>
                </div>
            </Draggable >
        );
    }

    static get counter() {
        
        if (!this._counter) this._counter = 0;
        return this._counter = this._counter += 1;
    }
}