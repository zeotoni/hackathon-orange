import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContainerComponent } from './shared/components/container/container.component';
import { CardComponent } from './shared/components/card/card.component';
import { FormComponent } from './shared/components/form/form.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    CardComponent,
    FormComponent,
    ButtonComponent,
    HomeComponent,
    AddEventComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
