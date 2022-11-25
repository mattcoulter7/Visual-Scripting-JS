import React from "react";
export default class DraggableComponent extends React.Component {
    constructor(props){
        super(props);
        this.movementX=null
        this.movementY=null
        
        this.state={
            x:this.props.x,
            y:this.props.y
        }
    }
    onDragStart(e){
        e.stopPropagation();
        this.movementX = e.pageX;
        this.movementY = e.pageY;
    }
    onDragEnd(e){
        e.stopPropagation();
        this.movementX = e.pageX - this.movementX;
        this.movementY = e.pageY - this.movementY;
        this.setState({
            x:this.state.x + this.movementX,
            y:this.state.y + this.movementY
        });
        this.movementX = null;
        this.movementY = null;
    }
    render() {
        return (<div
            style={{
                display:"inline-block",
                margin:"0px",
                position:"absolute",
                top:this.state.y + "px",
                left:this.state.x + "px"
            }}
            draggable="true"
            onDragStart={(e) => this.onDragStart(e)}
            onDragEnd={(e) => this.onDragEnd(e)}
        >
            {this.props.children}
        </div>)
    }
}