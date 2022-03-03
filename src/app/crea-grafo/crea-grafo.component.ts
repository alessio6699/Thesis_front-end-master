import { Component } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { comments } from '../classes/comments';
import { Posts } from '../classes/posts';
import { Albums } from '../classes/albums';
import { Photos } from '../classes/photos';
import { Versi } from '../classes/versi';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SplitPipe } from './split.pipe';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { ChildActivationStart, Router } from '@angular/router';
import { carattere } from '../classes/carattere';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-crea-grafo',
  templateUrl: './crea-grafo.component.html',
  styleUrls: ['./crea-grafo.component.css'],
})
export class CreaGrafoComponent implements OnInit {
  private from1 = '';
  title = 'tesi';
  frase1 = '';
  text = '';
  tutto = {};
  prova!: boolean;
  nodo = '';
  capitoloText = '';

  constructor(
    private _freeApiService: freeApiService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  lstPosts!: Posts[];
  lstAlbums!: Albums[];
  AlbumSelected!: number;
  ParolaSelected!: string;
  granularitaSelected!: string;
  parolaSelected!: string;
  lstVersi!: Versi[];
  frase!: comments[];
  splitted!: comments[];
  fraseParole!: Photos[];
  Parola!: comments[];

  attiva1 = this._freeApiService.attiva;
  erroreG = this.appComponent.errore;

  ngOnInit() {}

  granularitaScelta(granularitaLocale: string) {
    this._freeApiService.granularitaGlobale = granularitaLocale;
  }

  fitGraph() {
    this.zoomToFit$.next(true);
  }

  nodes: Node[] = [];
  clusters: ClusterNode[] = [];

  links: Edge[] = [];

  layout: String | Layout = 'dagreCluster';
  layouts: any[] = [
    {
      label: 'Dagre',
      value: 'dagre',
    },
    {
      label: 'Dagre Cluster',
      value: 'dagreCluster',
      isClustered: true,
    },
    {
      label: 'Cola Force Directed',
      value: 'colaForceDirected',
      isClustered: true,
    },
    {
      label: 'D3 Force Directed',
      value: 'd3ForceDirected',
    },
  ];

  // line interpolation
  curveType: string = 'Bundle';
  curve: any = shape.curveLinear;
  interpolationTypes = [
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before',
  ];

  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = true;
  showMiniMap: boolean = true;
  miniMapMaxWidth: number = 100;
  miniMapMaxHeight: number = 100;
  panOffsetY: number = 10000;
  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;
  animate: boolean = true;

  panningAxis: string = 'vertical';
  autoZoom: boolean = true;
  autoCenter: boolean = true;
  nodeHeight: number = 100;
  nodeWidth: number = 100;

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  setInterpolationType(curveType: any) {
    this.curveType = curveType;
    if (curveType === 'Bundle') {
      this.curve = shape.curveBundle.beta(1);
    }
    if (curveType === 'Cardinal') {
      this.curve = shape.curveCardinal;
    }
    if (curveType === 'Catmull Rom') {
      this.curve = shape.curveCatmullRom;
    }
    if (curveType === 'Linear') {
      this.curve = shape.curveLinear;
    }
    if (curveType === 'Monotone X') {
      this.curve = shape.curveMonotoneX;
    }
    if (curveType === 'Monotone Y') {
      this.curve = shape.curveMonotoneY;
    }
    if (curveType === 'Natural') {
      this.curve = shape.curveNatural;
    }
    if (curveType === 'Step') {
      this.curve = shape.curveStep;
    }
    if (curveType === 'Step After') {
      this.curve = shape.curveStepAfter;
    }
    if (curveType === 'Step Before') {
      this.curve = shape.curveStepBefore;
    }
  }
}
