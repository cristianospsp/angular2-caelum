import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltraPorTituloPipe implements PipeTransform{
    
    transform(fotos: any, inputDoUsuario) {
        return fotos.filter((foto) => {
            if (foto.titulo) {
            return foto.titulo.toLowerCase().includes(inputDoUsuario.toLowerCase())
            }
            return true
        })
        
    }

}