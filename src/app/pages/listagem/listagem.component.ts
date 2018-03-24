import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FotoComponent } from '../../components/foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title: string = 'Caelumpic Gallery';
  fotos: FotoComponent[] = []

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/v1/fotos', { observe : 'response'})
    .subscribe((dados : HttpResponse<FotoComponent[]>) => {
      this.fotos = dados.body
      console.log("Salvando foto...", this.fotos)
    })
  }

}
