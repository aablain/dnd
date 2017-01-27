import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [   {
    path: '',
    component: PlayerListComponent
  },
  {
    path: 'player/:id',
    component: PlayerComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
