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
  selector: 'app-aggiuntivo',
  templateUrl: './aggiuntivo.component.html',
  styleUrls: ['./aggiuntivo.component.css'],
})
export class AggiuntivoComponent implements OnInit {
  newNode!: object;
  newLink!: object;
  labelInput: string = '';
  nodoDaEliminare: string = '';
  linkNodoDestinazione: string = '';
  constructor(
    private _freeApiService: freeApiService,
    private _creaGrafoComponent: CreaGrafoComponent,
    private httpClient: HttpClient,
    private CreaGrafoComponent: CreaGrafoComponent,
    private router: Router
  ) {}

  ngOnInit(): void {}
  functionAggiungiNodo() {
    console.log(this.linkNodoDestinazione);

    this.newNode = {
      data: { customColor: '#9999' },
      id: '1x',
      label: this.labelInput,
    };

    this.newLink = {
      id: 'e099',
      source: '1x',
      target: this.linkNodoDestinazione,
      label: 'is brotherof',
    };

    this._freeApiService.nuovoNodo = this.newNode;
    this._freeApiService.nuovoLink = this.newLink;
    this._freeApiService.eliminaNodo = this.nodoDaEliminare;
  }
}
