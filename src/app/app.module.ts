import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotaoComponent } from './components/botao/botao.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, BotaoComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
