import React from 'react';
import './Socials.css';

const Socials=({facebook,twitter,linkedin,instagram,github,whatsapp,phone})=>{
    return(


<div className=" fl w-20 pa2  ">
             <p  className="flex  flex-column grow  bg-lightest-blue br3 mr4 outline">
  {facebook}
 <a className="link dim gray dib h2 w2 br-100 mr3 " href="" title="">
<svg ><title>facebook icon</title><path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path></svg>
</a>
<br/>{twitter}<a className="link dim gray dib h2 w2 br-100 mr3 " href="" title="">
<svg ><title>twitter icon</title><path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path></svg>
</a>
<br/>{linkedin}
<br/>{instagram}
<br/>{github}
<a className="link dim gray dib br-100 h2 w2 mr3 " href="" title="">
<svg ><title>github icon</title><path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path></svg>
</a>
<br/>{whatsapp}
<br/>{phone}
           	</p>				
        </div>
    );
	
}
export default Socials;