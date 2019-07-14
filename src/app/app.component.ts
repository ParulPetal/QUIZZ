import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

quiz=function(){
 let Q=document.getElementById("box");
 if (Q.style.display== "block")
{
Q.style.display="none";
}
else{

  Q.style.display="block";
}
}

 
ans1(){
alert("Correct ans is 46.");
};

ans2(){
  alert("Correct ans is let.");
  };

  ans3(){

    alert("Correct ans is Um no.");
};

  ans4(){

    alert(" Correct ans is div.");

  }
  

clickMessage1 = '';
//question 1

  Q1A1() {
    this.clickMessage1 = 'You have selected 46.';
  }
 Q1A2() {
    this.clickMessage1 = 'You have selected 10.';
  }
  Q1A3() {
    this.clickMessage1 = 'You have selected 226.';
  }
 Q1A4() {
    this.clickMessage1 = 'You have selected None.';
  }

//question 2
  
clickMessage2="";
  Q2A1(){
    this.clickMessage2 = 'You have selected None.';
  }

  Q2A2(){
    this.clickMessage2 = 'You have selected var.';
  }

  Q2A3(){
    this.clickMessage2 = 'You have selected All of these.';
  }

  Q2A4(){
    this.clickMessage2 = 'You have selected let.';
  }


//question 3

clickMessage3="";
Q3A1(){
  this.clickMessage3 = 'You have selected Kinda.';
}
Q3A2(){
  this.clickMessage3 = 'You have selected YES!!!.';
}
Q3A3(){
  this.clickMessage3 = 'You have selected Um no.';
}
Q3A4(){
  this.clickMessage3 = 'You have selected IDK.';
}



//question4
clickMessage4="";

Q4A1(){
  this.clickMessage4 = 'You have selected span.';
}
Q4A2(){
  this.clickMessage4 = 'You have selected div!!!.';
}
Q4A3(){
  this.clickMessage4 = 'You have selected anchor.';
}
Q4A4(){
  this.clickMessage4 = 'You have selected image.';
}

   questions = [
    {
      question: 'What is 2 + 2 + "6" ?',
      answers: [
        { text: '46', correct: true },
        { text: '10', correct: false },
        { text: '226', correct: false },
        { text: 'None', correct: false }
      ]
    },
    {
      question: 'Which of the following has block scope ?',
      answers: [
        { text: 'None', correct: false },
        { text: 'var ', correct: false },
        { text: 'All of these', correct: false },
        { text: 'let', correct: true }
      ]
    },
    {
      question: 'Is css case sensitive?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: false },
        { text: 'Um no', correct: true },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'Which of the following is a block elements?',
      answers: [
        { text: 'span', correct: false },
        { text: 'div', correct: true },
        { text: 'anchor', correct: false },
        { text: 'image', correct: false }
      ]
    }
  ]
  
  finish(){

alert("Welldone! :)");
  }

 
  }
