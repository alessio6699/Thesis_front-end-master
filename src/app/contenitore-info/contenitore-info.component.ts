import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { freeApiService } from '../services/freeapi.service';
import { comments } from '../classes/comments';
import { Posts } from '../classes/posts';
import { Albums } from '../classes/albums';
import { Photos } from '../classes/photos';
import { Versi } from '../classes/versi';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { ChildActivationStart } from '@angular/router';
import { capitoloInfo } from '../classes/capitoloInfo';
import { righe } from '../classes/righe';
import { words } from '../classes/words';
import { Subscription } from 'rxjs';
import { CreaGrafoComponent } from '../crea-grafo/crea-grafo.component';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';

@Component({
  selector: 'app-contenitore-info',
  templateUrl: './contenitore-info.component.html',
  styleUrls: ['./contenitore-info.component.css'],
})
export class ContenitoreInfoComponent implements OnInit, AfterViewInit {
  varianti = '';
  note = '';
  scansione = '';

  constructor(
    private _freeApiService: freeApiService,
    private _creaGrafoComponent: CreaGrafoComponent,
    private httpClient: HttpClient,
    private CreaGrafoComponent: CreaGrafoComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this._freeApiService.granularitaGlobale == 'metrica') {
      console.log('ci siamo');

      this.scansione = this._freeApiService.interoDataGlobale.Scansione;
      console.log(this.scansione);
    } else if (this._freeApiService.granularitaGlobale == 'carattere') {
      this.varianti = this._freeApiService.interoDataGlobale.Variants;
      this.note = this._freeApiService.interoDataGlobale.Notes[0];
    } else {
    }
  }

  ngAfterViewInit() {}
}
