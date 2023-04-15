import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { environment } from '../environments/environment'
import { MainLayout } from './layouts/main/main.component'
import { GameDevelopersPage } from './pages/game-developers/game-developers.page'
import { PlayerLobbyPage } from './pages/player-lobby/player-lobby.page'
import { PublisherPage } from './pages/publishers/publishers.page'
import { RoomPage } from './pages/room/room.page'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/game-developer' },

  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'game-developer',
        pathMatch: 'full',
        component: GameDevelopersPage,
      },
      { path: 'publisher', component: PublisherPage },
      { path: 'player-lobby', component: PlayerLobbyPage },
    ],
  },

  { path: 'room', component: RoomPage },
  // {
  //   path: '',
  //   component: MinimalLayout,
  //   children: [],
  // },

  { path: '**', redirectTo: '/game-developer' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.enableHashBasedNavigation,
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
