import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { AvatarService } from '../../services/avatar.service'

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
})
export class MinimalLayout implements OnInit {
  selectedTab = 'lobby'

  hideSeparatorLine = true

  constructor(
    private location: Location,
    // public account: AccountService,
    public avatar: AvatarService
  ) {}

  ngOnInit() {
    const path = this.location.path(false)

    switch (path) {
      case '/home':
        this.selectedTab = 'home'
        break

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

  onUserSelect() {}

  async connect() {}
}
