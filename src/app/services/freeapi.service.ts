import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { comments } from '../classes/comments';
import { CreaGrafoComponent } from '../crea-grafo/crea-grafo.component';
import { observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class freeApiService {
  public granularitaGlobale!: string;
  public interoDataGlobale!: any;
  public variabile3!: any;
  public nuovoNodo!: any;
  public nuovoLink!: any;
  public eliminaNodo!: any;
  public attiva!: boolean;
  private subject = new Subject<any>();
  constructor(private httpclient: HttpClient) {}
  indirizzoCarattere = '';
  indirizzoParola = '';

  // getcomments(
  //   parametro1: string,

  //   parametro2: string,
  //   // ho provato ad aggiungere un parametro che di default è false, e funziona però al momento non serve a niente
  //   prova = false
  // ): Observable<any> {
  //   // se la granularità è parole ed è inserito anche il verso allora crea il grafico
  //   if (parametro2 == 'parole') {
  //     if (parametro1 && parametro2) {
  //       var indirizzo = 'http://localhost:3000/d001/' + parametro1;
  //       return this.httpclient.get(indirizzo);
  //     }
  //   }
  //   // come prima ma qui la granularità è carattere
  //   if (parametro2 == 'carattere') {
  //     if (parametro1 && parametro2) {
  //       var indirizzo = 'http://localhost:3000/d001/' + parametro1;
  //       console.log('stampo indirizzo del carattere' + indirizzo);
  //       return this.httpclient.get(indirizzo);
  //     }
  //   }
  //   // return che non serve a nulla, però se manca da errore perchè nel caso in cui non entriamo in nessun if abbiamo comunque bisogno di un return
  //   return this.httpclient.get('http://localhost:3000/d001/1');
  // }
  // getParola(parolaSelected: string, parametro1: string): Observable<any> {
  //   var indirizzoParola =
  //     'http://localhost:3000/' +
  //     'd001' +
  //     '/' +
  //     parametro1 +
  //     '/' +
  //     parolaSelected;
  //   console.log(indirizzoParola);

  //   return this.httpclient.get(indirizzoParola);
  // }

  // getcommentsbyparameter(): Observable<any> {
  //   let params1 = new HttpParams().set('userId', '1');
  //   return this.httpclient.get(
  //     'https://jsonplaceholder.typicode.com/comments',
  //     {
  //       params: params1,
  //     }
  //   );
  // }
  // getData(): Observable<any> {
  //   return this.httpclient.get('http://localhost:3000', {
  //     responseType: 'text',
  //   });
  // }

  // getVerso(): Observable<any> {
  //   return this.httpclient.get('http://localhost:3000/d001/1', {
  //     responseType: 'text',
  //   });
  // }
  // getAlbums(): Observable<any> {
  //   return this.httpclient.get('http://localhost:3000/d001/1');
  // }
  // getPhotosForSelectedAlbumByParameter(selectedVerso: string): Observable<any> {
  //   let params2 = new HttpParams().set('id', selectedVerso);
  //   return this.httpclient.get('http://localhost:3000/d001/' + selectedVerso, {
  //     responseType: 'text',
  //   });
  // }

  getCapitolo(prova: number): Observable<any> {
    return this.httpclient.get('http://localhost:3000/app/d' + prova);
  }

  getCarattere(idParola: any): Observable<any> {
    return this.httpclient.get('http://localhost:3000/app/ids/' + idParola);
  }
  getParole(idParolaV: any): Observable<any> {
    return this.httpclient.get('http://localhost:3000/app/' + idParolaV);
  }
  getVerso(idV: string): Observable<any> {
    return this.httpclient.get('http://localhost:3000/txt/' + idV);
  }

  getMetrica(idDefinitivoVerso: string, numeroVerso: string): Observable<any> {
    return this.httpclient.get(
      'http://localhost:3000/app/scan/' + idDefinitivoVerso + '/' + numeroVerso
    );
  }
}
