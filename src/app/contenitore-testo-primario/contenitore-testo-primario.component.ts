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
import { EMPTY, Subject } from 'rxjs';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { ChildActivationStart } from '@angular/router';
import { capitoloInfo } from '../classes/capitoloInfo';
import { righe } from '../classes/righe';
import { words } from '../classes/words';
import { Subscription } from 'rxjs';
import { CreaGrafoComponent } from '../crea-grafo/crea-grafo.component';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { SplitPipe } from '../crea-grafo/split.pipe';
import { carattere } from '../classes/carattere';
import { ContenitoreInfoComponent } from '../contenitore-info/contenitore-info.component';
import { scansione } from '../classes/scansione';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contenitore-testo-primario',
  templateUrl: './contenitore-testo-primario.component.html',
  styleUrls: ['./contenitore-testo-primario.component.css'],
})
export class ContenitoreTestoPrimarioComponent {
  @ViewChild('myDiv') myDiv!: ElementRef;
  evento1!: string;
  newNode!: object;
  newLink!: object;
  private from2 = '';

  selezionaCapitolo = '';
  selezionFrase = '';
  tornaIndietro = '';
  note!: string;
  label!: string;
  varianti = '';
  valoreGranularita = '';
  idDefinitivo = '';
  idDefinitivoVerso = '';
  numeroVerso = '';
  visibilita = 'hidden';
  labelInputText!: string;
  inputDestination!: number;
  capitoloIntero!: righe[];
  coloreNodo!: string;
  idVerso!: righe[];
  scansione!: scansione[];

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
  erroreG = this.appComponent.errore;

  // constructor(private _freeApiService: freeApiService) {}
  constructor(
    private _freeApiService: freeApiService,
    private _contenitoreInfo: ContenitoreInfoComponent,
    private _creaGrafoComponent: CreaGrafoComponent,
    private httpClient: HttpClient,
    private CreaGrafoComponent: CreaGrafoComponent,
    private router: Router,
    public appComponent: AppComponent
  ) {}

  ngOnInit(): void {}

  ottieniCapitolo(selezionaCapitolo: any): void {
    this.visibilita = 'visible';
    this.valoreGranularita = this._freeApiService.granularitaGlobale;
    if (this.valoreGranularita == undefined) {
      this.appComponent.errore = true;
      this.erroreG = this.appComponent.errore;
      stop();
      this.visibilita = 'hidden';
    } else {
      this._freeApiService.getCapitolo(selezionaCapitolo).subscribe((data) => {
        this.capitoloIntero = data.Capitolo;
        this.idVerso = data.Capitolo;
        this.visibilita = 'hidden';
      });
    }
  }

  funzioneIndietro() {
    window.location.reload();
  }
  funzioneErrore() {
    window.location.reload();
  }

  //idDefinitivo$ = new Subject<string>();

  // updates$ = this.idDefinitivo$.pipe(
  //   switchMap((x) => this._freeApiService.getCarattere(x)),
  //   map((data) => {
  //     this.varianti = data.Variants;
  //     this.note = data.Notes;
  //     this._freeApiService.interoDataGlobale = data;
  //     this.visibilita = 'hidden';
  //     if (this._freeApiService.nuovoNodo) {
  //       this.newNode = this._freeApiService.nuovoNodo;
  //       this.newLink = this._freeApiService.nuovoLink;
  //       data.Node = [...data.Node, this.newNode];
  //       data.Edge = [...data.Edge, this.newLink];
  //       return true;
  //     }

  //     this.nodes = data.Node;
  //     this.links = data.Edge;
  //     this._freeApiService.attiva = true;

  //     return false;
  //   })
  // );

  functionCarattere(idParola: any): void {
    this.visibilita = 'visible';

    this.idDefinitivo = idParola.substring(1);

    //this.idDefinitivo$.next(this.idDefinitivo);

    this._freeApiService.getCarattere(this.idDefinitivo).subscribe((data) => {
      this.varianti = data.Variants;
      this.note = data.Notes;
      this._freeApiService.interoDataGlobale = data;

      if (this._freeApiService.nuovoNodo) {
        this.newNode = this._freeApiService.nuovoNodo;
        this.newLink = this._freeApiService.nuovoLink;
        data.Node = [...data.Node, this.newNode];
        data.Edge = [...data.Edge, this.newLink];
      }
      if (this._freeApiService.eliminaNodo) {
        console.log(this._freeApiService.eliminaNodo);
        console.log(data.Node);
        delete data.Node[this._freeApiService.eliminaNodo];
        delete data.Edge[this._freeApiService.eliminaNodo];
      }
      this.nodes = data.Node;
      this.label = data.Node.label;

      this.links = data.Edge;
      this.update$.next(true);
      this._freeApiService.attiva = true;
      this.visibilita = 'hidden';
      console.log(data.Edge);

      console.log(this.nodes);

      // setTimeout(() => {
      //   console.log('Hello from setTimeout');
      //   this._creaGrafoComponent.funcProva(this.nodes, this.links);
      // }, 1000);

      // this._creaGrafoComponent.funcProva(this.nodes, this.links);
    });
  }

  addNode(
    labelInputText: string,
    inputDestination: number,
    coloreNodo: string
  ) {
    console.log(coloreNodo);

    const id = +this.nodes[this.nodes.length - 1].id + 1;

    this.nodes = [
      ...this.nodes,
      {
        id: `${id}`,
        label: `${labelInputText}`,
        data: { customColor: coloreNodo },
      },
    ];
    console.log(inputDestination);

    this.links = [
      ...this.links,
      {
        id: `e` + `${id}`,
        source: `${id}`,
        target: `${inputDestination}`,
        label: 'is brotherof',
      },
    ];
  }

  funzioneFrase(idVerso: string) {}
  funzioneMetrica(idVerso: string) {
    this.visibilita = 'visible';

    this.idDefinitivoVerso = idVerso.substring(1, 5);
    this.numeroVerso = idVerso.substring(6);
    console.log(this.idDefinitivoVerso);
    console.log(this.numeroVerso);

    this._freeApiService
      .getMetrica(this.idDefinitivoVerso, this.numeroVerso)
      .subscribe((data) => {
        this._freeApiService.interoDataGlobale = data;
        this.nodes = data.Node;
        this.links = data.Edge;
        this.scansione = data.Scansione;

        this.varianti = data.Variants;
        this.visibilita = 'hidden';
      });
  }
}
