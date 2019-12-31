import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { FooterComponent } from '@shared/layout/footer/footer.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CoreModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
