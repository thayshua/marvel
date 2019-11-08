import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {

  character: Character;
  imageUrl = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.character = this.route.snapshot.data.page[0];
    const image = this.character.thumbnail;
    this.imageUrl = `${image.path}.${image.extension}`;
  }

}
