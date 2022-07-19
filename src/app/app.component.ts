import { Component } from '@angular/core';
import {IClassroom} from "./interfaces/classroom.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T2204M-Angular';

  classGroup: IClassroom[] = [
    {className: 'T2204M',classStatus: true},
    {className: 'T2205M',classStatus: false},
    {className: 'T2206M',classStatus: true},
  ];
}
