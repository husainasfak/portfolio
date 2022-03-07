
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './projects/details/details.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,

  },
  {
    path:'projects',
    component:ProjectsComponent,
    data:{animation:'projects'},
    
  },
  {
    path:'projects/:id',
    component:DetailsComponent     
  },
  {
    path:'contact',
    component:ContactComponent,
    data:{animation:'contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
