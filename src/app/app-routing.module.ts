import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingsComponent} from './buildings/buildings.component';
import { GuardsComponent} from './guards/guards.component';
import { GuardComponent} from './guard/guard.component';
import { AppComponent} from './app.component';

const routes: Routes = [
{path: '', component:BuildingsComponent},
{path: 'buildings', component:BuildingsComponent},
{path: 'guards', component:GuardsComponent},
{path: 'guard', component:GuardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
