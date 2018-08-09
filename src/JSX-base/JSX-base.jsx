import React from 'react';
import ReactDOM from 'react-dom';

// jsx的基本用法

let name = 'I am cui';
let names = ['li', 'wang', 'zhou'];
let flag = false;
let jsx = (
    <div>
        {/* 条件判断*/}
        {
            flag === true ? <p> {name}</p> : <p>not  {name}</p>

        }
        {/* 数组循环 */}
        {
            names.map((name,index) => <p key={index}>{name}</p>)
        }
    </div>
);

let obj = {

}

ReactDOM.render(
    jsx,
    document.getElementById('app')
);