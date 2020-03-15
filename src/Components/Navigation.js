import React from 'react';
//import './Navigation.css';
const Navigation = ({onRouteChange,PortfolioRoute,SkillsRoute})=>{

      if(PortfolioRoute ===true){
        return (   
           <nav className='navbar'>
              <h3  onClick={()=>onRouteChange('Portfolio')} className='f3 Link dim balck pa3 pointer'> Skills </h3> 
            </nav>
        );
      }else if(SkillsRoute ===true){
        return (   
           <nav className='navbar'>
              <h3  onClick={()=>onRouteChange('SKills')} className='f3 Link dim balck pa3 pointer'> Portfolio</h3> 
             
            </nav>
        );
      }
      else {
        return(
        <nav className='navbar'>
             
              <h3  onClick={()=>onRouteChange('SKills')} className='f3 Link dim balck pa3 pointer'>Skills</h3> 
              <h3  onClick={()=>onRouteChange('Portfolio')} className='f3 Link dim balck pa3 pointer'>Portfolio</h3> 

            </nav>
              );
      }
      
  
    }
export default Navigation;