import { Injectable } from '@angular/core'

export type Game = {
  id: string
  name: string
  adminWallets: string[]
  price: number
  assetsCID: string
  isApproved: boolean
}

export type Community = {
  id: string
  name: string
  adminWallets: string[]
  fee: number
  games: Game[]
  users: string[]
}

@Injectable({ providedIn: 'root' })
export class CommunitiesService {
  items: Community[] = [
    {
      id: '1',
      name: 'Strategy Games',
      adminWallets: ['0x91d76d31080ca88339a4e506affb4ded4b192bcb'],
      fee: 2,
      users: ['0x91d76d31080ca88339a4e506affb4ded4b192bcb'],
      games: [
        {
          id: '1',
          name: 'Tik Tak Toe',
          adminWallets: [
            '0x91d76d31080ca88339a4e506affb4ded4b192bcb',
          ],
          price: 0,
          assetsCID: '',
          isApproved: false,
        },
        {
          id: '2',
          name: 'Battleship Online',
          adminWallets: [''],
          price: 10,
          assetsCID: '',
          isApproved: true,
        },
        {
          id: '3',
          name: 'Racing Cars',
          adminWallets: [
            '0x91d76d31080ca88339a4e506affb4ded4b192bcb',
          ],
          price: 11,
          assetsCID: '',
          isApproved: true,
        },
      ] as Game[],
    },
    {
      id: '4',
      name: 'Action Games',
      fee: 3,
      adminWallets: ['0x91d76d31080ca88339a4e506affb4ded4b192bcb'],
      games: [],
      users: [],
    },
  ]
}
