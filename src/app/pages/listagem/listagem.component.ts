import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../services/Foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title: string = 'Caelumpic Gallery';
  fotos: FotoComponent[] = []

  //private httpClient: HttpClient,

  constructor(private fotoService: FotoService) {
    
  }

  ngOnInit() {

    this.fotoService.lista()
                    .subscribe((dados : HttpResponse<FotoComponent[]>) => {
      this.fotos = dados.body
      console.log("Salvando foto...", this.fotos)
    })

  }

  removeFoto(idFoto: string) {
    this.fotoService
        .deleta(idFoto)
        .subscribe((foto) => {
          const fotosAtualizadas = this.fotos.filter(f => f._id !== idFoto)
          this.fotos = fotosAtualizadas
        });
  }

}
