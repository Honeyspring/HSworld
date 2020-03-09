import React  from 'react';
//import './main.css';

const Portfolio=({onRouteChange,portfolio})=>{
    return(
        <div className="bg-lightest-blue  br4  shadow-5 fl w-80 ">
       <h1>Portfolio</h1>
        <div className="tc mt3">
		
         <p>{portfolio}</p>
     
             
            <h3  onClick={()=>onRouteChange('SKills')} className='f6 Link dim balck pa3 pointer'> Back</h3>

		</div>	
	
        </div>
    );
		
}
export default Portfolio