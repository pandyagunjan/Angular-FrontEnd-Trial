import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id :number,
    public description:string,
    public done:boolean,
    public targetDate:Date

  )
  {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]
  message : string
  //  = [
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Become an Expert at Angular',false,new Date()),
  //   new Todo(2,'Visit XYZ',false,new Date()),
  //   // {id :1 , description : 'Learn to dance'},
  //   // {id :2 , description : 'Become an Expert at Angular'},
  //   // {id :3 , description : 'Visit XYZ'}
  // ]
  // todo ={
  //   id : 1 ,
  //   descritption : 'Learn to dance'
  // }
  constructor(public todoService :TodoDataService ,
    private router : Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }
  refreshTodos()
  {
    this.todoService.retrieveAllTodos('gunjan').subscribe(
    response => {
      console.log(response);
      this.todos=response;
    }
    )
  }
  deleteTodo(id)
  {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodos('gunjan',id).subscribe(response => {
      console.log(response);
     this.message =`Delete of todo ${id} succesful!`
     this.refreshTodos()
    }
  )

  }

  updateTodo(id)
  {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id])
 // )

  }

  // tslint:disable-next-line:typedef
  addTodo()
  {
    this.router.navigate(['todos' , -1]);
  }
}
