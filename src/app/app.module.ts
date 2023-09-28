import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotaoComponent } from './components/botao/botao.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    HeaderComponent,
    FormularioCadastroComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
