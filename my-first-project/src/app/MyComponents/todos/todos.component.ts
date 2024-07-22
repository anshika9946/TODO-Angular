import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { title } from 'process';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[] = [];
  constructor(){
    this.todos = [
      {
        sno:1,
        title:"This is title",
        desc:"Description",
        active: true
      },
      {
        sno:2,
        title:"This is title",
        desc:"Description",
        active: true
      },
      {
        sno:3,
        title:"This is title",
        desc:"Description",
        active: true
      }
    ]
  }
}
