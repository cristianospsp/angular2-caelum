import { roteamento } from './../../roteamento';
import { HttpResponse } from '@angular/common/http';
import { FotoService } from './../../services/Foto.service';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent

  constructor(private fotoService: FotoService, private rota: ActivatedRoute, private router: Router) {
    this.foto = new FotoComponent()
  }

  ngOnInit() {
    this.rota.params.subscribe((parametro) => {
      const idDaFoto = parametro.id
      console.log(idDaFoto)
      if (idDaFoto) {
        this.fotoService
          .findById(idDaFoto)
          .subscribe((response: HttpResponse<FotoComponent>) => {
            this.foto = response.body;
          });
      }
    });
  }

  cadastraFoto(event: Event) {
    event.preventDefault()

    if (!this.foto._id) {
      this.fotoService
      .salva(this.foto)
      .subscribe((response) => {
        console.log("Retorno... : ", response)
        this.foto = new FotoComponent()
        console.log("Foto - Incluida...", this.foto)
      });

    } else {
      this.fotoService
      .update(this.foto)
      .subscribe((response) => {
        this.router.navigate(['/'])
        console.log("Foto - Alterada...", this.foto)
      });

    }
  
    
  }

}
