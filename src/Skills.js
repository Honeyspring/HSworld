import React  from 'react';
//import './main.css';

const Skills=({onRouteChange,skills})=>{
//checkoutPortfolio,
    return(
        <div className="bg-lightest-blue  br4  shadow-5 fl w-80 ">
       <h1>SKills</h1>
        <div className="tc mt3">
		
         <p>{skills}</p>
     
            <h3 >
            <a  onClick={()=>onRouteChange('About')} className='f6 Link dim balck pa3 pointer'> Back</a>
            <a onClick={()=>onRouteChange('Portfolio')} className='f6 Link dim balck pa3 pointer'>Checkout Portfolio</a>
            
            </h3>
		</div>	
		


        </div>
    );
		
}
export default Skills;