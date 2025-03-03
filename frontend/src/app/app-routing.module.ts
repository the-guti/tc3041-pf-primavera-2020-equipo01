import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCasesComponent } from './cases/all-cases/all-cases.component';
import { FormCasesComponent } from './cases/form-cases/form-cases.component';
import { AllBusinessesComponent } from './businesses/all-businesses/all-businesses.component';
import { FormBusinessesComponent } from './businesses/form-businesses/form-businesses.component';
import { AllLocationsComponent } from './locations/all-locations/all-locations.component';
import { FormLocationsComponent } from './locations/form-locations/form-locations.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { MapComponent } from './map/map.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import { QrComponent } from './qr/qr.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "map", component: MapComponent, canActivate: [AuthGuard] },
  {path: "qr", component: QrComponent, canActivate: [AuthGuard] },
  {path: "chart", component: ChartsComponent, canActivate: [AuthGuard] },
  {path: "cases", component: AllCasesComponent , canActivate: [AuthGuard] },
  {path: "cases/add", component: FormCasesComponent , canActivate: [AuthGuard] },
  {path: "cases/edit/:id", component: FormCasesComponent , canActivate: [AuthGuard] },
  {path: "businesses", component: AllBusinessesComponent , canActivate: [AuthGuard] },
  {path: "businesses/add", component: FormBusinessesComponent , canActivate: [AuthGuard] },
  {path: "businesses/edit/:id", component: FormBusinessesComponent , canActivate: [AuthGuard] },
  {path: "locations", component: AllLocationsComponent , canActivate: [AuthGuard] },
  {path: "locations/add", component: FormLocationsComponent , canActivate: [AuthGuard] },
  {path: "locations/edit/:id", component: FormLocationsComponent , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
