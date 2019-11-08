import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { RequestService } from 'src/app/core/services/request.service';
import { Character, HomePage, RouteData } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class HomePageResolver implements Resolve<HomePage> {

  destroyed$ = new Subject<void>();

  constructor(
    private requestService: RequestService
  ) { }

  resolve(): Observable<HomePage> {
    const characterList$ = this.getCharacterList();
    const homePage = {} as HomePage;

    homePage.title = 'Characters';

    characterList$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(list => homePage.characterList = list);

    return of(homePage);
  }

  getCharacterList(): Observable<Character[]> {
    const options = [{ key: 'limit', name: '10'}];
    return this.requestService
      .get('/characters', options)
      .pipe(map((response: RouteData) => response.data.results));
  }
}
