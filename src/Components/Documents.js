import React  from 'react';
//import './main.css';

const Documents=({downloadCoverLetter,downloadCv,downloadResume})=>{

    return(
       
        <div className="flex br-4 w-100">
 
<div className=" w-25 pa3 mr2 grow ma1">
<button className="f6 link dim br2 ba ph3 pv2 mb2 dib navy" href="#0" onClick={downloadCoverLetter} type="submit" >Download Cover letter</button>
</div>
<div className="  w-25 pa3 mr2 grow ma1">
<button className=" f6 link dim br2 ba ph3 pv2 mb2 dib navy" href="#0"  onClick={downloadResume} type="submit" >Download Resume</button>
</div>
<div className=" w-25 pa3 mr2 grow ma1">
<button className="f6 link dim br2 ba ph3 pv2 mb2 dib navy" href="#0" onClick={downloadCv} type="submit" >Download CV</button>
</div>
	
     </div>	 
   


        
    );
		
}
export default Documents;