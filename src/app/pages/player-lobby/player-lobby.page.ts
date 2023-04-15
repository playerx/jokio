import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-player-lobby',
  templateUrl: './player-lobby.page.html',
  styleUrls: ['./player-lobby.page.scss'],
})
export class PlayerLobbyPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

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
