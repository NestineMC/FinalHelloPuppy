"use strict";
let process={
calcAge:function ()
            {
                let age = document.getElementById('num1').value*1;
                let S= age*7;
                if(S<=0)
                {
                	var result = "Invalid input";
                }
                else{
                	var result = "In dog's year, your dog is "+S+" years old";
                }
                ReactDOM.render(result,document.getElementById('root'));
            },

out:function(){
let _root = document.getElementById('root');
let dom = <div>
                <input type='number' id="num1" /> &nbsp;
                <input type='button' onClick={process.calcAge} value='Compute'/>
            </div>;
ReactDOM.render(dom,_root);}
}
process.out();