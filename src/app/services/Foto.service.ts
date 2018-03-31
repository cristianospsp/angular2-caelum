import { FotoComponent } from './../components/foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FotoService {

    constructor(private httpClient: HttpClient) { }

    lista(): Observable<Object> {
        return this
                    .httpClient
                    .get('http://localhost:3000/v1/fotos', { observe : 'response'})
    }

    salva(foto: FotoComponent): Observable<any> {
        return this.httpClient
            .post('http://localhost:3000/v1/fotos', 
                JSON.stringify(foto),
                {
                    headers : new HttpHeaders({'Content-type' : 'application/json'})
                })
    }

}