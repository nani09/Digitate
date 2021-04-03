import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RamenDetailsComponent } from './ramen/ramen-details.component';
import { RamenComponent } from './ramen/ramen.component';

const routes: Routes = [{ path: "ramenDetails/:id", component: RamenDetailsComponent }, { path: "", component: RamenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
