import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FotoComponent } from './components/foto/foto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';
  fotos: FotoComponent[] = []

  constructor(httpClient: HttpClient) {

    httpClient.get('http://localhost:3000/v1/fotos', { observe : 'response'})
    .subscribe((dados : HttpResponse<FotoComponent[]>) => {
      this.fotos = dados.body
    })
  }

}   
