import { Component, OnInit } from '@angular/core';
import { AuthInterceptor } from 'src/app/services/auth.interceptor';
import { AuthService } from 'src/app/services/auth.service';
import { ListService } from 'src/app/services/list.service';
import { TaskService } from 'src/app/services/tasks.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  showAddListForm: boolean = false;
  list: any[] = [];
  tasks: any[] = [];
  currentActiveList: string = '';

  constructor(
    private service: ListService,
    private taskService: TaskService,
    public serviceAuth: AuthService
  ) {}

  ngOnInit(): void {
    this.getList();
  }
  getList(): void {
    this.service.getList().subscribe((response) => {
      this.list = response;
      this.currentActiveList = this.list[0].id;
      this.getTask();
    });
  }
  getTask(): void {
    this.taskService
      .getTasks(this.currentActiveList)
      .subscribe((response) => (this.tasks = response));
  }
  deleteList(): void {
    this.service.deleteList(this.currentActiveList).subscribe();
    window.location.reload();
  }
  updateCarrentListId(id: string): void {
    this.currentActiveList = id;
    this.getTask();
    console.log(this.currentActiveList);
  }
}
