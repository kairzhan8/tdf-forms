import { Component } from '@angular/core';
import { User } from './user';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('', '', '', 8705654125, 'default', '', true);

  constructor(private enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    // this.enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log('Success', data),
    //   error => console.log('Error', error)
    // );
    console.log(this.userModel);
  }
}
