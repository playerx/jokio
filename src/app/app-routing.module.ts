import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { environment } from '../environments/environment'
import { MainLayout } from './layouts/main/main.component'
import { GameDevelopersPage } from './pages/game-developers/game-developers.page'
import { HomePage } from './pages/home/home.page'
import { PlayerLobbyPage } from './pages/player-lobby/player-lobby.page'
import { PublisherPage } from './pages/publisher/publisher.page'
import { PublishersPage } from './pages/publishers/publishers.page'
import { RoomPage } from './pages/room/room.page'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'game-developer',
        pathMatch: 'full',
        component: GameDevelopersPage,
      },
      { path: 'communities', component: PublishersPage },
      { path: 'player-lobby', component: PlayerLobbyPage },
      { path: 'home', component: HomePage },
    ],
  },

  { path: 'publisher/:id', component: PublisherPage },
  { path: 'room', component: RoomPage },

  { path: '**', redirectTo: '/home' },
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
