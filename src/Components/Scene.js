import React from "react";

import Node from "./Node";
import StringNode from "./StringNode"

import DefinedFunction from "../Compiler/DefinedFunction";
import NativeFunction from "../Compiler/NativeFunction";


export default class SceneComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            functionNodes:[],
            stringNodes: []
        }

        this.constructor._instance = this;
    }
    
    addDefinedFunction(e) {
        let initialX = e ? e.pageX : 0;
        let initialY = e ? e.pageY : 0;
        let id = Node.counter;
        this.setState({
            functionNodes:[
                ...this.state.functionNodes,
                <Node x={initialX} y={initialY} id={id} key={id} definedFunction={new DefinedFunction(NativeFunction.add)} />
            ]
        });
    }
    removeDefinedFunction(comp){
        
        this.setState({
            functionNodes:this.state.functionNodes.filter(fn => fn.props.id !== comp.props.id)
        });
    }
    addStringNode(e){
        let initialX = e ? e.pageX : 0;
        let initialY = e ? e.pageY : 0;
        let id = StringNode.counter;
        this.setState({
            stringNodes:[
                ...this.state.stringNodes,
                <StringNode x={initialX} y={initialY} id={id} key={id} />
            ]
        })
    }
    removeStringNode(comp){
        this.setState({
            stringNodes:this.state.stringNodes.filter(fn => fn.props.id !== comp.props.id)
        });
    }

    Connect(outputConnector,inputConnector){
        if (outputConnector.props.connectorType != "output") throw new Error("Must drag from an output node");
        if (inputConnector.props.connectorType != "input") throw new Error("Must drag onto an input node");

        let output = outputConnector.props.definedFunction; // not always an object
        let input = inputConnector.props.definedFunction;

        if (output == input) throw new Error("Must drag to a different node");
        
        let inputIndex = inputConnector.props.inputIndex;
        input.params[inputIndex] = () => outputConnector.props.definedFunction;
        return true;
    }

    onContextMenu(e) {
        e.preventDefault();
        this.addDefinedFunction(e);
    }

    onDoubleClick(e){
        e.preventDefault();
        this.addStringNode(e);
    }

    render() {
        return (<div onContextMenu={(e) => this.onContextMenu(e)} onDoubleClick={(e) => this.onDoubleClick(e)} style={{
            width:"100%",
            height:"100%",
            backgroundColor: "rgb(235, 235, 235)"
        }}>
            {this.state.functionNodes}
            {this.state.stringNodes}
        </div>)
    }

    static get Instance(){
        return this._instance;
    }
}