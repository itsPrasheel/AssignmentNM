import { Component, ComponentFactoryResolver } from '@angular/core';
import { GetApiService } from './get-api.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suppliers';
  displayFlag = true;

  dataArray: any;
  keyData: any;


  constructor(private user: GetApiService) {
    this.user.getData().subscribe(data => {
      this.dataArray = data;
    })
  }

  detailDisplay(i: any) {
    this.keyData = this.dataArray[i];
    this.displayFlag = false;
  }

  goBack(i: boolean) {
    this.displayFlag = true;
  }
}
