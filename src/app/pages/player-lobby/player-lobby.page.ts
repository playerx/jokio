import { Component, OnInit } from '@angular/core'
import { CommunitiesService } from 'src/app/services/communities.service'

@Component({
  selector: 'app-player-lobby',
  templateUrl: './player-lobby.page.html',
  styleUrls: ['./player-lobby.page.scss'],
})
export class PlayerLobbyPage implements OnInit {
  get allGames() {
    return this.communities.items.flatMap(x =>
      x.games.map(y => {
        ;(y as any).communityName = x.name

        return y
      })
    ) as any[]
  }

  constructor(public communities: CommunitiesService) {}

  ngOnInit() {}
}
