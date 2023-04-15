import { Location } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'
import { ServiceWorkerModule } from '@angular/service-worker'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AvatarBuilderComponent } from './components/avatar-builder/avatar-builder.component'
import { AvatarComponent } from './components/avatar/avatar.component'
import { AppComponent } from './layouts/app/app.component'
import { MainLayout } from './layouts/main/main.component'
import { MinimalLayout } from './layouts/minimal/minimal.component'
import { GameDevelopersPage } from './pages/game-developers/game-developers.page'
import { HomePage } from './pages/home/home.page'
import { PlayerLobbyPage } from './pages/player-lobby/player-lobby.page'
import { PublisherPage } from './pages/publisher/publisher.page'
import { PublishersPage } from './pages/publishers/publishers.page'
import { RoomPage } from './pages/room/room.page'
import { AvatarService } from './services/avatar.service'

@NgModule({
  declarations: [
    AppComponent,
    MainLayout,
    MinimalLayout,
    AvatarComponent,
    AvatarBuilderComponent,
    GameDevelopersPage,
    PlayerLobbyPage,
    PublishersPage,
    PublisherPage,
    HomePage,
    RoomPage,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'serverApp',
    }),
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot({ mode: 'ios' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    Location,
    AvatarService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
