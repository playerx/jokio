import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/services/user.service'
import { AvatarService } from '../../services/avatar.service'

declare var window: any

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainLayout implements OnInit {
  selectedTab = 'game-developer'

  hideSeparatorLine = true

  constructor(
    private location: Location,
    // public account: AccountService,
    public avatar: AvatarService,
    public user: UserService
  ) {}

  ngOnInit() {
    const path = this.location.path(false)

    switch (path) {
      case '/game-developer':
        this.selectedTab = 'game-developer'
        break

      case '/publisher':
        this.selectedTab = 'publisher'
        break

      case '/player-lobby':
        this.selectedTab = 'player-lobby'
        break
    }
  }

  onTabChange(e: any) {
    this.selectedTab = e.detail.value
  }

  onScroll(e: any) {
    this.hideSeparatorLine = e.detail.currentY <= 2
  }

  async onUserSelect() {
    // Detect whether Metamask is installed
    if (typeof window.ethereum !== 'undefined') {
      console.log('Metamask is installed')
    }

    // Connect to Metamask
    await window.ethereum.send('wallet_requestPermissions', [
      { eth_accounts: {} },
    ])

    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        console.log('Connected to Metamask')
        console.log('Current account:', accounts[0])
      })
      .catch(error => {
        console.error(error)
      })
  }

  async openAvatarBuilder() {
    const newConfig = await this.avatar.openAvatarBuilder(
      this.user.avatarConfig
    )

    if (newConfig) {
      this.user.avatarConfig = newConfig
    }
  }
}
