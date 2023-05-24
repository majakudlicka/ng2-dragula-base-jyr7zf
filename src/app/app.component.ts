import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // these are some basics to get you started -- modify as you see fit.

  vamps = [
    { name: 'Bad Vamp' },
    { name: 'Petrovitch the Slain' },
    { name: 'Bob of the Everglades' },
    { name: 'The Optimistic Reaper' },
  ];

  constructor(private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup('VAMPIRES', {
      // ...
    });

    this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
      console.log(args);
    });
  }
}
