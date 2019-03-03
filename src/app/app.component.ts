import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Sergio', 'Ramos', 'sr4@gmail.com', 87056541256, '', 'evening', true);
}
