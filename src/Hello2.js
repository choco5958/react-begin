import React, { Component } from "react";


//클래스형 컴포넌트

class Hello2 extends Component{
    static defaultProps = {
        name: '이름없음'
    };
    render(){
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
    
}


export default Hello2;