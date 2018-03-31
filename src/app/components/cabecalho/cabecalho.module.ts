import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { CabecalhoComponent } from './cabecalho.component'

@NgModule({
    imports: [ RouterModule ],
    declarations: [ CabecalhoComponent ],
    exports: [ CabecalhoComponent ] 
})
export class CabecalhoModule {

}