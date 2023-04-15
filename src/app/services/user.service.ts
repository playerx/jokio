import { Injectable } from '@angular/core'
import { GqlAvatarConfig } from '@jok/graphql'
import { DEFAULT_AVATAR_CONFIG } from './avatar.service'

@Injectable({ providedIn: 'root' })
export class UserService {
  userId: string = Date.now().toString()
  nickname: string = 'Guest'
  avatarConfig: GqlAvatarConfig = DEFAULT_AVATAR_CONFIG

  init() {}
}
