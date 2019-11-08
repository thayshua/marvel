import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Character } from 'src/app/models/character';
import { Observable, of } from 'rxjs';
import { RequestService } from 'src/app/core/services/request.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailPageResolver implements Resolve<Character>{

  constructor(private requestService: RequestService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Character> {
    const id = route.params.id;
    return this.getCharacterDetail(id).pipe(take(1));
  }

  private getCharacterDetail(id: string): Observable<Character> {
    return this.requestService.get(`/characters/${id}`);
  }

}
