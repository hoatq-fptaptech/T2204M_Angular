import {Component, Input} from "@angular/core";

@Component({
  selector:'app-student',
  //template:'<h1>Day la component cua Student</h1><h2>Vi du h2</h2>'
  templateUrl:'./student.component.html'
})
export class StudentComponent {
  @Input()
  studentName!: string;

  age = 18;
  phoneNumber = '0987654321';
}
