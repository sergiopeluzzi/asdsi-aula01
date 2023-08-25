import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { ClientesServiceHttp } from "./services-http/clientes.service.http";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, ClientesComponent, HeaderComponent],
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
