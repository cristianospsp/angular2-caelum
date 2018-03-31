import { FotoService } from './../../services/Foto.service';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent
  
  constructor(private fotoService: FotoService) { 
    this.foto = new FotoComponent()
  }

  ngOnInit() {
  }

  cadastraFoto(event : Event) {
    event.preventDefault()

    this.fotoService.salva(this.foto)
                    .subscribe((response) => {
                      console.log("Retorno... : ", response)  
                      this.foto = new FotoComponent()    
                    });
      
    console.log("Salvando foto...", this.foto)
  }

}
