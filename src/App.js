import React,{Component} from 'react';
import './App.css';
import Header from './Header.js';
import Socials from './Socials.js';
import Documents from './Documents.js';
import Center from './Center.js';
import Main from './Main.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';
import Footer from './Footer.js';

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
      content:{
        about:'',
        skills:'',
        portfolio:''
        }
      
}

class App extends Component {
  constructor(props){
  super(props);
    this.state=initialState;
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
    console.log('clicked');
  }

downloadResume=(req,res)=>{
    console.log('Resume clicked');
  }
  downloadCoverletter=(req,res)=>{
    console.log('cl clicked');
  }
  
  render(){
    const {footer,socials,content,route}=this.state;
  return (
    <div className="App">
      <Header />
    <Center>
      
     {this.state.route ==='About' ?
     
      
       <Main about={content.about} checkoutSkills={this.checkoutSkills} onRouteChange={this.onRouteChange} />

   :(route ==='Portfolio' ?
        <Portfolio portfolio={content.portfolio}  onRouteChange={this.onRouteChange}/>
    
     : <Skills skills={content.skills} onRouteChange={this.onRouteChange} />
    
     )}
        <Socials social={socials.facebook}/> 
    
      <Documents downloadCv={this.downloadCv} downloadResume={this.downloadResume} downloadCoverletter={this.downloadCoverLetter}/>
    </Center>
    

      
      <Footer date={footer.date} address={footer.address} phone={footer.phone} />

    </div>
  );
}
}

export default App;
