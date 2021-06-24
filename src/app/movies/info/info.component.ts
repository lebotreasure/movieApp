import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/Store/Store.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public store:StoreService) { }

  ngOnInit(): void {
  }

}
