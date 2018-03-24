import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FotoModule } from './components/foto/foto.module'
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { CardModule } from './components/card/card.module';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    CabecalhoModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
