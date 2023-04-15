import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CommunitiesService } from 'src/app/services/communities.service'

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.page.html',
  styleUrls: ['./publisher.page.scss'],
})
export class PublisherPage implements OnInit {
  pendingGames: any[] = []
  approvedGames: any[] = []
  adminWallets: string = ''
  fee?: number
  communityName = ''
  community = null

  constructor(
    private route: ActivatedRoute,
    public communities: CommunitiesService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(p => {
      const searchId = p.get('id') ?? this.communities.items[0]?.id

      const community = this.communities.items.find(
        x => x.id === searchId
      )

      this.communityName =
        this.communities.items.find(x => x.id === searchId)?.name ??
        ''

      this.pendingGames =
        community?.games?.filter(x => !x.isApproved) ?? []
      this.approvedGames =
        community?.games?.filter(x => x.isApproved) ?? []
      this.adminWallets = community?.adminWallets?.join(', ') ?? ''
      this.fee = community?.fee
    })
  }
}
