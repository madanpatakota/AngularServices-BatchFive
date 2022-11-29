import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularServices-BatchFive';

  products = [
    {
      Id: 1,
      Name: 'Samsung',
    },
    {
      Id: 2,
      Name: 'Lenovo',
    },
  ];
}
