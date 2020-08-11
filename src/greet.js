
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let curDate = new Date();
curDate = curDate.getHours();
let greet = '';
const cssStyle = {
};
if(curDate >= 1 && curDate < 12){
      greet = 'Good Morning';
      cssStyle.color = 'green';
}else if(curDate >= 12 && curDate < 17){
      greet ="Good Afternoon";
      cssStyle.color = 'blue';
}else 
{
      greet ="Good night";
      cssStyle.color = "cyan";
}

ReactDOM.render(
      <>
            <div>
         <h1>Hello, <span style={cssStyle}>{greet}</span></h1>
         </div>
      </>,
      document.getElementById('root'));