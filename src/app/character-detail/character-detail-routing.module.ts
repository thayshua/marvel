import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailPageComponent } from './character-detail-page/character-detail-page.component';
import { CharacterDetailPageResolver } from './character-detail-page/character-detail-page.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: CharacterDetailPageComponent,
    resolve: {
      page: CharacterDetailPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetailRoutingModule { }
