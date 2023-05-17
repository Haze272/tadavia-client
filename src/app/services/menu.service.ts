import { Injectable } from '@angular/core';
import {MenuItem} from "../models/menu-item.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<MenuItem[]> {
    return this.getMockMenu();
  }

  private getMockMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('../../assets/mockData.json');
  }
}
