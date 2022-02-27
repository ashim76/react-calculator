import React from 'react';
import {Display} from './Display';
import {Button} from './Button';

const buttons = [
    {cls:"clear", label:"C"},
    {cls: "clean", label:"AC"},
    {cls: "divide", label:"/"},
    {cls: "multi", label:"*"},
    {cls: "plus", label:"+"},
    {cls: "minus", label:"-"},
    {cls: "no-7", label:"7"},
    {cls: "no-8", label:"8"},
    {cls: "no-9", label:"9"},
    {cls: "no-6", label:"6"},
    {cls: "no-5", label:"5"},
    {cls: "no-4", label:"4"},
    {cls: "no-3", label:"3"},
    {cls: "no-2", label:"2"},
    {cls: "no-1", label:"1"},
    {cls: "no-0", label:"0"},
    {cls: "dot", label:"."},
    {cls: "ans", label:"="},
];

export const CalculatorFrame = () => {
  return (
    <div class="mainParent">
    {/*<!-- display area -->*/}
<Display />
   
    {/*<!-- buttons -->*/}
    <div class="items">
{
    buttons.map((item,i)=>{
return <Button item ={item} />;

    })
}
            
        
    </div>
</div>
  )
}