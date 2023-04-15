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

    const adminWalletAddressList = this.adminWalletsString
      .replace(/ /g, '')
      .split(',')

    this.communities.items.push({
      id: Date.now().toString(),
      users: adminWalletAddressList,
      name: this.name,
      adminWallets: adminWalletAddressList,
      fee: this.fee,
      games: [],
    })
  }
}
