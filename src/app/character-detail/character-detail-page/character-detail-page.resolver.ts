import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RequestService } from 'src/app/core/services/request.service';
import { Character, RouteData } from 'src/app/models';

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
    return this.requestService
      .get(`/characters/${id}`)
      .pipe(map((response: RouteData) => response.data.results));
  }

}
