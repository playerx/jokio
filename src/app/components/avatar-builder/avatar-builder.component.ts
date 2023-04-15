import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { IonSegment } from '@ionic/angular'
import { GqlAvatarConfig, GqlAvatarLayer } from '@jok/graphql'
import { getAvatarConfigFromLayerIds } from 'src/app/domain/getAvatarConfigFromLayers'
import { getSortedAvatarLayerIds } from 'src/app/domain/getSortedAvatarLayerIds'
import {
  AvatarBuilderTabs,
  AvatarCollectionGroup,
  AvatarItemType,
} from '../../domain/avatar.types'

@Component({
  selector: 'app-avatar-builder',
  templateUrl: './avatar-builder.component.html',
  styleUrls: ['./avatar-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarBuilderComponent implements OnInit, AfterViewInit {
  @Input()
  config!: GqlAvatarConfig

  @Input()
  selectedTab = AvatarBuilderTabs.SKIN

  @Input()
  data: Map<AvatarItemType, AvatarCollectionGroup> = new Map()

  @Input()
  allItems: GqlAvatarLayer[] = []

  @Input()
  isSaved = () => false

  @Output()
  selectedTabChange = new EventEmitter<AvatarBuilderTabs>()

  @Output()
  avatarChange = new EventEmitter<GqlAvatarConfig>()

  @Output()
  closeClick = new EventEmitter<void>()

  @Output()
  saveClick = new EventEmitter<GqlAvatarConfig>()

  @Output()
  undoClick = new EventEmitter()

  @Output()
  shareClick = new EventEmitter()

  @Output()
  downloadClick = new EventEmitter()

  @ViewChild(IonSegment, { read: ElementRef })
  ionSegment!: ElementRef

  menuItems: MenuItem[] = []

  selectedItems: GqlAvatarLayer[] = []

  isMenuLoaded = false

  get selectedCollectionGroups() {
    const menuItem = this.menuItems.find(
      x => x.tab === this.selectedTab
    )

    return <AvatarCollectionGroup[]>(
      (
        menuItem?.avatarLayerTypes.map(x => this.data.get(x)) ?? []
      ).filter(x => !!x)
    )
  }

  constructor(private hostElement: ElementRef) {}

  ngOnInit() {
    this.menuItems = [
      {
        tab: AvatarBuilderTabs.SKIN,
        title: 'Skin',
        avatarLayerTypes: [AvatarItemType.SKIN],
      },
      {
        tab: AvatarBuilderTabs.HAIR,
        title: 'Hair',
        avatarLayerTypes: [
          AvatarItemType.HAIR,
          AvatarItemType.FACIAL_HAIR,
        ],
      },
      {
        tab: AvatarBuilderTabs.EYES,
        title: 'Eyes',
        avatarLayerTypes: [
          AvatarItemType.EYES,
          AvatarItemType.EYEBROWS,
        ],
      },
      {
        tab: AvatarBuilderTabs.MOUTH,
        title: 'Mouth',
        avatarLayerTypes: [AvatarItemType.MOUTH],
      },
      {
        tab: AvatarBuilderTabs.CLOTHES,
        title: 'Clothes',
        avatarLayerTypes: [AvatarItemType.CLOTHES],
      },
      {
        tab: AvatarBuilderTabs.ACCESSORIES,
        title: 'Accessories',
        avatarLayerTypes: [AvatarItemType.ACCESSORIES],
      },
    ]

    const layerIds = this.config
      ? getSortedAvatarLayerIds(this.config)
      : []

    this.selectedItems = this.allItems.filter(x =>
      layerIds.includes(x.id)
    )
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollMenu()
      this.isMenuLoaded = true
    }, 100)

    setTimeout(() => {
      this.scrollMenu()
    }, 300)
  }

  onTabChange(e: any) {
    this.selectedTab = e.detail.value

    this.selectedTabChange.emit(this.selectedTab)

    this.scrollMenu()
  }

  scrollMenu() {
    if (!this.hostElement.nativeElement || !this.ionSegment) {
      return
    }

    const leftOffset =
      385 - this.hostElement.nativeElement.clientWidth / 2 + 95 / 2

    const itemOffset =
      leftOffset +
      this.menuItems.findIndex(x => x.tab === this.selectedTab) * 95

    this.ionSegment.nativeElement.scroll(itemOffset, 0)
  }

  selectItem(item: GqlAvatarLayer) {
    this.selectedItems = this.selectedItems.filter(
      x => x.type2 !== item.type2
    )
    this.selectedItems.push(item)

    this.config = getAvatarConfigFromLayerIds(this.selectedItems)

    this.avatarChange.emit(this.config)
  }

  save() {
    this.saveClick.emit(this.config)
  }

  undo() {
    this.undoClick.emit()
  }

  close() {
    this.closeClick.emit()
  }

  share() {
    this.shareClick.emit()
  }

  download() {
    this.downloadClick.emit()
  }

  // helper methods
  isSelected(item: GqlAvatarLayer) {
    return !!this.selectedItems.find(x => x.id === item.id)
  }

  getBackgroundImage(item: GqlAvatarLayer) {
    return `url('${item.imageUrl}')`
  }
}

type MenuItem = {
  tab: AvatarBuilderTabs
  title: string
  avatarLayerTypes: AvatarItemType[]
}
