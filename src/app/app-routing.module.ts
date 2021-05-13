import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
// import {LoginComponent} from './user/login/login.component';
// import {SignupComponent} from './user/signup/signup.component'

const routes: Routes = [
  // {path:'login', component:LoginComponent},
  // {path:'signup', component:SignupComponent}
 
 //Lazy loading comopnent
  // {
  //   path:"admin", loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  // }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
