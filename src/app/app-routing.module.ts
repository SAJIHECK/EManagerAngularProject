import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { FilecreateComponent } from './user/filecreate/filecreate.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuardGuard]},
  {path:'create',component:CreateComponent,canActivate:[AuthGuardGuard]},
  {path:'edit/:id',component:CreateComponent},
  {path:'user',component:UserComponent},
  {path:'createfile',component:FilecreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
