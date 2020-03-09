import React  from 'react';
//import './main.css';

const Main=({about,onRouteChange})=>{

    return(
        <div className="bg-lightest-blue  br4  shadow-5 fl w-80 ">
       <h1>About</h1>
        <div className="tc mt3">
		<p >{about}</p>
         
        <h3  onClick={()=>onRouteChange('SKills')} className='f6 Link dim balck pa3 pointer'>Know More </h3>
		</div>	
		


        </div>
    );
		
}
export default Main;