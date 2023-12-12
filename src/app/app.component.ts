import {Component} from '@angular/core';
import {HeroesComponent} from "./heroes/heroes.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeroesComponent],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
