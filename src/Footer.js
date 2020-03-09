import React  from 'react';
import './Footer.css';

const Footer=({date,address,phone})=>{

    return(
        <footer className="bg-lightest-blue  br4  shadow-5 pv2 ph3 ph5-m ph6-l fl w-100 pa2 ">
                        <small className="f6 db tc">
                         &copy; {date}<b className="ttu">Honeyspring World </b>, All Rights Reserved
                         </small>
                        <div className="tc mt3">
 						   <p >{address}</p>
                           <p>{phone}</p>
           					</div>	

        </footer>
    );
		
}
export default Footer;