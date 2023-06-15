import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './component/task-view/task-view.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/list/list.component';
import { TaskComponent } from './component/task/task.component';
import { EditComponent } from './component/edit/edit.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  { path: '', component: TaskViewComponent },
  { path: 'task-view', component: TaskViewComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'task/:listId', component: TaskComponent },
  { path: 'edit/:taskId', component: EditComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
