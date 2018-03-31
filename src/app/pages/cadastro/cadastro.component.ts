import { HttpResponse } from '@angular/common/http';
import { FotoService } from './../../services/Foto.service';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent

  constructor(private fotoService: FotoService, private rota: ActivatedRoute) {
    this.foto = new FotoComponent()
    rota.params.subscribe((parametro) => {
      const idDaFoto = parametro.id
      console.log(idDaFoto)
      this.fotoService
          .buscaById(idDaFoto)
          .subscribe((response : HttpResponse<FotoComponent>) => {
            this.foto = response.body;
          });
    });
  }

  ngOnInit() {
  }

  cadastraFoto(event: Event) {
    event.preventDefault()

    this.fotoService
      .salva(this.foto)
      .subscribe((response) => {
        console.log("Retorno... : ", response)
        this.foto = new FotoComponent()
      });

    console.log("Salvando foto...", this.foto)
  }

}
