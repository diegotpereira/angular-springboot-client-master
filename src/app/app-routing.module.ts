import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
    
 { path: 'employees', component: EmployeeListComponent },
 { path: 'add', component: CreateEmployeeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  {path: 'logout', component: LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
