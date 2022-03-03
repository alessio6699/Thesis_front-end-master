import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { comments } from './classes/comments';
import { Posts } from './classes/posts';
import { Albums } from './classes/albums';
import { Photos } from './classes/photos';
import { Versi } from './classes/versi';

import * as shape from 'd3-shape';
import { Subject } from 'rxjs';

//import { nodes, links, clusters } from './data/data';

import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // selector: 'select-value-binding-example',
  // templateUrl: 'select-value-binding-example.html',
})
export class AppComponent {
  public errore: boolean = false;
  title = 'tesi';
  text = '';
  tutto = '';
  Frase = '';
  capitoloText = '';
  constructor(private _freeApiService: freeApiService) {}

  lstPosts!: Posts[];
  lstAlbums!: Albums[];
  AlbumSelected!: number;
  //lstPhotos!: Photos[];
  lstVersi!: Versi[];
  frase!: comments[];
  fraseParole!: Photos[];

  ngOnInit() {}
  onVersoSelected(selectedVerso: any): void {}

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

  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;

  autoZoom: boolean = false;
  autoCenter: boolean = false;

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

  // setLayout(layoutName: string): void {
  //   const layout = this.layouts.find((l) => l.value === layoutName);
  //   this.layout = layoutName;
  // }
}
