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

    const existingAddress = localStorage.getItem('walletAddress')
    if (existingAddress) {
      this.user.walletAddress = existingAddress
      this.user.nickname = minimizeAddress(existingAddress)
    }

    switch (path) {
      case '/game-developer':
        this.selectedTab = 'game-developer'
        break

      case '/communities':
        this.selectedTab = 'communities'
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
        this.user.walletAddress = accounts[0]
        this.user.nickname = minimizeAddress(accounts[0])
        console.log('Connected to Metamask')
        console.log('Current account:', accounts[0])

        localStorage.setItem('walletAddress', accounts[0])
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

function minimizeAddress(address) {
  if (address.length !== 42) {
    throw new Error('Invalid Ethereum address length')
  }

  const prefix = address.slice(0, 6)
  const suffix = address.slice(38, 42)

  return prefix + '...' + suffix
}
