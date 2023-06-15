import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  showAddListForm: boolean = false;
  list: any[] = [];
  title: string = '';
  id: string = '';
  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['listId'];
  }

  goBack() {
    this.router.navigate(['/task-view']);
  }
  addTask() {
    const data = {
      title: this.title,
      listId: this.id,
    };
    this.service.addTask(data).subscribe();
    this.router.navigate(['/task-view']);
  }
}
