import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {
  goTo(url:string):void{
    window.open(url);
  }


  

  cards=[
    {
      title:'A responsive web page.', 
      imgSrc:'./../assets/images/work1.png', 
      content:'My first web page, which contain some of my projects that I have made at my university, to make use of my html/css knowledges.',
      link:'https://github.com/TAndrian/MyProject'
    },

    {
      title:' Login page.', 
      imgSrc:'./../assets/images/login1.png', 
      content:'A login/registration page inspired from the ENT\'s page! Front-end only, build with Angular. ',
      link:'https://github.com/TAndrian/subst.git'

    },

    {
      title:'My portfolio.', 
      imgSrc:'./../assets/images/portfolio.png', 
      content:'This website is talking about me and what I do. It was one of my latest website I have done to introduce myself and my skills',
      link:'https://github.com/TAndrian/portfolio.git'

    },
  ]

 

  constructor() { }

  
  ngOnInit(): void {
    

  }
}

