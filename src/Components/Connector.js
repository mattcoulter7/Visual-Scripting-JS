import React from "react";
import { CgRadioCheck,CgRadioChecked } from "react-icons/cg"
import Scene from "./Scene";

export default class ConnectorComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selected:false,
            connected:false
        }
    }
    
    onSelect(e) {
        if (this.constructor.selectedComponent){
            this.constructor.selectedComponent.onDeselect();
        }
        this.constructor.selectedComponent = this;
        this.setState({
            selected:true
        });
    }

    onClick(e){
        if (this.props.connectorType == "output"){
            this.onSelect(e);
        } else if (this.props.connectorType == "input"){
            this.onConnect(e)
        }
    }

    onConnect(e) {
        var connection = Scene.Instance.Connect(
            this.constructor.selectedComponent,
            this
        );
        if (connection) {
            this.setState({
                connected:true
            });
            this.constructor.selectedComponent.setState({
                connected:true
            })
            console.log("Successfully Connected!")
            this.constructor.selectedComponent = null;
            
            this.props.node.forceUpdate();
        }
    }

    render() {
        let circleIcon = (this.state.connected || this.state.selected) ? <CgRadioChecked /> : <CgRadioCheck />
        let inside = this.props.connectorType == "output" ? 
        <>
            {this.props.children},
            {circleIcon}
        </> : <>
            {circleIcon}
            {this.props.children}
        </>
        return (
            <div
                onClick={(e) => this.onClick(e)}
                style={{
                    display: "flex",
                    alignItems:"flex-end"
                }}
            >
                {inside}
            </div>
        )
    }

    static selectedComponent;
}