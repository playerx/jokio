import { Component, OnInit } from '@angular/core'
import { CommunitiesService } from 'src/app/services/communities.service'

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.page.html',
  styleUrls: ['./publishers.page.scss'],
})
export class PublishersPage implements OnInit {
  name: string = ''
  adminWalletsString: string = ''
  fee?: number

  constructor(public communities: CommunitiesService) {}

  ngOnInit() {}

  create() {
    if (!this.fee) {
      return
    }

    this.communities.items.push({
      id: Date.now().toString(),
      name: this.name,
      adminWallets: this.adminWalletsString
        .replace(/ /g, '')
        .split(','),
      fee: this.fee,
      games: [],
    })
  }
}
