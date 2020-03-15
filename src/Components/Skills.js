import React  from 'react';
//import './main.css';

const Skills=({onRouteChange,skills,id,logo_name,logo_path})=>{
 fetch('http://localhost:3000/skills')
        .then(response=> response.json())
        .then(skills=>this.setState({skills:skills})) //updates the app state with thedescription on portfolio table returned from the server
        .catch(err => console.log(err));  
    return(
        <div className="bg-lightest-blue  br4  shadow-5 fl w-80 ">
       <h1>SKills</h1>
        <div className="tc mt3">
		
         <p>{skills.id}</p>
     <p>{skills.logo_name}
     {skills.logo_path}
     </p>
            <h3 >
            <a  onClick={()=>onRouteChange('About')} className='f6 Link dim balck pa3 pointer'> Back</a>
            <a onClick={()=>onRouteChange('Portfolio')} className='f6 Link dim balck pa3 pointer'>Checkout Portfolio</a>
            
            </h3>
		</div>	
		


        </div>
    );
		
}
export default Skills;