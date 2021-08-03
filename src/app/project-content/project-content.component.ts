import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {

  cards=[
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
    {class:'html', title:'A responsive web page.', content:'My first web page to make use of my html/css knowledge'},
  ]

  imgs=[]

  constructor() { }

  ngOnInit(): void {
  }

}
