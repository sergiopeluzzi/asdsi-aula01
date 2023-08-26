import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ICliente } from "../models/cliente.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ClientesServiceHttp {
    apiUrl = "http://localhost:3000/clientes";

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    getClientes(): Observable<ICliente[]> {
        return this.http.get<ICliente[]>(this.apiUrl);
    }
}
