import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './heroes/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]>   {
    return of(HEROES);
  }
}
