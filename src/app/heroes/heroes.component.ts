import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
