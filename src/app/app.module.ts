import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SimpleComponent } from './pages/simple/simple.component';
import { FormsModule } from '@angular/forms';
import { SelectLiteComponent } from './components/select-lite/select-lite.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { SelectMultipleComponent } from './components/select-multiple/select-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SimpleComponent,
    SelectLiteComponent,
    SelectUserComponent,
    SelectMultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
