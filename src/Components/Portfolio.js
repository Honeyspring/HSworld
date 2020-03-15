import React ,{Component} from 'react';
//import './main.css';
class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state={
           portfolio:{
            /*file_name:"",
            id:"",
            file:"",
            description:""*/
           },
          
        }

}
  componentDidMount(){
       fetch('http://localhost:3000/portfolio')
        
        
        .then(response=> response.json())
        .then(portfolio=>this.setState({portfolio:portfolio})) //updates the app state with thedescription on about table returned from the server
        .catch(err => console.log(err)); 
    }
      render(){
        const {onRouteChange}= this.props;
    return(
        <div className="bg-lightest-blue  br4  shadow-5 fl w-80 ">
       <h1>Portfolio</h1>
        <div className="tc mt3">
		    
         <p>{this.state.portfolio.file_name}
         {this.state.portfolio.file}
        {this.state.portfolio.description}
      {this.state.portfolio.id}</p>
     
             
            <h3  onClick={()=>onRouteChange('SKills')} className='f6 Link dim balck pa3 pointer'> Back</h3>

		</div>	
	
        </div>
    );
		

}
}
export default Portfolio