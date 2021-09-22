import { Component, OnInit } from '@angular/core';
import { Exam } from '../exam';
import { ExamService } from '../exam.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { async } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-online-exam',
  templateUrl: './online-exam.component.html',
  styleUrls: ['./online-exam.component.css']
})


export class OnlineExamComponent implements OnInit {
  total?:string='';
  totalAnswer:string=''
  result:number[] = []
  question:Array<Exam>=[]
  rightAnswer:number= 0;
  constructor(public questions:ExamService,private rouuter:Router) { }

  ngOnInit(): void {

    this.questions.loadJsonData()
    .subscribe(data=>{this.question=data,this.result = this.question.map(x=>x.correctans) },
      error=>console.log("Error")
     
      )
  }

  checkValues(ref:NgForm):void {
  //  this.questions.loadJsonData()
  //  .subscribe(data=>{this.question=data,this.result = this.question.map(x=>x.correctans)},
  //   error=>console.log("Error")
  // )
  console.log(this.result[0]+"CorrectAns")
  let inputAnswer = ref.value;
  console.log(inputAnswer+"inputAnswer");
  console.log(inputAnswer.radio1+"inputAnswerRadio1");
  console.log(this.question.length+"length");
  console.log(this.result)

  this.getValues(ref);
  // for(var i=1; i<=this.question.length; i++) {
      
  }

  getValues(ref:NgForm) {
    let inputAnswer = ref.value;
    if(inputAnswer.radio1==this.result[0]) {
      this.rightAnswer+=1;
    }
   
    if(inputAnswer.radio2==this.result[1]) {
      this.rightAnswer+=1;
    }
  
    if(inputAnswer.radio3==this.result[2]) {
      this.rightAnswer+=1;
    }

    if(inputAnswer.radio4==this.result[3]) {
      this.rightAnswer+=1;
    }

    if(inputAnswer.radio5==this.result[4]) {
      this.rightAnswer+=1;
    }

    if(inputAnswer.radio6==this.result[5]) {
      this.rightAnswer+=1;
    }

    if(inputAnswer.radio7==this.result[6]) {
      this.rightAnswer+=1;
    }

    if(inputAnswer.radio8==this.result[7]) {
      this.rightAnswer+=1;
    }

    if(inputAnswer.radio9==this.result[8]) {
      this.rightAnswer+=1;
    }
      
    if(inputAnswer.radio10==this.result[9]) {
      this.rightAnswer+=1;
    }
    console.log("total="+this.rightAnswer)

    this.totalAnswer= "you have given" + this.rightAnswer + "out of 10 as right Answer"
    if(this.rightAnswer>=7) {
      this.total = "you passed the exam"
    }
     else {
      this.total = "Please try again and try get 7 out of 10"
    }
    (document.getElementById('submit-button') as HTMLButtonElement).disabled = true;
  }

}

