import { GqlAvatarConfig } from '@jok/graphql'

export function getSortedAvatarLayerIds(
  avatarConfig: GqlAvatarConfig,
  onlyBasic = false
) {
  // THE ORDERING IS DEFINED HERE
  const sortedLayerIds = avatarConfig
    ? onlyBasic
      ? [
          avatarConfig.skinId,
          ...avatarConfig.tattoos.map((x: any) => x.layerId),
          avatarConfig.eyesId,
          avatarConfig.mouthId,
          avatarConfig.eyebrowsId,
          avatarConfig.facialHairId,
          avatarConfig.hairId,
        ]
      : [
          avatarConfig.skinId,
          ...avatarConfig.tattoos.map((x: any) => x.layerId),
          avatarConfig.eyesId,
          avatarConfig.mouthId,
          avatarConfig.eyebrowsId,
          avatarConfig.clothesId,
          avatarConfig.facialHairId,
          avatarConfig.hairId,
          ...avatarConfig.accessories.map((x: any) => x.layerId),
        ]
    : []

  return sortedLayerIds.filter(x => !!x) as string[]
}
