import { Component, Input } from '@angular/core';

@Component({
selector: 'app-animals',
templateUrl: './animals.component.html'
})

export class AnimalsComponent {
  @Input() animalList: string[];
}
