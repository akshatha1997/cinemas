import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';
import {HttpClientModule} from '@angular/common/http';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule, MatFormFieldModule,MatPaginatorModule,
  MatInputModule,MatTooltipModule,MatSelectModule,MatSortModule,MatButtonModule,MatProgressBarModule } from '@angular/material' 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,  
   
  
    
   
    
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
   
    
  
  ],
  imports: [
    MatProgressBarModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSelectModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
