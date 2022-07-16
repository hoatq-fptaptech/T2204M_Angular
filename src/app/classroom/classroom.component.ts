import {Component} from "@angular/core";
import {IStudent} from "../interfaces/student.interface";

@Component({
  selector:'app-classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2204M';
  classStatus = true;
  studentNames = [
    'Hoàng Văn Nam',
    'Vũ Trưởng Thành'
  ];
  studentAges = [18,19];

  // tao 1 danh sach sinh vien
  studentArray: IStudent[] = [
    {studentName:'Hoàng Văn Nam',studentAge:18, phoneNumber:'0987654321'},
    {studentName:'Vũ Trưởng Thành',studentAge:21, phoneNumber:'0123456789'}
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
