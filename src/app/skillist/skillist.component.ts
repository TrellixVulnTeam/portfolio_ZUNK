import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillist',
  templateUrl: './skillist.component.html',
  styleUrls: ['./skillist.component.css']
})
export class SkillistComponent implements OnInit {

  cards=[
    {class:'html', title:'HTML5', content:"My first programming language for creating web pages, I have good understanding of HTML web components."},
    {class:'css', title:'CSS3', content:" The best tool to bring styles to your web page. I make use of its features to create beautiful looking apps."},
    {class:'js', title:'JavaScript', content:" The tool to bring dynamicity into your web page and also a powerful tool used by back-end developer to add functionalities into it."},
    {class:'angular', title:'ANGULAR', content:"Google's library for building front-end web components. The framework I mastered so far among of the 3 popular libraries."},
    {class:'react', title:'REACT', content:"Facebook's  most popular library for building front-end reusable web components. A very interesting framework to master."},
    {class:'vueJS', title:'VueJS', content:"The M.V.V.M front-end JavaScript framework to build interfaces and single page applications. My third favorite framework"},
    {class:'nodeJS', title:'NodeJS', content:"It is a cross platform Javascript runtime that uses the chrome's V8 engine that ensures high speed and efficiency."},
    {class:'docker', title:'DOCKER', content:"A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers."},
    {class:'java', title:'JAVA', content:"Old but gold! Class-based/object-oriented programming language, still present everywhere. I have good understanding of Java codes."},
    {class:'scala', title:'SCALA', content:"My first ojbect-oriented/functional programming language. The ideal tool to design and secure your softwares  ."}
  ]
  

  

  constructor() { }

  ngOnInit(): void {
  }

}
