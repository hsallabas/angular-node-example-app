import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-universal';
import { MetaService } from '@ngx-meta/core';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { DOCUMENT, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void { }
}
