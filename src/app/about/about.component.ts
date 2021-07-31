import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  downloadFile() {
    const pdfUrl = './files/MonCvEtudiant.pdf';
    const pdfName = 'CV';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  ngOnInit(): void {
  }

}
