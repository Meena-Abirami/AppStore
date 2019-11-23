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
        name: app.app_name,
        pubName: app.publisherName,
        url: app.playstore_url,
        iconURL: app.app_icon,
        description: app.app_description
      }
    });

  }

  navigateTo(url) {
    window.open(url, '_blank')
  }

}

interface App {
  name: string,
  pubName: string,
  iconURL: string,
  description: string,
  url: string
}
