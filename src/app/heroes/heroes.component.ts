import { HEROES } from './mock-heroes';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HeroService } from '../hero.service'
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) {
    this.heroService
  }

  ngOnInit() {
    this.getHeroes(); 
  }

}
