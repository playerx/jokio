import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.page.html',
  styleUrls: ['./publishers.page.scss'],
})
export class PublisherPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Quests!')
    this.meta.addTag({
      name: 'og:title',
      content: '😎 Quests!',
    })
    this.meta.addTag({
      name: 'og:description',
      content: 'Complete quests and get tokens!',
    })

    this.meta.addTag({
      name: 'og:image',
      content: 'https://i.ytimg.com/vi/e7VEe_qW4oE/maxresdefault.jpg',
    })
  }
}
