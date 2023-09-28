import { Component } from "@angular/core";

@Component({
    selector: "app-formulario-cadastro",
    templateUrl: "./formulario-cadastro.component.html",
    styleUrls: ["./formulario-cadastro.component.css"],
})
export class FormularioCadastroComponent {
    pessoa: any = {};

    cadastrarPessoa = () => {
        console.log(this.pessoa);
        this.pessoa = {};
    };

    ngOnInit() {}
}
