import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { AuthenticationGuard } from './authentication.guard';

const appRoutes:Routes=[
{
  path:'',
  component: LoginFormComponent
},
{
  path:'dashboard',
  canActivate:[AuthenticationGuard],
  component: DashboardComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
