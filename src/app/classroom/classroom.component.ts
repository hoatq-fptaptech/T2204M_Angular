import {Component} from "@angular/core";

@Component({
  selector:'app-classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2204M';
  classStatus = true;
  studentNames= [
    'Hoàng Văn Nam',
    'Vũ Trưởng Thành'
  ];
  teacherNames = [
    'Trịnh Quang Hòa',
    'Nguyễn Tuân',
    'Đặng Kim Thi'
  ];
  subjectNames=[
    'LBEP',
    'HCJS',
    'AJS',
    'DMS'
  ];
  changeName(){
    this.className = 'T2203E';
  }
  changeStatus(){
    this.classStatus = !this.classStatus;
  }
}
