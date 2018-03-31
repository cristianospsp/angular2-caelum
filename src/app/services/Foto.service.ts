import { FotoComponent } from './../components/foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FotoService {

    constructor(private httpClient: HttpClient) { }

    cabecalho : HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
    
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
                    headers: this.cabecalho
                });
    }

    deleta(idFoto: string): Observable<Object> {
        return this.httpClient.delete(`${this.URL}/${idFoto}`, { observe: 'response' })
    }

    findById(idFoto: string): Observable<any> {
        return this
            .httpClient
            .get(`${this.URL}/${idFoto}`, { observe: 'response' });
    }

    update(foto): Observable<any> {
        return this
            .httpClient
            .put(`${this.URL}/${foto._id}`, JSON.stringify(foto),
            {
                headers: this.cabecalho
            });
    }


    
}