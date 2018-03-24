import { NgModule } from '@angular/core'
import { CabecalhoComponent } from './cabecalho.component'
import { roteamento } from '../../roteamento';


@NgModule({
    imports: [ roteamento ],
    declarations: [ CabecalhoComponent ],
    exports: [ CabecalhoComponent ] 
})
export class CabecalhoModule {

}