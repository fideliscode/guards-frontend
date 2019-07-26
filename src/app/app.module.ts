import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardsComponent } from './guards/guards.component';
import { GuardComponent } from './guard/guard.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuildingComponent } from './building/building.component';
import { DutyComponent } from './duty/duty.component';
import { DutiesComponent } from './duties/duties.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule }   from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';


@NgModule({
  declarations: [
    AppComponent,
    GuardsComponent,
    GuardComponent,
    BuildingsComponent,
    BuildingComponent,
    DutyComponent,
    DutiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
     DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
