import { Component, OnInit } from '@angular/core';
import {DataService  } from '../data.service';
@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  appList: Array<App> = [];
  constructor(private service: DataService) { }

  ngOnInit() {
    this.loadAppList();
  }

  loadAppList() {
    this.service.getAppList().subscribe(list => {
      this.mapAppList(list);
    })
  }

  mapAppList(list) {
    this.appList = list.map(app => {
      return {
        name: app.appName,
        pubName: app.publisherName,
        iconURL: app.iconURL,
        rating: app.rating
      }
    });

  }

}

interface App {
  name: string,
  pubName: string,
  iconURL: string,
  rating: number
}
