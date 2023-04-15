import { GqlAvatarConfig } from '@jok/graphql'
import { getSortedAvatarLayerIds } from './getSortedAvatarLayerIds'

export function getAvatarHash(config: GqlAvatarConfig) {
  return getSortedAvatarLayerIds(config).join('|')
}
