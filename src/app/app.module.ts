import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextMenusModule } from './main/context-menus/context-menus.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContextMenusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
