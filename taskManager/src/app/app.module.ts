import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './component/task-view/task-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TaskComponent } from './component/task/task.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { ListService } from './services/list.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/tasks.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { DyrektywaDirective } from './directive/dyrektywa.directive';
@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TaskComponent,
    ListComponent,
    EditComponent,
    UpperCasePipe,
    DyrektywaDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ListService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
