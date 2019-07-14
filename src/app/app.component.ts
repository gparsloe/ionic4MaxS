import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: string[] = ['Max', 'Manuel', 'Anna'];
  animals: string[] = ['Anteater', 'Owl', 'frog'];
}
