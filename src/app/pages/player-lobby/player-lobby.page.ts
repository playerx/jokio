import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
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

  constructor(
    private title: Title,
    private meta: Meta,
    public communities: CommunitiesService
  ) {}

  ngOnInit() {
    this.title.setTitle('Shop!')

    this.meta.addTag({
      name: 'og:title',
      content: '🛒 Shop',
    })
    this.meta.addTag({
      name: 'og:description',
      content: 'Find out cool items for your avatar and more!',
    })

    this.meta.addTag({
      name: 'og:image',
      content:
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/Shop.svg',
    })
  }
}
