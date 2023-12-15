import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './post/home/home.component';

const routes: Routes = [
  { path: 'post/index', component: HomeComponent },
  { path: 'post', redirectTo: 'post', pathMatch: 'full'  },
  { path: '', redirectTo: 'post', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
