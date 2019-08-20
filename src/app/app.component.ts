import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
option:any;
correctData:string;
counter:number=0;
constructor(){
}

setdata(ans:string){
this.correctData=ans;
console.log(this.correctData);
}



correctans(x:number){
  
if(this.correctData==="46"){
 console.log(this.correctData);
//alert("That's correct");
this.counter=this.counter+1;

}
else if( this.correctData==="let") {
  //alert("It's correct");
  console.log(this.correctData);
  this.counter=this.counter+1;
}

else if( this.correctData==='Um no') {
  //alert("It's correct");
  console.log(this.correctData);
  this.counter=this.counter+1;
}

else if( this.correctData==='div') {
 // alert("It's correct");
  this.counter=this.counter+1;
  
}

else if( this.correctData==='datalist') {
  // alert("It's correct");
   this.counter=this.counter+1;
   
}
else{

 // alert("Incorrect");
}

}








  



   questions = [
    {
      question: 'What is 2 + 2 + "6" ?',
      answers: [
        {text: "None selected",correct: false},
        { text: '46', correct: true },
        { text: '10', correct: false },
        { text: '226', correct: false },
        { text: 'None', correct: false },
        
      ]
    },
    {
      question: 'Which of the following has block scope ?',
      answers: [
        {text: "None selected",correct: false},
        { text: 'None', correct: false },
        { text: 'var ', correct: false },
        { text: 'All of these', correct: false },
        { text: 'let', correct: true }
      ]
    },
    {
      question: 'Is css case sensitive?',
      answers: [
        {text: "None selected",correct: false},
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: false },
        { text: 'Um no', correct: true },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'Which of the following is a block elements?',
      answers: [
        {text: "None selected",correct: false},
        { text: 'span', correct: false },
        { text: 'div', correct: true },
        { text: 'anchor', correct: false },
        { text: 'image', correct: false }
      ]
    },
    {
      question: 'Select the new feature of HTML5 ?',
      answers: [
        {text: "None selected",correct: false},
        { text: 'absolute', correct: false },
        { text: 'datalist', correct: false },
        { text: 'span', correct: true },
        { text: 'z-index', correct: false }
      ]
    }
  ]
  

  result(){
    

    alert("Congratulation on completion. Your Score is "+this.counter+" out of 5.The correct ans are 46,let,Um no,div,datalist");

     }
    




  }
    
 
  
