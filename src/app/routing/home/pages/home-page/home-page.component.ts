import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MenuItem} from "../../../../models/menu-item.model";
import {MenuService} from "../../../../services/menu.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  menuItems$!: Observable<MenuItem[]>;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuItems$ = this.menuService.getMenu();
  }
}
