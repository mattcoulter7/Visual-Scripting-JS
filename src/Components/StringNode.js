import React from "react";
import Connector from "./Connector";
import Draggable from "./Draggable";
import Scene from "./Scene";

export default class StringNodeComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name:"",
            definedFunction:""
        }
    }
    onChange(key,e){
        this.setState({
            [key]:e.target.value
        });
    }
    onDelete(e){
        Scene.Instance.removeStringNode(this);
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
                                <input className="form-control" placeholder="Name" onChange={(e) => this.onChange('name',e)}></input>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Value" onChange={(e) => this.onChange('definedFunction',e)}></input>
                            </div>
                            <div className="col">
                                <Connector node={this} connectorType="output" definedFunction={this.state.definedFunction}>
                                    <span>Output</span>
                                </Connector>
                            </div>
                        </div>
                        <button className="btn btn-secondary" onClick={() => this.onDelete()}>Delete</button>
                    </div>
                </div>
            </Draggable >
        );
    }
    
    static get counter(){
        
        if (!this._counter) this._counter = 0;
        return this._counter = this._counter+=1;
    }
}