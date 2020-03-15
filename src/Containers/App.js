import React,{Component} from 'react';
import './App.css';
import Header from '../Components/Header.js';
import ErrorBoundary from '../Components/ErrorBoundary.js';
import Socials from '../Components/Socials.js';
import Documents from '../Components/Documents.js';
import Center from '../Components/Center.js';
import Main from '../Components/Main.js';
import Skills from '../Components/Skills.js';
import Portfolio from '../Components/Portfolio.js';
import Footer from '../Components/Footer.js';

/*var About = [
  {id: 1, detail: 'Musical Instruments bla bla bla bla '}
  
]*/const initialState={
      footer:{
      date:new Date().getFullYear(),
      address:'7,Obaonimole street,Singer,Ota',
      phone:'08092916689'
        
      },
      route:'About',
      PortfolioRoute: false,
      SkillsRoute:false,
      socials:{
      facebook:'',
      twitter:'',
      linkedin:'',
      instagram:'',
      github:'',
      whatsapp: '',
      phone:''
      },
         about:[],
        skills:[],
        portfolio:[]
       
      
}


class App extends Component {
  constructor(props){
  super(props);
    this.state=initialState;
    }
    componentDidMount(){

        fetch('http://localhost:3000/')
        
        
        .then(response=> response.json())
        .then(about=>this.setState({about:about})) //updates the app state with thedescription on about table returned from the server
        .catch(err => console.log(err));  

}
   onRouteChange=(route)=>{
   if(route=== 'About'){
    this.setState({initialState})
   }else if(route=== 'Skills'){
    this.setState({
      SkillsRoute: true,
      About:false,
       PortfolioRoute:false
    })
   }
   else if(route=== 'Portfolio'){
    this.setState({
      PortfolioRoute: true,
      SkillsRoute:false,
      About:false
    })
   }
   this.setState({route:route});
 }
 
  downloadCv=(req,res)=>{
    console.log('cv clicked');
   
  }

downloadResume=(req,res)=>{
    console.log('Resume clicked');
  }
  downloadCoverLetter=(req,res)=>{
    console.log('cl clicked');
  }
  
  render(){
    const {footer,socials,about,portfolio,skills,route}=this.state;
  return (
    <div className="App">
      <Header />
    <Center>
      <ErrorBoundary>
     {this.state.route ==='About' ?
     
      
       <Main  about={about}  onRouteChange={this.onRouteChange} />

   :(route ==='Portfolio' ?
        <Portfolio portfolio={portfolio}  onRouteChange={this.onRouteChange}/>
    
     : <Skills skills={skills} onRouteChange={this.onRouteChange} />
    
     )}
        <Socials social={socials.facebook}/> 
    
      <Documents downloadCv={this.downloadCv} downloadResume={this.downloadResume} downloadCoverLetter={this.downloadCoverLetter}/>
      </ErrorBoundary>
    </Center>
    

      
      <Footer date={footer.date} address={footer.address} phone={footer.phone} />

    </div>
  );
}
}

export default App;
