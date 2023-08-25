import { Component, OnInit } from "@angular/core";
import { ICliente } from "../../models/cliente.model";
import { ClientesServiceHttp } from "src/app/services-http/clientes.service.http";

const clientes: ICliente[] = [
    {
        nome: "João",
        email: "",
        telefone: "",
        cpf: "",
        dataNascimento: new Date(),
        endereco: "",
        cidade: "",
        estado: "",
        cep: "",
        dataCadastro: new Date(),
    },
    {
        nome: "Maria",
        email: "",
        telefone: "",
        cpf: "",
        dataNascimento: new Date(),
        endereco: "",
        cidade: "",
        estado: "",
        cep: "",
        dataCadastro: new Date(),
    },
];

@Component({
    selector: "app-clientes",
    templateUrl: "./clientes.component.html",
    styleUrls: ["./clientes.component.css"],
})
export class ClientesComponent {
    dataSource: ICliente[] = clientes;
}
