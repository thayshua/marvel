import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailPageComponent } from './character-detail-page/character-detail-page.component';
import { CharacterDetailRoutingModule } from './character-detail-routing.module';



@NgModule({
  declarations: [
    CharacterDetailPageComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule
  ]
})
export class CharacterDetailModule { }
