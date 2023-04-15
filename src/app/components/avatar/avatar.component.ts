import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { GqlAvatarConfig } from '@jok/graphql'
import { getSortedAvatarLayerIds } from 'src/app/domain/getSortedAvatarLayerIds'
import { AvatarService } from 'src/app/services/avatar.service'

@Component({
  selector: 'jok-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnChanges {
  @Input()
  config?: GqlAvatarConfig

  @Input()
  layerIds?: string[]

  layerUrls: string[] = []

  constructor(private avatar: AvatarService) {}

  ngOnChanges(changes: SimpleChanges): void {
    let layerIds = this.layerIds ?? []
    const config = changes['config']?.currentValue

    if (config) {
      layerIds = getSortedAvatarLayerIds(config)
    }

    this.layerUrls = layerIds
      .map(x => this.avatar.allItems.find(y => y.id === x)?.imageUrl)
      .filter(x => x) as string[]
  }
}
