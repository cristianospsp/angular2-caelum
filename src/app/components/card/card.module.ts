import { CardComponent } from './card.component';
import { FiltraPorTituloPipe } from './filtraPorTitulo.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports : [
        CommonModule
    ],
    exports : [CardComponent, FiltraPorTituloPipe],
    declarations : [CardComponent, FiltraPorTituloPipe]
})
export class CardModule { }