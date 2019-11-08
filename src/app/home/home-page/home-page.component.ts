import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePage } from 'src/app/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  page: HomePage;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.page = this.route.snapshot.data.page;
  }

}
