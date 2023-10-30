import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './heroes-hero-card.component.html',
  styles: [
  ]
})
export class HeroesHeroCardComponent implements OnInit {

  @Input()
  public hero!: Hero;

  constructor() { }

  ngOnInit(): void {
    if (!this.hero) throw new Error('Hero property is required');
    
  }

}
