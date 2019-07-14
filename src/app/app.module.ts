import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,RouterModule.forRoot([
    {
      path:'',
      component:AppComponent
      },
      {
      path:'result',
      component:ResultComponent
      }




    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
