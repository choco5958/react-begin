import React from "react";

function Hello({ color, name, isSpecial }){
    return(
        <div style={{ color }}>
            { isSpecial ? <b>삼항연산자*</b> : null }
            { isSpecial && <b>단축평가논리계산법*</b> }
            안녕하세요 {name}
        </div>
    ); 
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;