import { FotoComponent } from './../components/foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FotoService {

    constructor(private httpClient: HttpClient) { }

    URL: string = 'http://localhost:3000/v1/fotos';

    lista(): Observable<Object> {
        return this
            .httpClient
            .get(this.URL, { observe: 'response' })
    }

    salva(foto: FotoComponent): Observable<Object> {
        return this.httpClient
            .post(this.URL,
                JSON.stringify(foto),
                {
                    headers: new HttpHeaders({ 'Content-type': 'application/json' })
                })
    }

    deleta(idFoto: string): Observable<Object> {
        return this.httpClient.delete(`${this.URL}/${idFoto}`, { observe: 'response' })
    }

    buscaById(idFoto: string): Observable<any> {
        return this
            .httpClient
            .get(`${this.URL}/${idFoto}`, { observe: 'response' });
    }

}