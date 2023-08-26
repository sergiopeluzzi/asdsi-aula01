import { Component, OnInit } from "@angular/core";
import { ICliente } from "../../models/cliente.model";
import { ClientesServiceHttp } from "src/app/services-http/clientes.service.http";
import { Observable, of } from "rxjs";

@Component({
    selector: "app-clientes",
    templateUrl: "./clientes.component.html",
    styleUrls: ["./clientes.component.css"],
})
export class ClientesComponent implements OnInit {
    constructor(private clientesServiceHttp: ClientesServiceHttp) {}

    clientes: Observable<ICliente[]> = new Observable<ICliente[]>();

    ngOnInit(): void {
        this.clientesServiceHttp.getClientes().subscribe((data) => {
            console.log(data);
            this.clientes = of(data);
        });
    }
}
