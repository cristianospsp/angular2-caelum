import { Component, Input } from "@angular/core";

@Component({
    selector: 'cabecalho',
    templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent {
   @Input() titulo
}