import { GqlAvatarConfig, GqlAvatarLayer } from '@jok/graphql'

export function getAvatarConfigFromLayerIds(items: GqlAvatarLayer[]) {
  return <GqlAvatarConfig>{
    skinId: items.find(x => x.type2 === 'SKIN')?.id,
    clothesId: items.find(x => x.type2 === 'CLOTHES')?.id,
    eyesId: items.find(x => x.type2 === 'EYES')?.id,
    mouthId: items.find(x => x.type2 === 'MOUTH')?.id,
    eyebrowsId: items.find(x => x.type2 === 'EYEBROWS')?.id,
    facialHairId: items.find(x => x.type2 === 'FACIAL_HAIR')?.id,
    hairId: items.find(x => x.type2 === 'HAIR')?.id,

    tattoos: items
      .filter(x => x.type2 === 'TATTOO')
      .map(x => ({ layerId: x.id })),

    accessories: items
      .filter(x =>
        [
          'ACCESSORIES',
          'CORNER_ITEM',
          'EARRING',
          'FACE_MASK',
          'FACE_OVERLAY',
          'GLASSES',
          'HAT',
        ].includes(x.type2)
      )
      .map((x, i) => ({
        layerId: x.id,
        mode: 'NORMAL',
        index: i,
      })),
  }
}
