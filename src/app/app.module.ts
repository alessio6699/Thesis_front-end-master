import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SplitPipe } from './crea-grafo/split.pipe';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { CreaGrafoComponent } from './crea-grafo/crea-grafo.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContenitoreTestoPrimarioComponent } from './contenitore-testo-primario/contenitore-testo-primario.component';
import { ContenitoreInfoComponent } from './contenitore-info/contenitore-info.component';
import { AggiuntivoComponent } from './aggiuntivo/aggiuntivo.component';

// import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    CreaGrafoComponent,
    SplitPipe,
    ContenitoreTestoPrimarioComponent,
    ContenitoreInfoComponent,
    AggiuntivoComponent,
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    NgxGraphModule,

    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    freeApiService,
    CreaGrafoComponent,
    ContenitoreInfoComponent,
    ContenitoreTestoPrimarioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  public errore: boolean = true;
}
