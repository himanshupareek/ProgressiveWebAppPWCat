import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  constructor() { }

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };
  
  public src: string;

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + 
    '?size=' + this.image.fontsize +
    '&ts=' + Date.now();
  }
}


class CatImage {
  message: string;
  api: string;
  fontsize: number;
}