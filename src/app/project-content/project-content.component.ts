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

  links=[
    {url:'https://github.com/TAndrian/MyProject'},
    
  ];

  cards=[
    {class:'html', title:'A responsive web page.', imgSrc:'./../assets/images/work1.png', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', imgSrc:'./../assets/images/login.png', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
  ]

 

  constructor() { }

  ngOnInit(): void {
    
  }

}
