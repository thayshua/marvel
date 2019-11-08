import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageResolver } from './home-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      page: HomePageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
