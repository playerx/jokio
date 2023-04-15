import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CommunitiesService } from 'src/app/services/communities.service'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-game-developers',
  templateUrl: './game-developers.page.html',
  styleUrls: ['./game-developers.page.scss'],
})
export class GameDevelopersPage implements OnInit {
  communityId: string = ''
  name: string = ''
  adminWalletsString: string = ''
  price?: number
  assetsCID: string = ''

  get myGames() {
    return this.communities.items
      .flatMap(x =>
        x.games.map(y => {
          ;(y as any).communityName = x.name

          return y
        })
      )
      .filter(x =>
        x.adminWallets.includes(this.user.walletAddress)
      ) as any[]
  }

  constructor(
    private router: Router,
    public communities: CommunitiesService,
    private user: UserService
  ) {}

  ngOnInit() {}

  goToRooms() {
    console.log('nav')
    this.router.navigate(['/room'])
  }

  create() {
    const community = this.communities.items.find(
      x => x.id === this.communityId
    )
    if (!community) {
      return
    }

    community.games.push({
      id: Date.now().toString(),
      name: this.name,
      adminWallets: [this.user.walletAddress],
      price: this.price!,
      assetsCID: this.assetsCID,
      isApproved: false,
    })
  }
}
