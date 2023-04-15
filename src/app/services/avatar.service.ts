import { EventEmitter, Injectable } from '@angular/core'
import { ModalController, ToastController } from '@ionic/angular'
import { GqlAvatarConfig, GqlAvatarLayer } from '@jok/graphql'
import { AvatarBuilderComponent } from '../components/avatar-builder/avatar-builder.component'
import { commonAvatarLayers } from '../data/commonAvatarLayers.data'
import {
  AvatarBuilderTabs,
  AvatarCollectionGroup,
  AvatarItemType,
} from '../domain/avatar.types'
import { getAvatarHash } from '../domain/getAvatarHash'

export const DEFAULT_AVATAR_CONFIG = <GqlAvatarConfig>{
  skinId: 'common/skin_1b',
  clothesId: 'common/clothes_22',
  hairId: 'common/hair_2',
  eyesId: 'common/eyes_1',
  mouthId: 'common/mouth_2',
  tatoos: [],
  tattoos: [],
  accessories: [],
}

@Injectable()
export class AvatarService {
  data: Map<AvatarItemType, AvatarCollectionGroup> = new Map()
  allItems: GqlAvatarLayer[] = []
  isDraft = false

  constructor(
    private modal: ModalController,
    private toast: ToastController
  ) {
    this.loadData()
  }

  getDefaultAvatarConfig(userId?: string) {
    const defaultAvatarConfig = userId
      ? getDefaultAvatarKeysByAddress(userId)
      : DEFAULT_AVATAR_CONFIG

    return defaultAvatarConfig
  }

  async openAvatarBuilder(
    config: GqlAvatarConfig
  ): Promise<GqlAvatarConfig | null> {
    return new Promise(async resolve => {
      const currentConfigHash = getAvatarHash(config)

      const onTabChange = new EventEmitter()
      onTabChange.subscribe(x => {
        localStorage.setItem('jok.builderTab', x)
      })

      const onAvatarChange = new EventEmitter<GqlAvatarConfig>()
      onAvatarChange.subscribe(newConfig => {
        const newHash = getAvatarHash(newConfig)

        isSaved = newHash === currentConfigHash
      })

      const onClose = new EventEmitter<GqlAvatarConfig>()
      onClose.subscribe(() => modalView.dismiss())

      const onSave = new EventEmitter<GqlAvatarConfig>()
      onSave.subscribe(async config => {
        try {
          const isSuccess = !!config

          if (isSuccess) {
            isSaved = true
            const toastView = await this.toast.create({
              message: 'Saved Successfully!',
              position: 'top',
              duration: 2000,
              color: 'light',
            })

            toastView.onclick = () => toastView.dismiss()
            toastView.present()

            modalView.dismiss()
            resolve(config)
          } else {
            resolve(null)
          }
        } catch (err) {
          console.error(err)
        }
      })

      const onUndo = new EventEmitter<GqlAvatarConfig>()
      onUndo.subscribe(async () => {
        resolve(null)
        modalView.dismiss()
      })

      const onShare = new EventEmitter()
      onShare.subscribe(async () => {
        // shareLink(
        //   this.toast,
        //   ' #web3 #avatar',
        //   `${environment.avatarServiceUrl}/image/${address}.png`
        // )
      })

      const onDownload = new EventEmitter()
      onDownload.subscribe(() => {
        // const data = localStorage.getItem('image.' + address)
        // var a = document.createElement('a')
        // a.href = data!
        // a.download = `${address}.png`
        // a.click()
      })

      const selectedTab =
        localStorage.getItem('jok.builderTab') ??
        AvatarBuilderTabs.SKIN

      let isSaved = true

      const modalView = await this.modal.create({
        component: AvatarBuilderComponent,
        componentProps: {
          config,
          selectedTab,
          data: this.data,
          allItems: this.allItems,
          isSaved: () => isSaved,
          selectedTabChange: onTabChange,
          avatarChange: onAvatarChange,
          closeClick: onClose,
          saveClick: onSave,
          undoClick: onUndo,
          shareClick: onShare,
          downloadClick: onDownload,
        },
      })

      modalView.present()
    })
  }

  private async signAndSave(address: string, keys: string[]) {
    // const provider = new ethers.providers.Web3Provider(
    //   (window as any).ethereum,
    // )

    // const signer = provider.getSigner()

    // const message = [address, ...keys].join('\n')

    // const signature = await signer.signMessage(message)

    // // const signerAddr = await ethers.utils.verifyMessage(
    // //   message,
    // //   signature,
    // // )

    // const result = await fetch(
    //   `${environment.avatarServiceUrl}/config`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       address,
    //       keys,
    //       signature,
    //     }),
    //   },
    // )

    // if (result.status === 200) {
    //   localStorage.setItem(
    //     'savedConfig.' + address,
    //     keys.slice().sort().join(','),
    //   )

    //   return true
    // }

    return true
  }

  private loadData() {
    this.data.clear()

    this.loadCommonItems()

    this.allItems = [...this.data.values()].flatMap(x =>
      x.collections.flatMap(y => y.items)
    )
  }

  private loadCommonItems() {
    this.data.set(AvatarItemType.SKIN, {
      name: 'Skin',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.skin.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'SKIN',
                seasonCode: 'COMMON',
                id: `common/skin_${x[0]}`,
                imageUrl: x[1],
              }
          ),
        },
      ],
    })

    this.data.set(AvatarItemType.HAIR, {
      name: 'Hair',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.hair.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'HAIR',
                seasonCode: 'COMMON',
                id: `common/hair_${x[0]}`,
                imageUrl: x[1],
              }
          ),
        },
      ],
    })

    this.data.set(AvatarItemType.FACIAL_HAIR, {
      name: 'Facial Hair',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.facialHair.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'FACIAL_HAIR',
                seasonCode: 'COMMON',
                id: `common/facialHair_${x[0]}`,
                imageUrl: x[1],
              }
          ),
        },
      ],
    })

    this.data.set(AvatarItemType.EYES, {
      name: 'Eyes',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.eyes.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'EYES',
                seasonCode: 'COMMON',
                id: `common/eyes_${x[0]}`,
                imageUrl: x[1],
              }
          ),
        },
      ],
    })

    this.data.set(AvatarItemType.EYEBROWS, {
      name: 'Eyebrows',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.eyebrows.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'EYEBROWS',
                seasonCode: 'COMMON',
                id: `common/eyebrows_${x[0]}`,
                imageUrl: x[1],
              }
          ),
        },
      ],
    })

    this.data.set(AvatarItemType.MOUTH, {
      name: 'Mouth',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.mouth.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'MOUTH',
                seasonCode: 'COMMON',
                id: `common/mouth_${x[0]}`,
                imageUrl: x[1],
              }
          ),
        },
      ],
    })

    this.data.set(AvatarItemType.CLOTHES, {
      name: 'Clothes',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.clothes.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'CLOTHES',
                seasonCode: 'COMMON',
                id: `common/clothes_${x[0]}`,
                imageUrl: x[1],
              }
          ),
        },
      ],
    })

    this.data.set(AvatarItemType.ACCESSORIES, {
      name: 'Accessories',
      collections: [
        {
          name: '',
          items: commonAvatarLayers.accessories.map(
            x =>
              <GqlAvatarLayer>{
                type2: 'ACCESSORY',
                id: `common/accessories_${x[0]}`,
                imageUrl: x[1],
                count: 1,
                isTakable: false,
                seasonCode: 'COMMON',
              }
          ),
        },
      ],
    })
  }
}

function getDefaultAvatarKeysByAddress(
  address: string
): GqlAvatarConfig {
  let addressNumber = parseInt(address.slice(2), 16)

  const eyesOptions = [
    'common/eyes_1',
    'common/eyes_2',
    'common/eyes_3',
    'common/eyes_4',
    'common/eyes_5',
    'common/eyes_6',
    'common/eyes_7',
    'common/eyes_8',
  ]

  const hairOptions = [
    'common/hair_2',
    'common/hair_4',
    'common/hair_7',
  ]

  const mouthOptions = [
    'common/mouth_2',
    'common/mouth_5',
    'common/mouth_6',
    'common/mouth_9',
    'common/mouth_12',
    'common/mouth_13',
    'common/mouth_15',
  ]

  const eyesKey = eyesOptions[addressNumber % eyesOptions.length]

  addressNumber = Math.round(addressNumber / 10000)
  const hairKey = hairOptions[addressNumber % hairOptions.length]

  addressNumber = Math.round(addressNumber / 10000)
  const mouthKey = mouthOptions[addressNumber % mouthOptions.length]

  return <GqlAvatarConfig>{
    skinId: 'common/skin_1b',
    clothesId: 'common/clothes_22',
    hairId: hairKey,
    eyesId: eyesKey,
    mouthId: mouthKey,
    tatoos: [],
    tattoos: [],
    accessories: [],
  }
}
