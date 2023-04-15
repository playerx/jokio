import {
  ApolloClient,
  ErrorPolicy,
  FetchPolicy,
  MutationOptions,
  OperationVariables,
  QueryOptions,
  WatchQueryFetchPolicy,
  WatchQueryOptions,
} from '@apollo/client/core'
import { UpdateQueryFn } from '@apollo/client/core/watchQueryOptions'

// gql2 - to ignore apollo extention validation
// for now there is no better way
import gql2 from 'graphql-tag'

// DocumentNode type for fragment type safety
import { DocumentNode } from 'graphql'

// tslint:disable

// types enum

export enum QueryObjectTypes {
  CreateGameRoomsMutationResponse = 'CreateGameRoomsMutationResponse',
  CreateGamesMutationResponse = 'CreateGamesMutationResponse',
  CreateInfo = 'CreateInfo',
  CreateUserSessionsMutationResponse = 'CreateUserSessionsMutationResponse',
  CreateUsersMutationResponse = 'CreateUsersMutationResponse',
  CreateVipMembershipsMutationResponse = 'CreateVipMembershipsMutationResponse',
  DateTimeAggregateSelectionNonNullable = 'DateTimeAggregateSelectionNonNullable',
  DateTimeAggregateSelectionNullable = 'DateTimeAggregateSelectionNullable',
  DeleteInfo = 'DeleteInfo',
  Game = 'Game',
  GameAggregateSelection = 'GameAggregateSelection',
  GameEdge = 'GameEdge',
  GameRoom = 'GameRoom',
  GameRoomAggregateSelection = 'GameRoomAggregateSelection',
  GameRoomEdge = 'GameRoomEdge',
  GameRoomGameConnection = 'GameRoomGameConnection',
  GameRoomGameGameAggregationSelection = 'GameRoomGameGameAggregationSelection',
  GameRoomGameGameNodeAggregateSelection = 'GameRoomGameGameNodeAggregateSelection',
  GameRoomGameRelationship = 'GameRoomGameRelationship',
  GameRoomGameRoomNextRoomAggregationSelection = 'GameRoomGameRoomNextRoomAggregationSelection',
  GameRoomGameRoomNextRoomNodeAggregateSelection = 'GameRoomGameRoomNextRoomNodeAggregateSelection',
  GameRoomNextRoomConnection = 'GameRoomNextRoomConnection',
  GameRoomNextRoomRelationship = 'GameRoomNextRoomRelationship',
  GameRoomPlayersConnection = 'GameRoomPlayersConnection',
  GameRoomPlayersRelationship = 'GameRoomPlayersRelationship',
  GameRoomsConnection = 'GameRoomsConnection',
  GameRoomUserPlayersAggregationSelection = 'GameRoomUserPlayersAggregationSelection',
  GameRoomUserPlayersNodeAggregateSelection = 'GameRoomUserPlayersNodeAggregateSelection',
  GameRoomUserViewersAggregationSelection = 'GameRoomUserViewersAggregationSelection',
  GameRoomUserViewersNodeAggregateSelection = 'GameRoomUserViewersNodeAggregateSelection',
  GameRoomViewersConnection = 'GameRoomViewersConnection',
  GameRoomViewersRelationship = 'GameRoomViewersRelationship',
  GamesConnection = 'GamesConnection',
  IDAggregateSelectionNonNullable = 'IDAggregateSelectionNonNullable',
  IntAggregateSelectionNonNullable = 'IntAggregateSelectionNonNullable',
  PageInfo = 'PageInfo',
  StringAggregateSelectionNonNullable = 'StringAggregateSelectionNonNullable',
  StringAggregateSelectionNullable = 'StringAggregateSelectionNullable',
  UpdateGameRoomsMutationResponse = 'UpdateGameRoomsMutationResponse',
  UpdateGamesMutationResponse = 'UpdateGamesMutationResponse',
  UpdateInfo = 'UpdateInfo',
  UpdateUserSessionsMutationResponse = 'UpdateUserSessionsMutationResponse',
  UpdateUsersMutationResponse = 'UpdateUsersMutationResponse',
  UpdateVipMembershipsMutationResponse = 'UpdateVipMembershipsMutationResponse',
  User = 'User',
  UserAggregateSelection = 'UserAggregateSelection',
  UserEdge = 'UserEdge',
  UsersConnection = 'UsersConnection',
  UserSession = 'UserSession',
  UserSessionAggregateSelection = 'UserSessionAggregateSelection',
  UserSessionEdge = 'UserSessionEdge',
  UserSessionsConnection = 'UserSessionsConnection',
  UserSessionsRelationship = 'UserSessionsRelationship',
  UserSessionUserConnection = 'UserSessionUserConnection',
  UserSessionUserRelationship = 'UserSessionUserRelationship',
  UserSessionUserUserAggregationSelection = 'UserSessionUserUserAggregationSelection',
  UserSessionUserUserNodeAggregateSelection = 'UserSessionUserUserNodeAggregateSelection',
  UserUserSessionSessionsAggregationSelection = 'UserUserSessionSessionsAggregationSelection',
  UserUserSessionSessionsNodeAggregateSelection = 'UserUserSessionSessionsNodeAggregateSelection',
  UserVipConnection = 'UserVipConnection',
  UserVIPMembershipVipAggregationSelection = 'UserVIPMembershipVipAggregationSelection',
  UserVIPMembershipVipNodeAggregateSelection = 'UserVIPMembershipVipNodeAggregateSelection',
  UserVipRelationship = 'UserVipRelationship',
  VIPMembership = 'VIPMembership',
  VIPMembershipAggregateSelection = 'VIPMembershipAggregateSelection',
  VIPMembershipEdge = 'VIPMembershipEdge',
  VipMembershipsConnection = 'VipMembershipsConnection',
  VIPMembershipUserConnection = 'VIPMembershipUserConnection',
  VIPMembershipUserRelationship = 'VIPMembershipUserRelationship',
  VIPMembershipUserUserAggregationSelection = 'VIPMembershipUserUserAggregationSelection',
  VIPMembershipUserUserNodeAggregateSelection = 'VIPMembershipUserUserNodeAggregateSelection',
}

export type GqlAvatarConfig = any
export type GqlAvatarLayer = any

// types
type Boolean = boolean
type DateTime = Date
type Float = number
export type ID = string
type Int = number
type String = string

export type Platform = 'IOS' | 'ANDROID' | 'WEB'

export type SortDirection = 'ASC' | 'DESC'

export type UserStatus = 'GUEST' | 'VERIFIED'

export interface GqlGameConnectOrCreateWhere {
  node: GameUniqueWhere
}
type GameConnectOrCreateWhere = GqlGameConnectOrCreateWhere

export interface GqlGameConnectWhere {
  node: GameWhere
}
type GameConnectWhere = GqlGameConnectWhere

export interface GqlGameCreateInput {
  name: String
}
type GameCreateInput = GqlGameCreateInput

export interface GqlGameOnCreateInput {
  name: String
}
type GameOnCreateInput = GqlGameOnCreateInput

export interface GqlGameOptions {
  sort?: GameSort[]
  limit?: Int
  offset?: Int
}
type GameOptions = GqlGameOptions

export interface GqlGameRoomConnectInput {
  game?: GameRoomGameConnectFieldInput
  viewers?: GameRoomViewersConnectFieldInput[]
  players?: GameRoomPlayersConnectFieldInput[]
  nextRoom?: GameRoomNextRoomConnectFieldInput
}
type GameRoomConnectInput = GqlGameRoomConnectInput

export interface GqlGameRoomConnectOrCreateInput {
  game?: GameRoomGameConnectOrCreateFieldInput
  viewers?: GameRoomViewersConnectOrCreateFieldInput[]
  players?: GameRoomPlayersConnectOrCreateFieldInput[]
  nextRoom?: GameRoomNextRoomConnectOrCreateFieldInput
}
type GameRoomConnectOrCreateInput = GqlGameRoomConnectOrCreateInput

export interface GqlGameRoomConnectOrCreateWhere {
  node: GameRoomUniqueWhere
}
type GameRoomConnectOrCreateWhere = GqlGameRoomConnectOrCreateWhere

export interface GqlGameRoomConnectWhere {
  node: GameRoomWhere
}
type GameRoomConnectWhere = GqlGameRoomConnectWhere

export interface GqlGameRoomCreateInput {
  config?: String
  game?: GameRoomGameFieldInput
  viewers?: GameRoomViewersFieldInput
  players?: GameRoomPlayersFieldInput
  nextRoom?: GameRoomNextRoomFieldInput
}
type GameRoomCreateInput = GqlGameRoomCreateInput

export interface GqlGameRoomDeleteInput {
  game?: GameRoomGameDeleteFieldInput
  viewers?: GameRoomViewersDeleteFieldInput[]
  players?: GameRoomPlayersDeleteFieldInput[]
  nextRoom?: GameRoomNextRoomDeleteFieldInput
}
type GameRoomDeleteInput = GqlGameRoomDeleteInput

export interface GqlGameRoomDisconnectInput {
  game?: GameRoomGameDisconnectFieldInput
  viewers?: GameRoomViewersDisconnectFieldInput[]
  players?: GameRoomPlayersDisconnectFieldInput[]
  nextRoom?: GameRoomNextRoomDisconnectFieldInput
}
type GameRoomDisconnectInput = GqlGameRoomDisconnectInput

export interface GqlGameRoomGameAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: GameRoomGameAggregateInput[]
  OR?: GameRoomGameAggregateInput[]
  node?: GameRoomGameNodeAggregationWhereInput
}
type GameRoomGameAggregateInput = GqlGameRoomGameAggregateInput

export interface GqlGameRoomGameConnectFieldInput {
  where?: GameConnectWhere
}
type GameRoomGameConnectFieldInput = GqlGameRoomGameConnectFieldInput

export interface GqlGameRoomGameConnectionSort {
  node?: GameSort
}
type GameRoomGameConnectionSort = GqlGameRoomGameConnectionSort

export interface GqlGameRoomGameConnectionWhere {
  AND?: GameRoomGameConnectionWhere[]
  OR?: GameRoomGameConnectionWhere[]
  node?: GameWhere
  node_NOT?: GameWhere
}
type GameRoomGameConnectionWhere = GqlGameRoomGameConnectionWhere

export interface GqlGameRoomGameConnectOrCreateFieldInput {
  where: GameConnectOrCreateWhere
  onCreate: GameRoomGameConnectOrCreateFieldInputOnCreate
}
type GameRoomGameConnectOrCreateFieldInput =
  GqlGameRoomGameConnectOrCreateFieldInput

export interface GqlGameRoomGameConnectOrCreateFieldInputOnCreate {
  node: GameOnCreateInput
}
type GameRoomGameConnectOrCreateFieldInputOnCreate =
  GqlGameRoomGameConnectOrCreateFieldInputOnCreate

export interface GqlGameRoomGameCreateFieldInput {
  node: GameCreateInput
}
type GameRoomGameCreateFieldInput = GqlGameRoomGameCreateFieldInput

export interface GqlGameRoomGameDeleteFieldInput {
  where?: GameRoomGameConnectionWhere
}
type GameRoomGameDeleteFieldInput = GqlGameRoomGameDeleteFieldInput

export interface GqlGameRoomGameDisconnectFieldInput {
  where?: GameRoomGameConnectionWhere
}
type GameRoomGameDisconnectFieldInput =
  GqlGameRoomGameDisconnectFieldInput

export interface GqlGameRoomGameFieldInput {
  create?: GameRoomGameCreateFieldInput
  connect?: GameRoomGameConnectFieldInput
  connectOrCreate?: GameRoomGameConnectOrCreateFieldInput
}
type GameRoomGameFieldInput = GqlGameRoomGameFieldInput

export interface GqlGameRoomGameNodeAggregationWhereInput {
  AND?: GameRoomGameNodeAggregationWhereInput[]
  OR?: GameRoomGameNodeAggregationWhereInput[]
  id_EQUAL?: ID
  name_EQUAL?: String
  name_AVERAGE_EQUAL?: Float
  name_LONGEST_EQUAL?: Int
  name_SHORTEST_EQUAL?: Int
  name_GT?: Int
  name_AVERAGE_GT?: Float
  name_LONGEST_GT?: Int
  name_SHORTEST_GT?: Int
  name_GTE?: Int
  name_AVERAGE_GTE?: Float
  name_LONGEST_GTE?: Int
  name_SHORTEST_GTE?: Int
  name_LT?: Int
  name_AVERAGE_LT?: Float
  name_LONGEST_LT?: Int
  name_SHORTEST_LT?: Int
  name_LTE?: Int
  name_AVERAGE_LTE?: Float
  name_LONGEST_LTE?: Int
  name_SHORTEST_LTE?: Int
  updatedAt_EQUAL?: DateTime
  updatedAt_MIN_EQUAL?: DateTime
  updatedAt_MAX_EQUAL?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_MIN_GT?: DateTime
  updatedAt_MAX_GT?: DateTime
  updatedAt_GTE?: DateTime
  updatedAt_MIN_GTE?: DateTime
  updatedAt_MAX_GTE?: DateTime
  updatedAt_LT?: DateTime
  updatedAt_MIN_LT?: DateTime
  updatedAt_MAX_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_MIN_LTE?: DateTime
  updatedAt_MAX_LTE?: DateTime
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type GameRoomGameNodeAggregationWhereInput =
  GqlGameRoomGameNodeAggregationWhereInput

export interface GqlGameRoomGameUpdateConnectionInput {
  node?: GameUpdateInput
}
type GameRoomGameUpdateConnectionInput =
  GqlGameRoomGameUpdateConnectionInput

export interface GqlGameRoomGameUpdateFieldInput {
  where?: GameRoomGameConnectionWhere
  update?: GameRoomGameUpdateConnectionInput
  connect?: GameRoomGameConnectFieldInput
  disconnect?: GameRoomGameDisconnectFieldInput
  create?: GameRoomGameCreateFieldInput
  delete?: GameRoomGameDeleteFieldInput
  connectOrCreate?: GameRoomGameConnectOrCreateFieldInput
}
type GameRoomGameUpdateFieldInput = GqlGameRoomGameUpdateFieldInput

export interface GqlGameRoomNextRoomAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: GameRoomNextRoomAggregateInput[]
  OR?: GameRoomNextRoomAggregateInput[]
  node?: GameRoomNextRoomNodeAggregationWhereInput
}
type GameRoomNextRoomAggregateInput =
  GqlGameRoomNextRoomAggregateInput

export interface GqlGameRoomNextRoomConnectFieldInput {
  where?: GameRoomConnectWhere
  connect?: GameRoomConnectInput
}
type GameRoomNextRoomConnectFieldInput =
  GqlGameRoomNextRoomConnectFieldInput

export interface GqlGameRoomNextRoomConnectionSort {
  node?: GameRoomSort
}
type GameRoomNextRoomConnectionSort =
  GqlGameRoomNextRoomConnectionSort

export interface GqlGameRoomNextRoomConnectionWhere {
  AND?: GameRoomNextRoomConnectionWhere[]
  OR?: GameRoomNextRoomConnectionWhere[]
  node?: GameRoomWhere
  node_NOT?: GameRoomWhere
}
type GameRoomNextRoomConnectionWhere =
  GqlGameRoomNextRoomConnectionWhere

export interface GqlGameRoomNextRoomConnectOrCreateFieldInput {
  where: GameRoomConnectOrCreateWhere
  onCreate: GameRoomNextRoomConnectOrCreateFieldInputOnCreate
}
type GameRoomNextRoomConnectOrCreateFieldInput =
  GqlGameRoomNextRoomConnectOrCreateFieldInput

export interface GqlGameRoomNextRoomConnectOrCreateFieldInputOnCreate {
  node: GameRoomOnCreateInput
}
type GameRoomNextRoomConnectOrCreateFieldInputOnCreate =
  GqlGameRoomNextRoomConnectOrCreateFieldInputOnCreate

export interface GqlGameRoomNextRoomCreateFieldInput {
  node: GameRoomCreateInput
}
type GameRoomNextRoomCreateFieldInput =
  GqlGameRoomNextRoomCreateFieldInput

export interface GqlGameRoomNextRoomDeleteFieldInput {
  where?: GameRoomNextRoomConnectionWhere
  delete?: GameRoomDeleteInput
}
type GameRoomNextRoomDeleteFieldInput =
  GqlGameRoomNextRoomDeleteFieldInput

export interface GqlGameRoomNextRoomDisconnectFieldInput {
  where?: GameRoomNextRoomConnectionWhere
  disconnect?: GameRoomDisconnectInput
}
type GameRoomNextRoomDisconnectFieldInput =
  GqlGameRoomNextRoomDisconnectFieldInput

export interface GqlGameRoomNextRoomFieldInput {
  create?: GameRoomNextRoomCreateFieldInput
  connect?: GameRoomNextRoomConnectFieldInput
  connectOrCreate?: GameRoomNextRoomConnectOrCreateFieldInput
}
type GameRoomNextRoomFieldInput = GqlGameRoomNextRoomFieldInput

export interface GqlGameRoomNextRoomNodeAggregationWhereInput {
  AND?: GameRoomNextRoomNodeAggregationWhereInput[]
  OR?: GameRoomNextRoomNodeAggregationWhereInput[]
  id_EQUAL?: ID
  config_EQUAL?: String
  config_AVERAGE_EQUAL?: Float
  config_LONGEST_EQUAL?: Int
  config_SHORTEST_EQUAL?: Int
  config_GT?: Int
  config_AVERAGE_GT?: Float
  config_LONGEST_GT?: Int
  config_SHORTEST_GT?: Int
  config_GTE?: Int
  config_AVERAGE_GTE?: Float
  config_LONGEST_GTE?: Int
  config_SHORTEST_GTE?: Int
  config_LT?: Int
  config_AVERAGE_LT?: Float
  config_LONGEST_LT?: Int
  config_SHORTEST_LT?: Int
  config_LTE?: Int
  config_AVERAGE_LTE?: Float
  config_LONGEST_LTE?: Int
  config_SHORTEST_LTE?: Int
  updatedAt_EQUAL?: DateTime
  updatedAt_MIN_EQUAL?: DateTime
  updatedAt_MAX_EQUAL?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_MIN_GT?: DateTime
  updatedAt_MAX_GT?: DateTime
  updatedAt_GTE?: DateTime
  updatedAt_MIN_GTE?: DateTime
  updatedAt_MAX_GTE?: DateTime
  updatedAt_LT?: DateTime
  updatedAt_MIN_LT?: DateTime
  updatedAt_MAX_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_MIN_LTE?: DateTime
  updatedAt_MAX_LTE?: DateTime
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type GameRoomNextRoomNodeAggregationWhereInput =
  GqlGameRoomNextRoomNodeAggregationWhereInput

export interface GqlGameRoomNextRoomUpdateConnectionInput {
  node?: GameRoomUpdateInput
}
type GameRoomNextRoomUpdateConnectionInput =
  GqlGameRoomNextRoomUpdateConnectionInput

export interface GqlGameRoomNextRoomUpdateFieldInput {
  where?: GameRoomNextRoomConnectionWhere
  update?: GameRoomNextRoomUpdateConnectionInput
  connect?: GameRoomNextRoomConnectFieldInput
  disconnect?: GameRoomNextRoomDisconnectFieldInput
  create?: GameRoomNextRoomCreateFieldInput
  delete?: GameRoomNextRoomDeleteFieldInput
  connectOrCreate?: GameRoomNextRoomConnectOrCreateFieldInput
}
type GameRoomNextRoomUpdateFieldInput =
  GqlGameRoomNextRoomUpdateFieldInput

export interface GqlGameRoomOnCreateInput {
  config?: String
}
type GameRoomOnCreateInput = GqlGameRoomOnCreateInput

export interface GqlGameRoomOptions {
  sort?: GameRoomSort[]
  limit?: Int
  offset?: Int
}
type GameRoomOptions = GqlGameRoomOptions

export interface GqlGameRoomPlayersAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: GameRoomPlayersAggregateInput[]
  OR?: GameRoomPlayersAggregateInput[]
  node?: GameRoomPlayersNodeAggregationWhereInput
}
type GameRoomPlayersAggregateInput = GqlGameRoomPlayersAggregateInput

export interface GqlGameRoomPlayersConnectFieldInput {
  where?: UserConnectWhere
  connect?: UserConnectInput[]
}
type GameRoomPlayersConnectFieldInput =
  GqlGameRoomPlayersConnectFieldInput

export interface GqlGameRoomPlayersConnectionSort {
  node?: UserSort
}
type GameRoomPlayersConnectionSort = GqlGameRoomPlayersConnectionSort

export interface GqlGameRoomPlayersConnectionWhere {
  AND?: GameRoomPlayersConnectionWhere[]
  OR?: GameRoomPlayersConnectionWhere[]
  node?: UserWhere
  node_NOT?: UserWhere
}
type GameRoomPlayersConnectionWhere =
  GqlGameRoomPlayersConnectionWhere

export interface GqlGameRoomPlayersConnectOrCreateFieldInput {
  where: UserConnectOrCreateWhere
  onCreate: GameRoomPlayersConnectOrCreateFieldInputOnCreate
}
type GameRoomPlayersConnectOrCreateFieldInput =
  GqlGameRoomPlayersConnectOrCreateFieldInput

export interface GqlGameRoomPlayersConnectOrCreateFieldInputOnCreate {
  node: UserOnCreateInput
}
type GameRoomPlayersConnectOrCreateFieldInputOnCreate =
  GqlGameRoomPlayersConnectOrCreateFieldInputOnCreate

export interface GqlGameRoomPlayersCreateFieldInput {
  node: UserCreateInput
}
type GameRoomPlayersCreateFieldInput =
  GqlGameRoomPlayersCreateFieldInput

export interface GqlGameRoomPlayersDeleteFieldInput {
  where?: GameRoomPlayersConnectionWhere
  delete?: UserDeleteInput
}
type GameRoomPlayersDeleteFieldInput =
  GqlGameRoomPlayersDeleteFieldInput

export interface GqlGameRoomPlayersDisconnectFieldInput {
  where?: GameRoomPlayersConnectionWhere
  disconnect?: UserDisconnectInput
}
type GameRoomPlayersDisconnectFieldInput =
  GqlGameRoomPlayersDisconnectFieldInput

export interface GqlGameRoomPlayersFieldInput {
  create?: GameRoomPlayersCreateFieldInput[]
  connect?: GameRoomPlayersConnectFieldInput[]
  connectOrCreate?: GameRoomPlayersConnectOrCreateFieldInput[]
}
type GameRoomPlayersFieldInput = GqlGameRoomPlayersFieldInput

export interface GqlGameRoomPlayersNodeAggregationWhereInput {
  AND?: GameRoomPlayersNodeAggregationWhereInput[]
  OR?: GameRoomPlayersNodeAggregationWhereInput[]
  id_EQUAL?: ID
  name_EQUAL?: String
  name_AVERAGE_EQUAL?: Float
  name_LONGEST_EQUAL?: Int
  name_SHORTEST_EQUAL?: Int
  name_GT?: Int
  name_AVERAGE_GT?: Float
  name_LONGEST_GT?: Int
  name_SHORTEST_GT?: Int
  name_GTE?: Int
  name_AVERAGE_GTE?: Float
  name_LONGEST_GTE?: Int
  name_SHORTEST_GTE?: Int
  name_LT?: Int
  name_AVERAGE_LT?: Float
  name_LONGEST_LT?: Int
  name_SHORTEST_LT?: Int
  name_LTE?: Int
  name_AVERAGE_LTE?: Float
  name_LONGEST_LTE?: Int
  name_SHORTEST_LTE?: Int
  email_EQUAL?: String
  email_AVERAGE_EQUAL?: Float
  email_LONGEST_EQUAL?: Int
  email_SHORTEST_EQUAL?: Int
  email_GT?: Int
  email_AVERAGE_GT?: Float
  email_LONGEST_GT?: Int
  email_SHORTEST_GT?: Int
  email_GTE?: Int
  email_AVERAGE_GTE?: Float
  email_LONGEST_GTE?: Int
  email_SHORTEST_GTE?: Int
  email_LT?: Int
  email_AVERAGE_LT?: Float
  email_LONGEST_LT?: Int
  email_SHORTEST_LT?: Int
  email_LTE?: Int
  email_AVERAGE_LTE?: Float
  email_LONGEST_LTE?: Int
  email_SHORTEST_LTE?: Int
  walletAddress_EQUAL?: String
  walletAddress_AVERAGE_EQUAL?: Float
  walletAddress_LONGEST_EQUAL?: Int
  walletAddress_SHORTEST_EQUAL?: Int
  walletAddress_GT?: Int
  walletAddress_AVERAGE_GT?: Float
  walletAddress_LONGEST_GT?: Int
  walletAddress_SHORTEST_GT?: Int
  walletAddress_GTE?: Int
  walletAddress_AVERAGE_GTE?: Float
  walletAddress_LONGEST_GTE?: Int
  walletAddress_SHORTEST_GTE?: Int
  walletAddress_LT?: Int
  walletAddress_AVERAGE_LT?: Float
  walletAddress_LONGEST_LT?: Int
  walletAddress_SHORTEST_LT?: Int
  walletAddress_LTE?: Int
  walletAddress_AVERAGE_LTE?: Float
  walletAddress_LONGEST_LTE?: Int
  walletAddress_SHORTEST_LTE?: Int
  tokens_EQUAL?: Int
  tokens_AVERAGE_EQUAL?: Float
  tokens_MIN_EQUAL?: Int
  tokens_MAX_EQUAL?: Int
  tokens_SUM_EQUAL?: Int
  tokens_GT?: Int
  tokens_AVERAGE_GT?: Float
  tokens_MIN_GT?: Int
  tokens_MAX_GT?: Int
  tokens_SUM_GT?: Int
  tokens_GTE?: Int
  tokens_AVERAGE_GTE?: Float
  tokens_MIN_GTE?: Int
  tokens_MAX_GTE?: Int
  tokens_SUM_GTE?: Int
  tokens_LT?: Int
  tokens_AVERAGE_LT?: Float
  tokens_MIN_LT?: Int
  tokens_MAX_LT?: Int
  tokens_SUM_LT?: Int
  tokens_LTE?: Int
  tokens_AVERAGE_LTE?: Float
  tokens_MIN_LTE?: Int
  tokens_MAX_LTE?: Int
  tokens_SUM_LTE?: Int
  updatedAt_EQUAL?: DateTime
  updatedAt_MIN_EQUAL?: DateTime
  updatedAt_MAX_EQUAL?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_MIN_GT?: DateTime
  updatedAt_MAX_GT?: DateTime
  updatedAt_GTE?: DateTime
  updatedAt_MIN_GTE?: DateTime
  updatedAt_MAX_GTE?: DateTime
  updatedAt_LT?: DateTime
  updatedAt_MIN_LT?: DateTime
  updatedAt_MAX_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_MIN_LTE?: DateTime
  updatedAt_MAX_LTE?: DateTime
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type GameRoomPlayersNodeAggregationWhereInput =
  GqlGameRoomPlayersNodeAggregationWhereInput

export interface GqlGameRoomPlayersUpdateConnectionInput {
  node?: UserUpdateInput
}
type GameRoomPlayersUpdateConnectionInput =
  GqlGameRoomPlayersUpdateConnectionInput

export interface GqlGameRoomPlayersUpdateFieldInput {
  where?: GameRoomPlayersConnectionWhere
  update?: GameRoomPlayersUpdateConnectionInput
  connect?: GameRoomPlayersConnectFieldInput[]
  disconnect?: GameRoomPlayersDisconnectFieldInput[]
  create?: GameRoomPlayersCreateFieldInput[]
  delete?: GameRoomPlayersDeleteFieldInput[]
  connectOrCreate?: GameRoomPlayersConnectOrCreateFieldInput[]
}
type GameRoomPlayersUpdateFieldInput =
  GqlGameRoomPlayersUpdateFieldInput

export interface GqlGameRoomRelationInput {
  game?: GameRoomGameCreateFieldInput
  viewers?: GameRoomViewersCreateFieldInput[]
  players?: GameRoomPlayersCreateFieldInput[]
  nextRoom?: GameRoomNextRoomCreateFieldInput
}
type GameRoomRelationInput = GqlGameRoomRelationInput

export interface GqlGameRoomSort {
  id?: SortDirection
  config?: SortDirection
  updatedAt?: SortDirection
  createdAt?: SortDirection
}
type GameRoomSort = GqlGameRoomSort

export interface GqlGameRoomUniqueWhere {
  id?: ID
}
type GameRoomUniqueWhere = GqlGameRoomUniqueWhere

export interface GqlGameRoomUpdateInput {
  config?: String
  game?: GameRoomGameUpdateFieldInput
  viewers?: GameRoomViewersUpdateFieldInput[]
  players?: GameRoomPlayersUpdateFieldInput[]
  nextRoom?: GameRoomNextRoomUpdateFieldInput
}
type GameRoomUpdateInput = GqlGameRoomUpdateInput

export interface GqlGameRoomViewersAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: GameRoomViewersAggregateInput[]
  OR?: GameRoomViewersAggregateInput[]
  node?: GameRoomViewersNodeAggregationWhereInput
}
type GameRoomViewersAggregateInput = GqlGameRoomViewersAggregateInput

export interface GqlGameRoomViewersConnectFieldInput {
  where?: UserConnectWhere
  connect?: UserConnectInput[]
}
type GameRoomViewersConnectFieldInput =
  GqlGameRoomViewersConnectFieldInput

export interface GqlGameRoomViewersConnectionSort {
  node?: UserSort
}
type GameRoomViewersConnectionSort = GqlGameRoomViewersConnectionSort

export interface GqlGameRoomViewersConnectionWhere {
  AND?: GameRoomViewersConnectionWhere[]
  OR?: GameRoomViewersConnectionWhere[]
  node?: UserWhere
  node_NOT?: UserWhere
}
type GameRoomViewersConnectionWhere =
  GqlGameRoomViewersConnectionWhere

export interface GqlGameRoomViewersConnectOrCreateFieldInput {
  where: UserConnectOrCreateWhere
  onCreate: GameRoomViewersConnectOrCreateFieldInputOnCreate
}
type GameRoomViewersConnectOrCreateFieldInput =
  GqlGameRoomViewersConnectOrCreateFieldInput

export interface GqlGameRoomViewersConnectOrCreateFieldInputOnCreate {
  node: UserOnCreateInput
}
type GameRoomViewersConnectOrCreateFieldInputOnCreate =
  GqlGameRoomViewersConnectOrCreateFieldInputOnCreate

export interface GqlGameRoomViewersCreateFieldInput {
  node: UserCreateInput
}
type GameRoomViewersCreateFieldInput =
  GqlGameRoomViewersCreateFieldInput

export interface GqlGameRoomViewersDeleteFieldInput {
  where?: GameRoomViewersConnectionWhere
  delete?: UserDeleteInput
}
type GameRoomViewersDeleteFieldInput =
  GqlGameRoomViewersDeleteFieldInput

export interface GqlGameRoomViewersDisconnectFieldInput {
  where?: GameRoomViewersConnectionWhere
  disconnect?: UserDisconnectInput
}
type GameRoomViewersDisconnectFieldInput =
  GqlGameRoomViewersDisconnectFieldInput

export interface GqlGameRoomViewersFieldInput {
  create?: GameRoomViewersCreateFieldInput[]
  connect?: GameRoomViewersConnectFieldInput[]
  connectOrCreate?: GameRoomViewersConnectOrCreateFieldInput[]
}
type GameRoomViewersFieldInput = GqlGameRoomViewersFieldInput

export interface GqlGameRoomViewersNodeAggregationWhereInput {
  AND?: GameRoomViewersNodeAggregationWhereInput[]
  OR?: GameRoomViewersNodeAggregationWhereInput[]
  id_EQUAL?: ID
  name_EQUAL?: String
  name_AVERAGE_EQUAL?: Float
  name_LONGEST_EQUAL?: Int
  name_SHORTEST_EQUAL?: Int
  name_GT?: Int
  name_AVERAGE_GT?: Float
  name_LONGEST_GT?: Int
  name_SHORTEST_GT?: Int
  name_GTE?: Int
  name_AVERAGE_GTE?: Float
  name_LONGEST_GTE?: Int
  name_SHORTEST_GTE?: Int
  name_LT?: Int
  name_AVERAGE_LT?: Float
  name_LONGEST_LT?: Int
  name_SHORTEST_LT?: Int
  name_LTE?: Int
  name_AVERAGE_LTE?: Float
  name_LONGEST_LTE?: Int
  name_SHORTEST_LTE?: Int
  email_EQUAL?: String
  email_AVERAGE_EQUAL?: Float
  email_LONGEST_EQUAL?: Int
  email_SHORTEST_EQUAL?: Int
  email_GT?: Int
  email_AVERAGE_GT?: Float
  email_LONGEST_GT?: Int
  email_SHORTEST_GT?: Int
  email_GTE?: Int
  email_AVERAGE_GTE?: Float
  email_LONGEST_GTE?: Int
  email_SHORTEST_GTE?: Int
  email_LT?: Int
  email_AVERAGE_LT?: Float
  email_LONGEST_LT?: Int
  email_SHORTEST_LT?: Int
  email_LTE?: Int
  email_AVERAGE_LTE?: Float
  email_LONGEST_LTE?: Int
  email_SHORTEST_LTE?: Int
  walletAddress_EQUAL?: String
  walletAddress_AVERAGE_EQUAL?: Float
  walletAddress_LONGEST_EQUAL?: Int
  walletAddress_SHORTEST_EQUAL?: Int
  walletAddress_GT?: Int
  walletAddress_AVERAGE_GT?: Float
  walletAddress_LONGEST_GT?: Int
  walletAddress_SHORTEST_GT?: Int
  walletAddress_GTE?: Int
  walletAddress_AVERAGE_GTE?: Float
  walletAddress_LONGEST_GTE?: Int
  walletAddress_SHORTEST_GTE?: Int
  walletAddress_LT?: Int
  walletAddress_AVERAGE_LT?: Float
  walletAddress_LONGEST_LT?: Int
  walletAddress_SHORTEST_LT?: Int
  walletAddress_LTE?: Int
  walletAddress_AVERAGE_LTE?: Float
  walletAddress_LONGEST_LTE?: Int
  walletAddress_SHORTEST_LTE?: Int
  tokens_EQUAL?: Int
  tokens_AVERAGE_EQUAL?: Float
  tokens_MIN_EQUAL?: Int
  tokens_MAX_EQUAL?: Int
  tokens_SUM_EQUAL?: Int
  tokens_GT?: Int
  tokens_AVERAGE_GT?: Float
  tokens_MIN_GT?: Int
  tokens_MAX_GT?: Int
  tokens_SUM_GT?: Int
  tokens_GTE?: Int
  tokens_AVERAGE_GTE?: Float
  tokens_MIN_GTE?: Int
  tokens_MAX_GTE?: Int
  tokens_SUM_GTE?: Int
  tokens_LT?: Int
  tokens_AVERAGE_LT?: Float
  tokens_MIN_LT?: Int
  tokens_MAX_LT?: Int
  tokens_SUM_LT?: Int
  tokens_LTE?: Int
  tokens_AVERAGE_LTE?: Float
  tokens_MIN_LTE?: Int
  tokens_MAX_LTE?: Int
  tokens_SUM_LTE?: Int
  updatedAt_EQUAL?: DateTime
  updatedAt_MIN_EQUAL?: DateTime
  updatedAt_MAX_EQUAL?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_MIN_GT?: DateTime
  updatedAt_MAX_GT?: DateTime
  updatedAt_GTE?: DateTime
  updatedAt_MIN_GTE?: DateTime
  updatedAt_MAX_GTE?: DateTime
  updatedAt_LT?: DateTime
  updatedAt_MIN_LT?: DateTime
  updatedAt_MAX_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_MIN_LTE?: DateTime
  updatedAt_MAX_LTE?: DateTime
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type GameRoomViewersNodeAggregationWhereInput =
  GqlGameRoomViewersNodeAggregationWhereInput

export interface GqlGameRoomViewersUpdateConnectionInput {
  node?: UserUpdateInput
}
type GameRoomViewersUpdateConnectionInput =
  GqlGameRoomViewersUpdateConnectionInput

export interface GqlGameRoomViewersUpdateFieldInput {
  where?: GameRoomViewersConnectionWhere
  update?: GameRoomViewersUpdateConnectionInput
  connect?: GameRoomViewersConnectFieldInput[]
  disconnect?: GameRoomViewersDisconnectFieldInput[]
  create?: GameRoomViewersCreateFieldInput[]
  delete?: GameRoomViewersDeleteFieldInput[]
  connectOrCreate?: GameRoomViewersConnectOrCreateFieldInput[]
}
type GameRoomViewersUpdateFieldInput =
  GqlGameRoomViewersUpdateFieldInput

export interface GqlGameRoomWhere {
  OR?: GameRoomWhere[]
  AND?: GameRoomWhere[]
  id?: ID
  id_NOT?: ID
  id_IN?: ID[]
  id_NOT_IN?: ID[]
  id_CONTAINS?: ID
  id_NOT_CONTAINS?: ID
  id_STARTS_WITH?: ID
  id_NOT_STARTS_WITH?: ID
  id_ENDS_WITH?: ID
  id_NOT_ENDS_WITH?: ID
  config?: String
  config_NOT?: String
  config_IN?: (String | undefined)[]
  config_NOT_IN?: (String | undefined)[]
  config_CONTAINS?: String
  config_NOT_CONTAINS?: String
  config_STARTS_WITH?: String
  config_NOT_STARTS_WITH?: String
  config_ENDS_WITH?: String
  config_NOT_ENDS_WITH?: String
  updatedAt?: DateTime
  updatedAt_NOT?: DateTime
  updatedAt_IN?: (DateTime | undefined)[]
  updatedAt_NOT_IN?: (DateTime | undefined)[]
  updatedAt_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_GTE?: DateTime
  createdAt?: DateTime
  createdAt_NOT?: DateTime
  createdAt_IN?: DateTime[]
  createdAt_NOT_IN?: DateTime[]
  createdAt_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_GT?: DateTime
  createdAt_GTE?: DateTime
  game?: GameWhere
  game_NOT?: GameWhere
  gameAggregate?: GameRoomGameAggregateInput
  viewersAggregate?: GameRoomViewersAggregateInput
  viewers_ALL?: UserWhere
  viewers_NONE?: UserWhere
  viewers_SINGLE?: UserWhere
  viewers_SOME?: UserWhere
  playersAggregate?: GameRoomPlayersAggregateInput
  players_ALL?: UserWhere
  players_NONE?: UserWhere
  players_SINGLE?: UserWhere
  players_SOME?: UserWhere
  nextRoom?: GameRoomWhere
  nextRoom_NOT?: GameRoomWhere
  nextRoomAggregate?: GameRoomNextRoomAggregateInput
  gameConnection?: GameRoomGameConnectionWhere
  gameConnection_NOT?: GameRoomGameConnectionWhere
  viewersConnection_ALL?: GameRoomViewersConnectionWhere
  viewersConnection_NONE?: GameRoomViewersConnectionWhere
  viewersConnection_SINGLE?: GameRoomViewersConnectionWhere
  viewersConnection_SOME?: GameRoomViewersConnectionWhere
  playersConnection_ALL?: GameRoomPlayersConnectionWhere
  playersConnection_NONE?: GameRoomPlayersConnectionWhere
  playersConnection_SINGLE?: GameRoomPlayersConnectionWhere
  playersConnection_SOME?: GameRoomPlayersConnectionWhere
  nextRoomConnection?: GameRoomNextRoomConnectionWhere
  nextRoomConnection_NOT?: GameRoomNextRoomConnectionWhere
}
type GameRoomWhere = GqlGameRoomWhere

export interface GqlGameSort {
  id?: SortDirection
  name?: SortDirection
  updatedAt?: SortDirection
  createdAt?: SortDirection
}
type GameSort = GqlGameSort

export interface GqlGameUniqueWhere {
  id?: ID
}
type GameUniqueWhere = GqlGameUniqueWhere

export interface GqlGameUpdateInput {
  name?: String
}
type GameUpdateInput = GqlGameUpdateInput

export interface GqlGameWhere {
  OR?: GameWhere[]
  AND?: GameWhere[]
  id?: ID
  id_NOT?: ID
  id_IN?: ID[]
  id_NOT_IN?: ID[]
  id_CONTAINS?: ID
  id_NOT_CONTAINS?: ID
  id_STARTS_WITH?: ID
  id_NOT_STARTS_WITH?: ID
  id_ENDS_WITH?: ID
  id_NOT_ENDS_WITH?: ID
  name?: String
  name_NOT?: String
  name_IN?: String[]
  name_NOT_IN?: String[]
  name_CONTAINS?: String
  name_NOT_CONTAINS?: String
  name_STARTS_WITH?: String
  name_NOT_STARTS_WITH?: String
  name_ENDS_WITH?: String
  name_NOT_ENDS_WITH?: String
  updatedAt?: DateTime
  updatedAt_NOT?: DateTime
  updatedAt_IN?: (DateTime | undefined)[]
  updatedAt_NOT_IN?: (DateTime | undefined)[]
  updatedAt_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_GTE?: DateTime
  createdAt?: DateTime
  createdAt_NOT?: DateTime
  createdAt_IN?: DateTime[]
  createdAt_NOT_IN?: DateTime[]
  createdAt_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_GT?: DateTime
  createdAt_GTE?: DateTime
}
type GameWhere = GqlGameWhere

export interface GqlUserConnectInput {
  sessions?: UserSessionsConnectFieldInput[]
  vip?: UserVipConnectFieldInput
}
type UserConnectInput = GqlUserConnectInput

export interface GqlUserConnectOrCreateInput {
  sessions?: UserSessionsConnectOrCreateFieldInput[]
  vip?: UserVipConnectOrCreateFieldInput
}
type UserConnectOrCreateInput = GqlUserConnectOrCreateInput

export interface GqlUserConnectOrCreateWhere {
  node: UserUniqueWhere
}
type UserConnectOrCreateWhere = GqlUserConnectOrCreateWhere

export interface GqlUserConnectWhere {
  node: UserWhere
}
type UserConnectWhere = GqlUserConnectWhere

export interface GqlUserCreateInput {
  name: String
  email?: String
  walletAddress?: String
  tokens: Int
  status: UserStatus
  sessions?: UserSessionsFieldInput
  vip?: UserVipFieldInput
}
type UserCreateInput = GqlUserCreateInput

export interface GqlUserDeleteInput {
  sessions?: UserSessionsDeleteFieldInput[]
  vip?: UserVipDeleteFieldInput
}
type UserDeleteInput = GqlUserDeleteInput

export interface GqlUserDisconnectInput {
  sessions?: UserSessionsDisconnectFieldInput[]
  vip?: UserVipDisconnectFieldInput
}
type UserDisconnectInput = GqlUserDisconnectInput

export interface GqlUserOnCreateInput {
  name: String
  email?: String
  walletAddress?: String
  tokens: Int
  status: UserStatus
}
type UserOnCreateInput = GqlUserOnCreateInput

export interface GqlUserOptions {
  sort?: UserSort[]
  limit?: Int
  offset?: Int
}
type UserOptions = GqlUserOptions

export interface GqlUserRelationInput {
  sessions?: UserSessionsCreateFieldInput[]
  vip?: UserVipCreateFieldInput
}
type UserRelationInput = GqlUserRelationInput

export interface GqlUserSessionConnectInput {
  user?: UserSessionUserConnectFieldInput
}
type UserSessionConnectInput = GqlUserSessionConnectInput

export interface GqlUserSessionConnectOrCreateInput {
  user?: UserSessionUserConnectOrCreateFieldInput
}
type UserSessionConnectOrCreateInput =
  GqlUserSessionConnectOrCreateInput

export interface GqlUserSessionConnectOrCreateWhere {
  node: UserSessionUniqueWhere
}
type UserSessionConnectOrCreateWhere =
  GqlUserSessionConnectOrCreateWhere

export interface GqlUserSessionConnectWhere {
  node: UserSessionWhere
}
type UserSessionConnectWhere = GqlUserSessionConnectWhere

export interface GqlUserSessionCreateInput {
  deviceName?: String
  platform: Platform
  user?: UserSessionUserFieldInput
}
type UserSessionCreateInput = GqlUserSessionCreateInput

export interface GqlUserSessionDeleteInput {
  user?: UserSessionUserDeleteFieldInput
}
type UserSessionDeleteInput = GqlUserSessionDeleteInput

export interface GqlUserSessionDisconnectInput {
  user?: UserSessionUserDisconnectFieldInput
}
type UserSessionDisconnectInput = GqlUserSessionDisconnectInput

export interface GqlUserSessionOnCreateInput {
  deviceName?: String
  platform: Platform
}
type UserSessionOnCreateInput = GqlUserSessionOnCreateInput

export interface GqlUserSessionOptions {
  sort?: UserSessionSort[]
  limit?: Int
  offset?: Int
}
type UserSessionOptions = GqlUserSessionOptions

export interface GqlUserSessionRelationInput {
  user?: UserSessionUserCreateFieldInput
}
type UserSessionRelationInput = GqlUserSessionRelationInput

export interface GqlUserSessionsAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: UserSessionsAggregateInput[]
  OR?: UserSessionsAggregateInput[]
  node?: UserSessionsNodeAggregationWhereInput
}
type UserSessionsAggregateInput = GqlUserSessionsAggregateInput

export interface GqlUserSessionsConnectFieldInput {
  where?: UserSessionConnectWhere
  connect?: UserSessionConnectInput[]
}
type UserSessionsConnectFieldInput = GqlUserSessionsConnectFieldInput

export interface GqlUserSessionsConnectionSort {
  node?: UserSessionSort
}
type UserSessionsConnectionSort = GqlUserSessionsConnectionSort

export interface GqlUserSessionsConnectionWhere {
  AND?: UserSessionsConnectionWhere[]
  OR?: UserSessionsConnectionWhere[]
  node?: UserSessionWhere
  node_NOT?: UserSessionWhere
}
type UserSessionsConnectionWhere = GqlUserSessionsConnectionWhere

export interface GqlUserSessionsConnectOrCreateFieldInput {
  where: UserSessionConnectOrCreateWhere
  onCreate: UserSessionsConnectOrCreateFieldInputOnCreate
}
type UserSessionsConnectOrCreateFieldInput =
  GqlUserSessionsConnectOrCreateFieldInput

export interface GqlUserSessionsConnectOrCreateFieldInputOnCreate {
  node: UserSessionOnCreateInput
}
type UserSessionsConnectOrCreateFieldInputOnCreate =
  GqlUserSessionsConnectOrCreateFieldInputOnCreate

export interface GqlUserSessionsCreateFieldInput {
  node: UserSessionCreateInput
}
type UserSessionsCreateFieldInput = GqlUserSessionsCreateFieldInput

export interface GqlUserSessionsDeleteFieldInput {
  where?: UserSessionsConnectionWhere
  delete?: UserSessionDeleteInput
}
type UserSessionsDeleteFieldInput = GqlUserSessionsDeleteFieldInput

export interface GqlUserSessionsDisconnectFieldInput {
  where?: UserSessionsConnectionWhere
  disconnect?: UserSessionDisconnectInput
}
type UserSessionsDisconnectFieldInput =
  GqlUserSessionsDisconnectFieldInput

export interface GqlUserSessionsFieldInput {
  create?: UserSessionsCreateFieldInput[]
  connect?: UserSessionsConnectFieldInput[]
  connectOrCreate?: UserSessionsConnectOrCreateFieldInput[]
}
type UserSessionsFieldInput = GqlUserSessionsFieldInput

export interface GqlUserSessionsNodeAggregationWhereInput {
  AND?: UserSessionsNodeAggregationWhereInput[]
  OR?: UserSessionsNodeAggregationWhereInput[]
  id_EQUAL?: ID
  deviceName_EQUAL?: String
  deviceName_AVERAGE_EQUAL?: Float
  deviceName_LONGEST_EQUAL?: Int
  deviceName_SHORTEST_EQUAL?: Int
  deviceName_GT?: Int
  deviceName_AVERAGE_GT?: Float
  deviceName_LONGEST_GT?: Int
  deviceName_SHORTEST_GT?: Int
  deviceName_GTE?: Int
  deviceName_AVERAGE_GTE?: Float
  deviceName_LONGEST_GTE?: Int
  deviceName_SHORTEST_GTE?: Int
  deviceName_LT?: Int
  deviceName_AVERAGE_LT?: Float
  deviceName_LONGEST_LT?: Int
  deviceName_SHORTEST_LT?: Int
  deviceName_LTE?: Int
  deviceName_AVERAGE_LTE?: Float
  deviceName_LONGEST_LTE?: Int
  deviceName_SHORTEST_LTE?: Int
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type UserSessionsNodeAggregationWhereInput =
  GqlUserSessionsNodeAggregationWhereInput

export interface GqlUserSessionSort {
  id?: SortDirection
  deviceName?: SortDirection
  platform?: SortDirection
  createdAt?: SortDirection
}
type UserSessionSort = GqlUserSessionSort

export interface GqlUserSessionsUpdateConnectionInput {
  node?: UserSessionUpdateInput
}
type UserSessionsUpdateConnectionInput =
  GqlUserSessionsUpdateConnectionInput

export interface GqlUserSessionsUpdateFieldInput {
  where?: UserSessionsConnectionWhere
  update?: UserSessionsUpdateConnectionInput
  connect?: UserSessionsConnectFieldInput[]
  disconnect?: UserSessionsDisconnectFieldInput[]
  create?: UserSessionsCreateFieldInput[]
  delete?: UserSessionsDeleteFieldInput[]
  connectOrCreate?: UserSessionsConnectOrCreateFieldInput[]
}
type UserSessionsUpdateFieldInput = GqlUserSessionsUpdateFieldInput

export interface GqlUserSessionUniqueWhere {
  id?: ID
}
type UserSessionUniqueWhere = GqlUserSessionUniqueWhere

export interface GqlUserSessionUpdateInput {
  deviceName?: String
  platform?: Platform
  user?: UserSessionUserUpdateFieldInput
}
type UserSessionUpdateInput = GqlUserSessionUpdateInput

export interface GqlUserSessionUserAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: UserSessionUserAggregateInput[]
  OR?: UserSessionUserAggregateInput[]
  node?: UserSessionUserNodeAggregationWhereInput
}
type UserSessionUserAggregateInput = GqlUserSessionUserAggregateInput

export interface GqlUserSessionUserConnectFieldInput {
  where?: UserConnectWhere
  connect?: UserConnectInput
}
type UserSessionUserConnectFieldInput =
  GqlUserSessionUserConnectFieldInput

export interface GqlUserSessionUserConnectionSort {
  node?: UserSort
}
type UserSessionUserConnectionSort = GqlUserSessionUserConnectionSort

export interface GqlUserSessionUserConnectionWhere {
  AND?: UserSessionUserConnectionWhere[]
  OR?: UserSessionUserConnectionWhere[]
  node?: UserWhere
  node_NOT?: UserWhere
}
type UserSessionUserConnectionWhere =
  GqlUserSessionUserConnectionWhere

export interface GqlUserSessionUserConnectOrCreateFieldInput {
  where: UserConnectOrCreateWhere
  onCreate: UserSessionUserConnectOrCreateFieldInputOnCreate
}
type UserSessionUserConnectOrCreateFieldInput =
  GqlUserSessionUserConnectOrCreateFieldInput

export interface GqlUserSessionUserConnectOrCreateFieldInputOnCreate {
  node: UserOnCreateInput
}
type UserSessionUserConnectOrCreateFieldInputOnCreate =
  GqlUserSessionUserConnectOrCreateFieldInputOnCreate

export interface GqlUserSessionUserCreateFieldInput {
  node: UserCreateInput
}
type UserSessionUserCreateFieldInput =
  GqlUserSessionUserCreateFieldInput

export interface GqlUserSessionUserDeleteFieldInput {
  where?: UserSessionUserConnectionWhere
  delete?: UserDeleteInput
}
type UserSessionUserDeleteFieldInput =
  GqlUserSessionUserDeleteFieldInput

export interface GqlUserSessionUserDisconnectFieldInput {
  where?: UserSessionUserConnectionWhere
  disconnect?: UserDisconnectInput
}
type UserSessionUserDisconnectFieldInput =
  GqlUserSessionUserDisconnectFieldInput

export interface GqlUserSessionUserFieldInput {
  create?: UserSessionUserCreateFieldInput
  connect?: UserSessionUserConnectFieldInput
  connectOrCreate?: UserSessionUserConnectOrCreateFieldInput
}
type UserSessionUserFieldInput = GqlUserSessionUserFieldInput

export interface GqlUserSessionUserNodeAggregationWhereInput {
  AND?: UserSessionUserNodeAggregationWhereInput[]
  OR?: UserSessionUserNodeAggregationWhereInput[]
  id_EQUAL?: ID
  name_EQUAL?: String
  name_AVERAGE_EQUAL?: Float
  name_LONGEST_EQUAL?: Int
  name_SHORTEST_EQUAL?: Int
  name_GT?: Int
  name_AVERAGE_GT?: Float
  name_LONGEST_GT?: Int
  name_SHORTEST_GT?: Int
  name_GTE?: Int
  name_AVERAGE_GTE?: Float
  name_LONGEST_GTE?: Int
  name_SHORTEST_GTE?: Int
  name_LT?: Int
  name_AVERAGE_LT?: Float
  name_LONGEST_LT?: Int
  name_SHORTEST_LT?: Int
  name_LTE?: Int
  name_AVERAGE_LTE?: Float
  name_LONGEST_LTE?: Int
  name_SHORTEST_LTE?: Int
  email_EQUAL?: String
  email_AVERAGE_EQUAL?: Float
  email_LONGEST_EQUAL?: Int
  email_SHORTEST_EQUAL?: Int
  email_GT?: Int
  email_AVERAGE_GT?: Float
  email_LONGEST_GT?: Int
  email_SHORTEST_GT?: Int
  email_GTE?: Int
  email_AVERAGE_GTE?: Float
  email_LONGEST_GTE?: Int
  email_SHORTEST_GTE?: Int
  email_LT?: Int
  email_AVERAGE_LT?: Float
  email_LONGEST_LT?: Int
  email_SHORTEST_LT?: Int
  email_LTE?: Int
  email_AVERAGE_LTE?: Float
  email_LONGEST_LTE?: Int
  email_SHORTEST_LTE?: Int
  walletAddress_EQUAL?: String
  walletAddress_AVERAGE_EQUAL?: Float
  walletAddress_LONGEST_EQUAL?: Int
  walletAddress_SHORTEST_EQUAL?: Int
  walletAddress_GT?: Int
  walletAddress_AVERAGE_GT?: Float
  walletAddress_LONGEST_GT?: Int
  walletAddress_SHORTEST_GT?: Int
  walletAddress_GTE?: Int
  walletAddress_AVERAGE_GTE?: Float
  walletAddress_LONGEST_GTE?: Int
  walletAddress_SHORTEST_GTE?: Int
  walletAddress_LT?: Int
  walletAddress_AVERAGE_LT?: Float
  walletAddress_LONGEST_LT?: Int
  walletAddress_SHORTEST_LT?: Int
  walletAddress_LTE?: Int
  walletAddress_AVERAGE_LTE?: Float
  walletAddress_LONGEST_LTE?: Int
  walletAddress_SHORTEST_LTE?: Int
  tokens_EQUAL?: Int
  tokens_AVERAGE_EQUAL?: Float
  tokens_MIN_EQUAL?: Int
  tokens_MAX_EQUAL?: Int
  tokens_SUM_EQUAL?: Int
  tokens_GT?: Int
  tokens_AVERAGE_GT?: Float
  tokens_MIN_GT?: Int
  tokens_MAX_GT?: Int
  tokens_SUM_GT?: Int
  tokens_GTE?: Int
  tokens_AVERAGE_GTE?: Float
  tokens_MIN_GTE?: Int
  tokens_MAX_GTE?: Int
  tokens_SUM_GTE?: Int
  tokens_LT?: Int
  tokens_AVERAGE_LT?: Float
  tokens_MIN_LT?: Int
  tokens_MAX_LT?: Int
  tokens_SUM_LT?: Int
  tokens_LTE?: Int
  tokens_AVERAGE_LTE?: Float
  tokens_MIN_LTE?: Int
  tokens_MAX_LTE?: Int
  tokens_SUM_LTE?: Int
  updatedAt_EQUAL?: DateTime
  updatedAt_MIN_EQUAL?: DateTime
  updatedAt_MAX_EQUAL?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_MIN_GT?: DateTime
  updatedAt_MAX_GT?: DateTime
  updatedAt_GTE?: DateTime
  updatedAt_MIN_GTE?: DateTime
  updatedAt_MAX_GTE?: DateTime
  updatedAt_LT?: DateTime
  updatedAt_MIN_LT?: DateTime
  updatedAt_MAX_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_MIN_LTE?: DateTime
  updatedAt_MAX_LTE?: DateTime
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type UserSessionUserNodeAggregationWhereInput =
  GqlUserSessionUserNodeAggregationWhereInput

export interface GqlUserSessionUserUpdateConnectionInput {
  node?: UserUpdateInput
}
type UserSessionUserUpdateConnectionInput =
  GqlUserSessionUserUpdateConnectionInput

export interface GqlUserSessionUserUpdateFieldInput {
  where?: UserSessionUserConnectionWhere
  update?: UserSessionUserUpdateConnectionInput
  connect?: UserSessionUserConnectFieldInput
  disconnect?: UserSessionUserDisconnectFieldInput
  create?: UserSessionUserCreateFieldInput
  delete?: UserSessionUserDeleteFieldInput
  connectOrCreate?: UserSessionUserConnectOrCreateFieldInput
}
type UserSessionUserUpdateFieldInput =
  GqlUserSessionUserUpdateFieldInput

export interface GqlUserSessionWhere {
  OR?: UserSessionWhere[]
  AND?: UserSessionWhere[]
  id?: ID
  id_NOT?: ID
  id_IN?: ID[]
  id_NOT_IN?: ID[]
  id_CONTAINS?: ID
  id_NOT_CONTAINS?: ID
  id_STARTS_WITH?: ID
  id_NOT_STARTS_WITH?: ID
  id_ENDS_WITH?: ID
  id_NOT_ENDS_WITH?: ID
  deviceName?: String
  deviceName_NOT?: String
  deviceName_IN?: (String | undefined)[]
  deviceName_NOT_IN?: (String | undefined)[]
  deviceName_CONTAINS?: String
  deviceName_NOT_CONTAINS?: String
  deviceName_STARTS_WITH?: String
  deviceName_NOT_STARTS_WITH?: String
  deviceName_ENDS_WITH?: String
  deviceName_NOT_ENDS_WITH?: String
  createdAt?: DateTime
  createdAt_NOT?: DateTime
  createdAt_IN?: DateTime[]
  createdAt_NOT_IN?: DateTime[]
  createdAt_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_GT?: DateTime
  createdAt_GTE?: DateTime
  platform?: Platform
  platform_NOT?: Platform
  platform_IN?: Platform[]
  platform_NOT_IN?: Platform[]
  user?: UserWhere
  user_NOT?: UserWhere
  userAggregate?: UserSessionUserAggregateInput
  userConnection?: UserSessionUserConnectionWhere
  userConnection_NOT?: UserSessionUserConnectionWhere
}
type UserSessionWhere = GqlUserSessionWhere

export interface GqlUserSort {
  id?: SortDirection
  name?: SortDirection
  email?: SortDirection
  walletAddress?: SortDirection
  tokens?: SortDirection
  status?: SortDirection
  updatedAt?: SortDirection
  createdAt?: SortDirection
}
type UserSort = GqlUserSort

export interface GqlUserUniqueWhere {
  id?: ID
}
type UserUniqueWhere = GqlUserUniqueWhere

export interface GqlUserUpdateInput {
  name?: String
  email?: String
  walletAddress?: String
  tokens?: Int
  status?: UserStatus
  tokens_INCREMENT?: Int
  tokens_DECREMENT?: Int
  sessions?: UserSessionsUpdateFieldInput[]
  vip?: UserVipUpdateFieldInput
}
type UserUpdateInput = GqlUserUpdateInput

export interface GqlUserVipAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: UserVipAggregateInput[]
  OR?: UserVipAggregateInput[]
  node?: UserVipNodeAggregationWhereInput
}
type UserVipAggregateInput = GqlUserVipAggregateInput

export interface GqlUserVipConnectFieldInput {
  where?: VIPMembershipConnectWhere
  connect?: VIPMembershipConnectInput
}
type UserVipConnectFieldInput = GqlUserVipConnectFieldInput

export interface GqlUserVipConnectionSort {
  node?: VIPMembershipSort
}
type UserVipConnectionSort = GqlUserVipConnectionSort

export interface GqlUserVipConnectionWhere {
  AND?: UserVipConnectionWhere[]
  OR?: UserVipConnectionWhere[]
  node?: VIPMembershipWhere
  node_NOT?: VIPMembershipWhere
}
type UserVipConnectionWhere = GqlUserVipConnectionWhere

export interface GqlUserVipConnectOrCreateFieldInput {
  where: VIPMembershipConnectOrCreateWhere
  onCreate: UserVipConnectOrCreateFieldInputOnCreate
}
type UserVipConnectOrCreateFieldInput =
  GqlUserVipConnectOrCreateFieldInput

export interface GqlUserVipConnectOrCreateFieldInputOnCreate {
  node: VIPMembershipOnCreateInput
}
type UserVipConnectOrCreateFieldInputOnCreate =
  GqlUserVipConnectOrCreateFieldInputOnCreate

export interface GqlUserVipCreateFieldInput {
  node: VIPMembershipCreateInput
}
type UserVipCreateFieldInput = GqlUserVipCreateFieldInput

export interface GqlUserVipDeleteFieldInput {
  where?: UserVipConnectionWhere
  delete?: VIPMembershipDeleteInput
}
type UserVipDeleteFieldInput = GqlUserVipDeleteFieldInput

export interface GqlUserVipDisconnectFieldInput {
  where?: UserVipConnectionWhere
  disconnect?: VIPMembershipDisconnectInput
}
type UserVipDisconnectFieldInput = GqlUserVipDisconnectFieldInput

export interface GqlUserVipFieldInput {
  create?: UserVipCreateFieldInput
  connect?: UserVipConnectFieldInput
  connectOrCreate?: UserVipConnectOrCreateFieldInput
}
type UserVipFieldInput = GqlUserVipFieldInput

export interface GqlUserVipNodeAggregationWhereInput {
  AND?: UserVipNodeAggregationWhereInput[]
  OR?: UserVipNodeAggregationWhereInput[]
  id_EQUAL?: ID
  expiresAt_EQUAL?: DateTime
  expiresAt_MIN_EQUAL?: DateTime
  expiresAt_MAX_EQUAL?: DateTime
  expiresAt_GT?: DateTime
  expiresAt_MIN_GT?: DateTime
  expiresAt_MAX_GT?: DateTime
  expiresAt_GTE?: DateTime
  expiresAt_MIN_GTE?: DateTime
  expiresAt_MAX_GTE?: DateTime
  expiresAt_LT?: DateTime
  expiresAt_MIN_LT?: DateTime
  expiresAt_MAX_LT?: DateTime
  expiresAt_LTE?: DateTime
  expiresAt_MIN_LTE?: DateTime
  expiresAt_MAX_LTE?: DateTime
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type UserVipNodeAggregationWhereInput =
  GqlUserVipNodeAggregationWhereInput

export interface GqlUserVipUpdateConnectionInput {
  node?: VIPMembershipUpdateInput
}
type UserVipUpdateConnectionInput = GqlUserVipUpdateConnectionInput

export interface GqlUserVipUpdateFieldInput {
  where?: UserVipConnectionWhere
  update?: UserVipUpdateConnectionInput
  connect?: UserVipConnectFieldInput
  disconnect?: UserVipDisconnectFieldInput
  create?: UserVipCreateFieldInput
  delete?: UserVipDeleteFieldInput
  connectOrCreate?: UserVipConnectOrCreateFieldInput
}
type UserVipUpdateFieldInput = GqlUserVipUpdateFieldInput

export interface GqlUserWhere {
  OR?: UserWhere[]
  AND?: UserWhere[]
  id?: ID
  id_NOT?: ID
  id_IN?: ID[]
  id_NOT_IN?: ID[]
  id_CONTAINS?: ID
  id_NOT_CONTAINS?: ID
  id_STARTS_WITH?: ID
  id_NOT_STARTS_WITH?: ID
  id_ENDS_WITH?: ID
  id_NOT_ENDS_WITH?: ID
  name?: String
  name_NOT?: String
  name_IN?: String[]
  name_NOT_IN?: String[]
  name_CONTAINS?: String
  name_NOT_CONTAINS?: String
  name_STARTS_WITH?: String
  name_NOT_STARTS_WITH?: String
  name_ENDS_WITH?: String
  name_NOT_ENDS_WITH?: String
  email?: String
  email_NOT?: String
  email_IN?: (String | undefined)[]
  email_NOT_IN?: (String | undefined)[]
  email_CONTAINS?: String
  email_NOT_CONTAINS?: String
  email_STARTS_WITH?: String
  email_NOT_STARTS_WITH?: String
  email_ENDS_WITH?: String
  email_NOT_ENDS_WITH?: String
  walletAddress?: String
  walletAddress_NOT?: String
  walletAddress_IN?: (String | undefined)[]
  walletAddress_NOT_IN?: (String | undefined)[]
  walletAddress_CONTAINS?: String
  walletAddress_NOT_CONTAINS?: String
  walletAddress_STARTS_WITH?: String
  walletAddress_NOT_STARTS_WITH?: String
  walletAddress_ENDS_WITH?: String
  walletAddress_NOT_ENDS_WITH?: String
  tokens?: Int
  tokens_NOT?: Int
  tokens_IN?: Int[]
  tokens_NOT_IN?: Int[]
  tokens_LT?: Int
  tokens_LTE?: Int
  tokens_GT?: Int
  tokens_GTE?: Int
  updatedAt?: DateTime
  updatedAt_NOT?: DateTime
  updatedAt_IN?: (DateTime | undefined)[]
  updatedAt_NOT_IN?: (DateTime | undefined)[]
  updatedAt_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_GTE?: DateTime
  createdAt?: DateTime
  createdAt_NOT?: DateTime
  createdAt_IN?: DateTime[]
  createdAt_NOT_IN?: DateTime[]
  createdAt_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_GT?: DateTime
  createdAt_GTE?: DateTime
  status?: UserStatus
  status_NOT?: UserStatus
  status_IN?: UserStatus[]
  status_NOT_IN?: UserStatus[]
  sessionsAggregate?: UserSessionsAggregateInput
  sessions_ALL?: UserSessionWhere
  sessions_NONE?: UserSessionWhere
  sessions_SINGLE?: UserSessionWhere
  sessions_SOME?: UserSessionWhere
  vip?: VIPMembershipWhere
  vip_NOT?: VIPMembershipWhere
  vipAggregate?: UserVipAggregateInput
  sessionsConnection_ALL?: UserSessionsConnectionWhere
  sessionsConnection_NONE?: UserSessionsConnectionWhere
  sessionsConnection_SINGLE?: UserSessionsConnectionWhere
  sessionsConnection_SOME?: UserSessionsConnectionWhere
  vipConnection?: UserVipConnectionWhere
  vipConnection_NOT?: UserVipConnectionWhere
}
type UserWhere = GqlUserWhere

export interface GqlVIPMembershipConnectInput {
  user?: VIPMembershipUserConnectFieldInput
}
type VIPMembershipConnectInput = GqlVIPMembershipConnectInput

export interface GqlVIPMembershipConnectOrCreateInput {
  user?: VIPMembershipUserConnectOrCreateFieldInput
}
type VIPMembershipConnectOrCreateInput =
  GqlVIPMembershipConnectOrCreateInput

export interface GqlVIPMembershipConnectOrCreateWhere {
  node: VIPMembershipUniqueWhere
}
type VIPMembershipConnectOrCreateWhere =
  GqlVIPMembershipConnectOrCreateWhere

export interface GqlVIPMembershipConnectWhere {
  node: VIPMembershipWhere
}
type VIPMembershipConnectWhere = GqlVIPMembershipConnectWhere

export interface GqlVIPMembershipCreateInput {
  expiresAt: DateTime
  user?: VIPMembershipUserFieldInput
}
type VIPMembershipCreateInput = GqlVIPMembershipCreateInput

export interface GqlVIPMembershipDeleteInput {
  user?: VIPMembershipUserDeleteFieldInput
}
type VIPMembershipDeleteInput = GqlVIPMembershipDeleteInput

export interface GqlVIPMembershipDisconnectInput {
  user?: VIPMembershipUserDisconnectFieldInput
}
type VIPMembershipDisconnectInput = GqlVIPMembershipDisconnectInput

export interface GqlVIPMembershipOnCreateInput {
  expiresAt: DateTime
}
type VIPMembershipOnCreateInput = GqlVIPMembershipOnCreateInput

export interface GqlVIPMembershipOptions {
  sort?: VIPMembershipSort[]
  limit?: Int
  offset?: Int
}
type VIPMembershipOptions = GqlVIPMembershipOptions

export interface GqlVIPMembershipRelationInput {
  user?: VIPMembershipUserCreateFieldInput
}
type VIPMembershipRelationInput = GqlVIPMembershipRelationInput

export interface GqlVIPMembershipSort {
  id?: SortDirection
  expiresAt?: SortDirection
  createdAt?: SortDirection
}
type VIPMembershipSort = GqlVIPMembershipSort

export interface GqlVIPMembershipUniqueWhere {
  id?: ID
}
type VIPMembershipUniqueWhere = GqlVIPMembershipUniqueWhere

export interface GqlVIPMembershipUpdateInput {
  expiresAt?: DateTime
  user?: VIPMembershipUserUpdateFieldInput
}
type VIPMembershipUpdateInput = GqlVIPMembershipUpdateInput

export interface GqlVIPMembershipUserAggregateInput {
  count?: Int
  count_LT?: Int
  count_LTE?: Int
  count_GT?: Int
  count_GTE?: Int
  AND?: VIPMembershipUserAggregateInput[]
  OR?: VIPMembershipUserAggregateInput[]
  node?: VIPMembershipUserNodeAggregationWhereInput
}
type VIPMembershipUserAggregateInput =
  GqlVIPMembershipUserAggregateInput

export interface GqlVIPMembershipUserConnectFieldInput {
  where?: UserConnectWhere
  connect?: UserConnectInput
}
type VIPMembershipUserConnectFieldInput =
  GqlVIPMembershipUserConnectFieldInput

export interface GqlVIPMembershipUserConnectionSort {
  node?: UserSort
}
type VIPMembershipUserConnectionSort =
  GqlVIPMembershipUserConnectionSort

export interface GqlVIPMembershipUserConnectionWhere {
  AND?: VIPMembershipUserConnectionWhere[]
  OR?: VIPMembershipUserConnectionWhere[]
  node?: UserWhere
  node_NOT?: UserWhere
}
type VIPMembershipUserConnectionWhere =
  GqlVIPMembershipUserConnectionWhere

export interface GqlVIPMembershipUserConnectOrCreateFieldInput {
  where: UserConnectOrCreateWhere
  onCreate: VIPMembershipUserConnectOrCreateFieldInputOnCreate
}
type VIPMembershipUserConnectOrCreateFieldInput =
  GqlVIPMembershipUserConnectOrCreateFieldInput

export interface GqlVIPMembershipUserConnectOrCreateFieldInputOnCreate {
  node: UserOnCreateInput
}
type VIPMembershipUserConnectOrCreateFieldInputOnCreate =
  GqlVIPMembershipUserConnectOrCreateFieldInputOnCreate

export interface GqlVIPMembershipUserCreateFieldInput {
  node: UserCreateInput
}
type VIPMembershipUserCreateFieldInput =
  GqlVIPMembershipUserCreateFieldInput

export interface GqlVIPMembershipUserDeleteFieldInput {
  where?: VIPMembershipUserConnectionWhere
  delete?: UserDeleteInput
}
type VIPMembershipUserDeleteFieldInput =
  GqlVIPMembershipUserDeleteFieldInput

export interface GqlVIPMembershipUserDisconnectFieldInput {
  where?: VIPMembershipUserConnectionWhere
  disconnect?: UserDisconnectInput
}
type VIPMembershipUserDisconnectFieldInput =
  GqlVIPMembershipUserDisconnectFieldInput

export interface GqlVIPMembershipUserFieldInput {
  create?: VIPMembershipUserCreateFieldInput
  connect?: VIPMembershipUserConnectFieldInput
  connectOrCreate?: VIPMembershipUserConnectOrCreateFieldInput
}
type VIPMembershipUserFieldInput = GqlVIPMembershipUserFieldInput

export interface GqlVIPMembershipUserNodeAggregationWhereInput {
  AND?: VIPMembershipUserNodeAggregationWhereInput[]
  OR?: VIPMembershipUserNodeAggregationWhereInput[]
  id_EQUAL?: ID
  name_EQUAL?: String
  name_AVERAGE_EQUAL?: Float
  name_LONGEST_EQUAL?: Int
  name_SHORTEST_EQUAL?: Int
  name_GT?: Int
  name_AVERAGE_GT?: Float
  name_LONGEST_GT?: Int
  name_SHORTEST_GT?: Int
  name_GTE?: Int
  name_AVERAGE_GTE?: Float
  name_LONGEST_GTE?: Int
  name_SHORTEST_GTE?: Int
  name_LT?: Int
  name_AVERAGE_LT?: Float
  name_LONGEST_LT?: Int
  name_SHORTEST_LT?: Int
  name_LTE?: Int
  name_AVERAGE_LTE?: Float
  name_LONGEST_LTE?: Int
  name_SHORTEST_LTE?: Int
  email_EQUAL?: String
  email_AVERAGE_EQUAL?: Float
  email_LONGEST_EQUAL?: Int
  email_SHORTEST_EQUAL?: Int
  email_GT?: Int
  email_AVERAGE_GT?: Float
  email_LONGEST_GT?: Int
  email_SHORTEST_GT?: Int
  email_GTE?: Int
  email_AVERAGE_GTE?: Float
  email_LONGEST_GTE?: Int
  email_SHORTEST_GTE?: Int
  email_LT?: Int
  email_AVERAGE_LT?: Float
  email_LONGEST_LT?: Int
  email_SHORTEST_LT?: Int
  email_LTE?: Int
  email_AVERAGE_LTE?: Float
  email_LONGEST_LTE?: Int
  email_SHORTEST_LTE?: Int
  walletAddress_EQUAL?: String
  walletAddress_AVERAGE_EQUAL?: Float
  walletAddress_LONGEST_EQUAL?: Int
  walletAddress_SHORTEST_EQUAL?: Int
  walletAddress_GT?: Int
  walletAddress_AVERAGE_GT?: Float
  walletAddress_LONGEST_GT?: Int
  walletAddress_SHORTEST_GT?: Int
  walletAddress_GTE?: Int
  walletAddress_AVERAGE_GTE?: Float
  walletAddress_LONGEST_GTE?: Int
  walletAddress_SHORTEST_GTE?: Int
  walletAddress_LT?: Int
  walletAddress_AVERAGE_LT?: Float
  walletAddress_LONGEST_LT?: Int
  walletAddress_SHORTEST_LT?: Int
  walletAddress_LTE?: Int
  walletAddress_AVERAGE_LTE?: Float
  walletAddress_LONGEST_LTE?: Int
  walletAddress_SHORTEST_LTE?: Int
  tokens_EQUAL?: Int
  tokens_AVERAGE_EQUAL?: Float
  tokens_MIN_EQUAL?: Int
  tokens_MAX_EQUAL?: Int
  tokens_SUM_EQUAL?: Int
  tokens_GT?: Int
  tokens_AVERAGE_GT?: Float
  tokens_MIN_GT?: Int
  tokens_MAX_GT?: Int
  tokens_SUM_GT?: Int
  tokens_GTE?: Int
  tokens_AVERAGE_GTE?: Float
  tokens_MIN_GTE?: Int
  tokens_MAX_GTE?: Int
  tokens_SUM_GTE?: Int
  tokens_LT?: Int
  tokens_AVERAGE_LT?: Float
  tokens_MIN_LT?: Int
  tokens_MAX_LT?: Int
  tokens_SUM_LT?: Int
  tokens_LTE?: Int
  tokens_AVERAGE_LTE?: Float
  tokens_MIN_LTE?: Int
  tokens_MAX_LTE?: Int
  tokens_SUM_LTE?: Int
  updatedAt_EQUAL?: DateTime
  updatedAt_MIN_EQUAL?: DateTime
  updatedAt_MAX_EQUAL?: DateTime
  updatedAt_GT?: DateTime
  updatedAt_MIN_GT?: DateTime
  updatedAt_MAX_GT?: DateTime
  updatedAt_GTE?: DateTime
  updatedAt_MIN_GTE?: DateTime
  updatedAt_MAX_GTE?: DateTime
  updatedAt_LT?: DateTime
  updatedAt_MIN_LT?: DateTime
  updatedAt_MAX_LT?: DateTime
  updatedAt_LTE?: DateTime
  updatedAt_MIN_LTE?: DateTime
  updatedAt_MAX_LTE?: DateTime
  createdAt_EQUAL?: DateTime
  createdAt_MIN_EQUAL?: DateTime
  createdAt_MAX_EQUAL?: DateTime
  createdAt_GT?: DateTime
  createdAt_MIN_GT?: DateTime
  createdAt_MAX_GT?: DateTime
  createdAt_GTE?: DateTime
  createdAt_MIN_GTE?: DateTime
  createdAt_MAX_GTE?: DateTime
  createdAt_LT?: DateTime
  createdAt_MIN_LT?: DateTime
  createdAt_MAX_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_MIN_LTE?: DateTime
  createdAt_MAX_LTE?: DateTime
}
type VIPMembershipUserNodeAggregationWhereInput =
  GqlVIPMembershipUserNodeAggregationWhereInput

export interface GqlVIPMembershipUserUpdateConnectionInput {
  node?: UserUpdateInput
}
type VIPMembershipUserUpdateConnectionInput =
  GqlVIPMembershipUserUpdateConnectionInput

export interface GqlVIPMembershipUserUpdateFieldInput {
  where?: VIPMembershipUserConnectionWhere
  update?: VIPMembershipUserUpdateConnectionInput
  connect?: VIPMembershipUserConnectFieldInput
  disconnect?: VIPMembershipUserDisconnectFieldInput
  create?: VIPMembershipUserCreateFieldInput
  delete?: VIPMembershipUserDeleteFieldInput
  connectOrCreate?: VIPMembershipUserConnectOrCreateFieldInput
}
type VIPMembershipUserUpdateFieldInput =
  GqlVIPMembershipUserUpdateFieldInput

export interface GqlVIPMembershipWhere {
  OR?: VIPMembershipWhere[]
  AND?: VIPMembershipWhere[]
  id?: ID
  id_NOT?: ID
  id_IN?: ID[]
  id_NOT_IN?: ID[]
  id_CONTAINS?: ID
  id_NOT_CONTAINS?: ID
  id_STARTS_WITH?: ID
  id_NOT_STARTS_WITH?: ID
  id_ENDS_WITH?: ID
  id_NOT_ENDS_WITH?: ID
  expiresAt?: DateTime
  expiresAt_NOT?: DateTime
  expiresAt_IN?: DateTime[]
  expiresAt_NOT_IN?: DateTime[]
  expiresAt_LT?: DateTime
  expiresAt_LTE?: DateTime
  expiresAt_GT?: DateTime
  expiresAt_GTE?: DateTime
  createdAt?: DateTime
  createdAt_NOT?: DateTime
  createdAt_IN?: DateTime[]
  createdAt_NOT_IN?: DateTime[]
  createdAt_LT?: DateTime
  createdAt_LTE?: DateTime
  createdAt_GT?: DateTime
  createdAt_GTE?: DateTime
  user?: UserWhere
  user_NOT?: UserWhere
  userAggregate?: VIPMembershipUserAggregateInput
  userConnection?: VIPMembershipUserConnectionWhere
  userConnection_NOT?: VIPMembershipUserConnectionWhere
}
type VIPMembershipWhere = GqlVIPMembershipWhere

export interface GqlCreateGameRoomsMutationResponse {
  info: CreateInfo
  gameRooms: GameRoom[]
}
type CreateGameRoomsMutationResponse =
  GqlCreateGameRoomsMutationResponse

export interface GqlCreateGamesMutationResponse {
  info: CreateInfo
  games: Game[]
}
type CreateGamesMutationResponse = GqlCreateGamesMutationResponse

export interface GqlCreateInfo {
  bookmark?: String
  nodesCreated: Int
  relationshipsCreated: Int
}
type CreateInfo = GqlCreateInfo

export interface GqlCreateUserSessionsMutationResponse {
  info: CreateInfo
  userSessions: UserSession[]
}
type CreateUserSessionsMutationResponse =
  GqlCreateUserSessionsMutationResponse

export interface GqlCreateUsersMutationResponse {
  info: CreateInfo
  users: User[]
}
type CreateUsersMutationResponse = GqlCreateUsersMutationResponse

export interface GqlCreateVipMembershipsMutationResponse {
  info: CreateInfo
  vipMemberships: VIPMembership[]
}
type CreateVipMembershipsMutationResponse =
  GqlCreateVipMembershipsMutationResponse

export interface GqlDateTimeAggregateSelectionNonNullable {
  min: DateTime
  max: DateTime
}
type DateTimeAggregateSelectionNonNullable =
  GqlDateTimeAggregateSelectionNonNullable

export interface GqlDateTimeAggregateSelectionNullable {
  min?: DateTime
  max?: DateTime
}
type DateTimeAggregateSelectionNullable =
  GqlDateTimeAggregateSelectionNullable

export interface GqlDeleteInfo {
  bookmark?: String
  nodesDeleted: Int
  relationshipsDeleted: Int
}
type DeleteInfo = GqlDeleteInfo

export interface GqlGame {
  id: ID
  name: String
  updatedAt?: DateTime
  createdAt: DateTime
}
type Game = GqlGame

export interface GqlGameAggregateSelection {
  count: Int
  id: IDAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type GameAggregateSelection = GqlGameAggregateSelection

export interface GqlGameEdge {
  cursor: String
  node: Game
}
type GameEdge = GqlGameEdge

export interface GqlGameRoom {
  id: ID
  config?: String
  updatedAt?: DateTime
  createdAt: DateTime
  game: Game
  gameAggregate?: GameRoomGameGameAggregationSelection
  viewers: User[]
  viewersAggregate?: GameRoomUserViewersAggregationSelection
  players: User[]
  playersAggregate?: GameRoomUserPlayersAggregationSelection
  nextRoom?: GameRoom
  nextRoomAggregate?: GameRoomGameRoomNextRoomAggregationSelection
  gameConnection: GameRoomGameConnection
  viewersConnection: GameRoomViewersConnection
  playersConnection: GameRoomPlayersConnection
  nextRoomConnection: GameRoomNextRoomConnection
}
type GameRoom = GqlGameRoom

export interface GqlGameRoomAggregateSelection {
  count: Int
  id: IDAggregateSelectionNonNullable
  config: StringAggregateSelectionNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type GameRoomAggregateSelection = GqlGameRoomAggregateSelection

export interface GqlGameRoomEdge {
  cursor: String
  node: GameRoom
}
type GameRoomEdge = GqlGameRoomEdge

export interface GqlGameRoomGameConnection {
  edges: GameRoomGameRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type GameRoomGameConnection = GqlGameRoomGameConnection

export interface GqlGameRoomGameGameAggregationSelection {
  count: Int
  node?: GameRoomGameGameNodeAggregateSelection
}
type GameRoomGameGameAggregationSelection =
  GqlGameRoomGameGameAggregationSelection

export interface GqlGameRoomGameGameNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type GameRoomGameGameNodeAggregateSelection =
  GqlGameRoomGameGameNodeAggregateSelection

export interface GqlGameRoomGameRelationship {
  cursor: String
  node: Game
}
type GameRoomGameRelationship = GqlGameRoomGameRelationship

export interface GqlGameRoomGameRoomNextRoomAggregationSelection {
  count: Int
  node?: GameRoomGameRoomNextRoomNodeAggregateSelection
}
type GameRoomGameRoomNextRoomAggregationSelection =
  GqlGameRoomGameRoomNextRoomAggregationSelection

export interface GqlGameRoomGameRoomNextRoomNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  config: StringAggregateSelectionNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type GameRoomGameRoomNextRoomNodeAggregateSelection =
  GqlGameRoomGameRoomNextRoomNodeAggregateSelection

export interface GqlGameRoomNextRoomConnection {
  edges: GameRoomNextRoomRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type GameRoomNextRoomConnection = GqlGameRoomNextRoomConnection

export interface GqlGameRoomNextRoomRelationship {
  cursor: String
  node: GameRoom
}
type GameRoomNextRoomRelationship = GqlGameRoomNextRoomRelationship

export interface GqlGameRoomPlayersConnection {
  edges: GameRoomPlayersRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type GameRoomPlayersConnection = GqlGameRoomPlayersConnection

export interface GqlGameRoomPlayersRelationship {
  cursor: String
  node: User
}
type GameRoomPlayersRelationship = GqlGameRoomPlayersRelationship

export interface GqlGameRoomsConnection {
  totalCount: Int
  pageInfo: PageInfo
  edges: GameRoomEdge[]
}
type GameRoomsConnection = GqlGameRoomsConnection

export interface GqlGameRoomUserPlayersAggregationSelection {
  count: Int
  node?: GameRoomUserPlayersNodeAggregateSelection
}
type GameRoomUserPlayersAggregationSelection =
  GqlGameRoomUserPlayersAggregationSelection

export interface GqlGameRoomUserPlayersNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNullable
  walletAddress: StringAggregateSelectionNullable
  tokens: IntAggregateSelectionNonNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type GameRoomUserPlayersNodeAggregateSelection =
  GqlGameRoomUserPlayersNodeAggregateSelection

export interface GqlGameRoomUserViewersAggregationSelection {
  count: Int
  node?: GameRoomUserViewersNodeAggregateSelection
}
type GameRoomUserViewersAggregationSelection =
  GqlGameRoomUserViewersAggregationSelection

export interface GqlGameRoomUserViewersNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNullable
  walletAddress: StringAggregateSelectionNullable
  tokens: IntAggregateSelectionNonNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type GameRoomUserViewersNodeAggregateSelection =
  GqlGameRoomUserViewersNodeAggregateSelection

export interface GqlGameRoomViewersConnection {
  edges: GameRoomViewersRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type GameRoomViewersConnection = GqlGameRoomViewersConnection

export interface GqlGameRoomViewersRelationship {
  cursor: String
  node: User
}
type GameRoomViewersRelationship = GqlGameRoomViewersRelationship

export interface GqlGamesConnection {
  totalCount: Int
  pageInfo: PageInfo
  edges: GameEdge[]
}
type GamesConnection = GqlGamesConnection

export interface GqlIDAggregateSelectionNonNullable {
  shortest: ID
  longest: ID
}
type IDAggregateSelectionNonNullable =
  GqlIDAggregateSelectionNonNullable

export interface GqlIntAggregateSelectionNonNullable {
  max: Int
  min: Int
  average: Float
  sum: Int
}
type IntAggregateSelectionNonNullable =
  GqlIntAggregateSelectionNonNullable

export interface GqlPageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}
type PageInfo = GqlPageInfo

export interface GqlStringAggregateSelectionNonNullable {
  shortest: String
  longest: String
}
type StringAggregateSelectionNonNullable =
  GqlStringAggregateSelectionNonNullable

export interface GqlStringAggregateSelectionNullable {
  shortest?: String
  longest?: String
}
type StringAggregateSelectionNullable =
  GqlStringAggregateSelectionNullable

export interface GqlUpdateGameRoomsMutationResponse {
  info: UpdateInfo
  gameRooms: GameRoom[]
}
type UpdateGameRoomsMutationResponse =
  GqlUpdateGameRoomsMutationResponse

export interface GqlUpdateGamesMutationResponse {
  info: UpdateInfo
  games: Game[]
}
type UpdateGamesMutationResponse = GqlUpdateGamesMutationResponse

export interface GqlUpdateInfo {
  bookmark?: String
  nodesCreated: Int
  nodesDeleted: Int
  relationshipsCreated: Int
  relationshipsDeleted: Int
}
type UpdateInfo = GqlUpdateInfo

export interface GqlUpdateUserSessionsMutationResponse {
  info: UpdateInfo
  userSessions: UserSession[]
}
type UpdateUserSessionsMutationResponse =
  GqlUpdateUserSessionsMutationResponse

export interface GqlUpdateUsersMutationResponse {
  info: UpdateInfo
  users: User[]
}
type UpdateUsersMutationResponse = GqlUpdateUsersMutationResponse

export interface GqlUpdateVipMembershipsMutationResponse {
  info: UpdateInfo
  vipMemberships: VIPMembership[]
}
type UpdateVipMembershipsMutationResponse =
  GqlUpdateVipMembershipsMutationResponse

export interface GqlUser {
  id: ID
  name: String
  email?: String
  walletAddress?: String
  tokens: Int
  status: UserStatus
  updatedAt?: DateTime
  createdAt: DateTime
  sessions: UserSession[]
  sessionsAggregate?: UserUserSessionSessionsAggregationSelection
  vip?: VIPMembership
  vipAggregate?: UserVIPMembershipVipAggregationSelection
  sessionsConnection: UserSessionsConnection
  vipConnection: UserVipConnection
}
type User = GqlUser

export interface GqlUserAggregateSelection {
  count: Int
  id: IDAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNullable
  walletAddress: StringAggregateSelectionNullable
  tokens: IntAggregateSelectionNonNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type UserAggregateSelection = GqlUserAggregateSelection

export interface GqlUserEdge {
  cursor: String
  node: User
}
type UserEdge = GqlUserEdge

export interface GqlUsersConnection {
  totalCount: Int
  pageInfo: PageInfo
  edges: UserEdge[]
}
type UsersConnection = GqlUsersConnection

export interface GqlUserSession {
  id: ID
  deviceName?: String
  platform: Platform
  createdAt: DateTime
  user: User
  userAggregate?: UserSessionUserUserAggregationSelection
  userConnection: UserSessionUserConnection
}
type UserSession = GqlUserSession

export interface GqlUserSessionAggregateSelection {
  count: Int
  id: IDAggregateSelectionNonNullable
  deviceName: StringAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type UserSessionAggregateSelection = GqlUserSessionAggregateSelection

export interface GqlUserSessionEdge {
  cursor: String
  node: UserSession
}
type UserSessionEdge = GqlUserSessionEdge

export interface GqlUserSessionsConnection {
  edges: UserSessionsRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type UserSessionsConnection = GqlUserSessionsConnection

export interface GqlUserSessionsRelationship {
  cursor: String
  node: UserSession
}
type UserSessionsRelationship = GqlUserSessionsRelationship

export interface GqlUserSessionUserConnection {
  edges: UserSessionUserRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type UserSessionUserConnection = GqlUserSessionUserConnection

export interface GqlUserSessionUserRelationship {
  cursor: String
  node: User
}
type UserSessionUserRelationship = GqlUserSessionUserRelationship

export interface GqlUserSessionUserUserAggregationSelection {
  count: Int
  node?: UserSessionUserUserNodeAggregateSelection
}
type UserSessionUserUserAggregationSelection =
  GqlUserSessionUserUserAggregationSelection

export interface GqlUserSessionUserUserNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNullable
  walletAddress: StringAggregateSelectionNullable
  tokens: IntAggregateSelectionNonNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type UserSessionUserUserNodeAggregateSelection =
  GqlUserSessionUserUserNodeAggregateSelection

export interface GqlUserUserSessionSessionsAggregationSelection {
  count: Int
  node?: UserUserSessionSessionsNodeAggregateSelection
}
type UserUserSessionSessionsAggregationSelection =
  GqlUserUserSessionSessionsAggregationSelection

export interface GqlUserUserSessionSessionsNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  deviceName: StringAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type UserUserSessionSessionsNodeAggregateSelection =
  GqlUserUserSessionSessionsNodeAggregateSelection

export interface GqlUserVipConnection {
  edges: UserVipRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type UserVipConnection = GqlUserVipConnection

export interface GqlUserVIPMembershipVipAggregationSelection {
  count: Int
  node?: UserVIPMembershipVipNodeAggregateSelection
}
type UserVIPMembershipVipAggregationSelection =
  GqlUserVIPMembershipVipAggregationSelection

export interface GqlUserVIPMembershipVipNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  expiresAt: DateTimeAggregateSelectionNonNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type UserVIPMembershipVipNodeAggregateSelection =
  GqlUserVIPMembershipVipNodeAggregateSelection

export interface GqlUserVipRelationship {
  cursor: String
  node: VIPMembership
}
type UserVipRelationship = GqlUserVipRelationship

export interface GqlVIPMembership {
  id: ID
  expiresAt: DateTime
  createdAt: DateTime
  user: User
  userAggregate?: VIPMembershipUserUserAggregationSelection
  userConnection: VIPMembershipUserConnection
}
type VIPMembership = GqlVIPMembership

export interface GqlVIPMembershipAggregateSelection {
  count: Int
  id: IDAggregateSelectionNonNullable
  expiresAt: DateTimeAggregateSelectionNonNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type VIPMembershipAggregateSelection =
  GqlVIPMembershipAggregateSelection

export interface GqlVIPMembershipEdge {
  cursor: String
  node: VIPMembership
}
type VIPMembershipEdge = GqlVIPMembershipEdge

export interface GqlVipMembershipsConnection {
  totalCount: Int
  pageInfo: PageInfo
  edges: VIPMembershipEdge[]
}
type VipMembershipsConnection = GqlVipMembershipsConnection

export interface GqlVIPMembershipUserConnection {
  edges: VIPMembershipUserRelationship[]
  totalCount: Int
  pageInfo: PageInfo
}
type VIPMembershipUserConnection = GqlVIPMembershipUserConnection

export interface GqlVIPMembershipUserRelationship {
  cursor: String
  node: User
}
type VIPMembershipUserRelationship = GqlVIPMembershipUserRelationship

export interface GqlVIPMembershipUserUserAggregationSelection {
  count: Int
  node?: VIPMembershipUserUserNodeAggregateSelection
}
type VIPMembershipUserUserAggregationSelection =
  GqlVIPMembershipUserUserAggregationSelection

export interface GqlVIPMembershipUserUserNodeAggregateSelection {
  id: IDAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNullable
  walletAddress: StringAggregateSelectionNullable
  tokens: IntAggregateSelectionNonNullable
  updatedAt: DateTimeAggregateSelectionNullable
  createdAt: DateTimeAggregateSelectionNonNullable
}
type VIPMembershipUserUserNodeAggregateSelection =
  GqlVIPMembershipUserUserNodeAggregateSelection

// Query props -----------------------------------
interface QueryUsersProps {
  where?: UserWhere
  options?: UserOptions
}

interface QueryUsersAggregateProps {
  where?: UserWhere
}

interface QueryUsersConnectionProps {
  first?: Int
  after?: String
  where?: UserWhere
  sort?: (UserSort | undefined)[]
}

interface QueryVipMembershipsProps {
  where?: VIPMembershipWhere
  options?: VIPMembershipOptions
}

interface QueryVipMembershipsAggregateProps {
  where?: VIPMembershipWhere
}

interface QueryVipMembershipsConnectionProps {
  first?: Int
  after?: String
  where?: VIPMembershipWhere
  sort?: (VIPMembershipSort | undefined)[]
}

interface QueryUserSessionsProps {
  where?: UserSessionWhere
  options?: UserSessionOptions
}

interface QueryUserSessionsAggregateProps {
  where?: UserSessionWhere
}

interface QueryUserSessionsConnectionProps {
  first?: Int
  after?: String
  where?: UserSessionWhere
  sort?: (UserSessionSort | undefined)[]
}

interface QueryGamesProps {
  where?: GameWhere
  options?: GameOptions
}

interface QueryGamesAggregateProps {
  where?: GameWhere
}

interface QueryGamesConnectionProps {
  first?: Int
  after?: String
  where?: GameWhere
  sort?: (GameSort | undefined)[]
}

interface QueryGameRoomsProps {
  where?: GameRoomWhere
  options?: GameRoomOptions
}

interface QueryGameRoomsAggregateProps {
  where?: GameRoomWhere
}

interface QueryGameRoomsConnectionProps {
  first?: Int
  after?: String
  where?: GameRoomWhere
  sort?: (GameRoomSort | undefined)[]
}

// Query apis ------------------------------------
export class Query {
  constructor(
    private client: ApolloClient<any>,
    private defaultOptions: GraphqlCallOptions = {},
    private gql?: any
  ) {}

  users(
    props: QueryUsersProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query users($where: UserWhere, $options: UserOptions) {
			users(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) => getResultData<User[]>(result, 'users'))
  }

  usersAggregate(
    props: QueryUsersAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersAggregate($where: UserWhere) {
			usersAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UserAggregateSelection>(
          result,
          'usersAggregate'
        )
      )
  }

  usersConnection(
    props: QueryUsersConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UsersConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersConnection($first: Int, $after: String, $where: UserWhere, $sort: [UserSort]) {
			usersConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UsersConnection>(result, 'usersConnection')
      )
  }

  vipMemberships(
    props: QueryVipMembershipsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMemberships($where: VIPMembershipWhere, $options: VIPMembershipOptions) {
			vipMemberships(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<VIPMembership[]>(result, 'vipMemberships')
      )
  }

  vipMembershipsAggregate(
    props: QueryVipMembershipsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsAggregate($where: VIPMembershipWhere) {
			vipMembershipsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<VIPMembershipAggregateSelection>(
          result,
          'vipMembershipsAggregate'
        )
      )
  }

  vipMembershipsConnection(
    props: QueryVipMembershipsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VipMembershipsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsConnection($first: Int, $after: String, $where: VIPMembershipWhere, $sort: [VIPMembershipSort]) {
			vipMembershipsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<VipMembershipsConnection>(
          result,
          'vipMembershipsConnection'
        )
      )
  }

  userSessions(
    props: QueryUserSessionsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessions($where: UserSessionWhere, $options: UserSessionOptions) {
			userSessions(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UserSession[]>(result, 'userSessions')
      )
  }

  userSessionsAggregate(
    props: QueryUserSessionsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsAggregate($where: UserSessionWhere) {
			userSessionsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UserSessionAggregateSelection>(
          result,
          'userSessionsAggregate'
        )
      )
  }

  userSessionsConnection(
    props: QueryUserSessionsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsConnection($first: Int, $after: String, $where: UserSessionWhere, $sort: [UserSessionSort]) {
			userSessionsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UserSessionsConnection>(
          result,
          'userSessionsConnection'
        )
      )
  }

  games(
    props: QueryGamesProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query games($where: GameWhere, $options: GameOptions) {
			games(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) => getResultData<Game[]>(result, 'games'))
  }

  gamesAggregate(
    props: QueryGamesAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesAggregate($where: GameWhere) {
			gamesAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<GameAggregateSelection>(
          result,
          'gamesAggregate'
        )
      )
  }

  gamesConnection(
    props: QueryGamesConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GamesConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesConnection($first: Int, $after: String, $where: GameWhere, $sort: [GameSort]) {
			gamesConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<GamesConnection>(result, 'gamesConnection')
      )
  }

  gameRooms(
    props: QueryGameRoomsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRooms($where: GameRoomWhere, $options: GameRoomOptions) {
			gameRooms(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<GameRoom[]>(result, 'gameRooms')
      )
  }

  gameRoomsAggregate(
    props: QueryGameRoomsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsAggregate($where: GameRoomWhere) {
			gameRoomsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<GameRoomAggregateSelection>(
          result,
          'gameRoomsAggregate'
        )
      )
  }

  gameRoomsConnection(
    props: QueryGameRoomsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsConnection($first: Int, $after: String, $where: GameRoomWhere, $sort: [GameRoomSort]) {
			gameRoomsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .query({
        ...mergedOptions,
        query,
        variables: props,
      })
      .then((result: any) =>
        getResultData<GameRoomsConnection>(
          result,
          'gameRoomsConnection'
        )
      )
  }
}

// WatchQuery props -----------------------------------

// WatchQuery apis ------------------------------------
export class WatchQuery {
  constructor(
    private client: ApolloClient<any>,
    private defaultOptions: GraphqlCallOptions = {},
    private subscriptionDocument: SubscriptionDocument | null = null,
    private gql?: any
  ) {}

  users(
    props: QueryUsersProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{ users: User[] }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query users($where: UserWhere, $options: UserOptions) {
			users(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<User[]>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) => getResultData<User[]>(x, 'users'))
  }

  usersAggregate(
    props: QueryUsersAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        usersAggregate: UserAggregateSelection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersAggregate($where: UserWhere) {
			usersAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<UserAggregateSelection>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<UserAggregateSelection>(x, 'usersAggregate')
    )
  }

  usersConnection(
    props: QueryUsersConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{ usersConnection: UsersConnection }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UsersConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersConnection($first: Int, $after: String, $where: UserWhere, $sort: [UserSort]) {
			usersConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<UsersConnection>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<UsersConnection>(x, 'usersConnection')
    )
  }

  vipMemberships(
    props: QueryVipMembershipsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{ vipMemberships: VIPMembership[] }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMemberships($where: VIPMembershipWhere, $options: VIPMembershipOptions) {
			vipMemberships(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<VIPMembership[]>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<VIPMembership[]>(x, 'vipMemberships')
    )
  }

  vipMembershipsAggregate(
    props: QueryVipMembershipsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        vipMembershipsAggregate: VIPMembershipAggregateSelection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsAggregate($where: VIPMembershipWhere) {
			vipMembershipsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs =
      this.client.watchQuery<VIPMembershipAggregateSelection>({
        ...mergedOptions,
        query,
        variables: props,
      })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<VIPMembershipAggregateSelection>(
        x,
        'vipMembershipsAggregate'
      )
    )
  }

  vipMembershipsConnection(
    props: QueryVipMembershipsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        vipMembershipsConnection: VipMembershipsConnection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VipMembershipsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsConnection($first: Int, $after: String, $where: VIPMembershipWhere, $sort: [VIPMembershipSort]) {
			vipMembershipsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<VipMembershipsConnection>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<VipMembershipsConnection>(
        x,
        'vipMembershipsConnection'
      )
    )
  }

  userSessions(
    props: QueryUserSessionsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{ userSessions: UserSession[] }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessions($where: UserSessionWhere, $options: UserSessionOptions) {
			userSessions(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<UserSession[]>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<UserSession[]>(x, 'userSessions')
    )
  }

  userSessionsAggregate(
    props: QueryUserSessionsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        userSessionsAggregate: UserSessionAggregateSelection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsAggregate($where: UserSessionWhere) {
			userSessionsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs =
      this.client.watchQuery<UserSessionAggregateSelection>({
        ...mergedOptions,
        query,
        variables: props,
      })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<UserSessionAggregateSelection>(
        x,
        'userSessionsAggregate'
      )
    )
  }

  userSessionsConnection(
    props: QueryUserSessionsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        userSessionsConnection: UserSessionsConnection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsConnection($first: Int, $after: String, $where: UserSessionWhere, $sort: [UserSessionSort]) {
			userSessionsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<UserSessionsConnection>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<UserSessionsConnection>(
        x,
        'userSessionsConnection'
      )
    )
  }

  games(
    props: QueryGamesProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{ games: Game[] }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query games($where: GameWhere, $options: GameOptions) {
			games(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<Game[]>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) => getResultData<Game[]>(x, 'games'))
  }

  gamesAggregate(
    props: QueryGamesAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        gamesAggregate: GameAggregateSelection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesAggregate($where: GameWhere) {
			gamesAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<GameAggregateSelection>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<GameAggregateSelection>(x, 'gamesAggregate')
    )
  }

  gamesConnection(
    props: QueryGamesConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{ gamesConnection: GamesConnection }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GamesConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesConnection($first: Int, $after: String, $where: GameWhere, $sort: [GameSort]) {
			gamesConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<GamesConnection>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<GamesConnection>(x, 'gamesConnection')
    )
  }

  gameRooms(
    props: QueryGameRoomsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{ gameRooms: GameRoom[] }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRooms($where: GameRoomWhere, $options: GameRoomOptions) {
			gameRooms(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<GameRoom[]>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<GameRoom[]>(x, 'gameRooms')
    )
  }

  gameRoomsAggregate(
    props: QueryGameRoomsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        gameRoomsAggregate: GameRoomAggregateSelection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsAggregate($where: GameRoomWhere) {
			gameRoomsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<GameRoomAggregateSelection>(
      {
        ...mergedOptions,
        query,
        variables: props,
      }
    )

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<GameRoomAggregateSelection>(
        x,
        'gameRoomsAggregate'
      )
    )
  }

  gameRoomsConnection(
    props: QueryGameRoomsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<WatchQueryFetchPolicy> &
      FragmentOptions &
      OmittedWatchQueryOptions &
      SubscribeToMoreOptions<{
        gameRoomsConnection: GameRoomsConnection
      }>
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsConnection($first: Int, $after: String, $where: GameRoomWhere, $sort: [GameRoomSort]) {
			gameRoomsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    const zenObs = this.client.watchQuery<GameRoomsConnection>({
      ...mergedOptions,
      query,
      variables: props,
    })

    const { subscribeToMore = [] } = mergedOptions

    subscribeToMore.forEach((x: any) => {
      zenObs.subscribeToMore({
        ...(typeof x.graphqlDocument === 'function'
          ? x.graphqlDocument(this.subscriptionDocument)
          : x.graphqlDocument),
        updateQuery: x.updateQuery,
      })
    })

    return zenObs.map((x: any) =>
      getResultData<GameRoomsConnection>(x, 'gameRoomsConnection')
    )
  }
}

// RefetchQuery props -----------------------------------
interface QueryUsersProps {
  where?: UserWhere
  options?: UserOptions
}

interface QueryUsersAggregateProps {
  where?: UserWhere
}

interface QueryUsersConnectionProps {
  first?: Int
  after?: String
  where?: UserWhere
  sort?: (UserSort | undefined)[]
}

interface QueryVipMembershipsProps {
  where?: VIPMembershipWhere
  options?: VIPMembershipOptions
}

interface QueryVipMembershipsAggregateProps {
  where?: VIPMembershipWhere
}

interface QueryVipMembershipsConnectionProps {
  first?: Int
  after?: String
  where?: VIPMembershipWhere
  sort?: (VIPMembershipSort | undefined)[]
}

interface QueryUserSessionsProps {
  where?: UserSessionWhere
  options?: UserSessionOptions
}

interface QueryUserSessionsAggregateProps {
  where?: UserSessionWhere
}

interface QueryUserSessionsConnectionProps {
  first?: Int
  after?: String
  where?: UserSessionWhere
  sort?: (UserSessionSort | undefined)[]
}

interface QueryGamesProps {
  where?: GameWhere
  options?: GameOptions
}

interface QueryGamesAggregateProps {
  where?: GameWhere
}

interface QueryGamesConnectionProps {
  first?: Int
  after?: String
  where?: GameWhere
  sort?: (GameSort | undefined)[]
}

interface QueryGameRoomsProps {
  where?: GameRoomWhere
  options?: GameRoomOptions
}

interface QueryGameRoomsAggregateProps {
  where?: GameRoomWhere
}

interface QueryGameRoomsConnectionProps {
  first?: Int
  after?: String
  where?: GameRoomWhere
  sort?: (GameRoomSort | undefined)[]
}

// RefetchQuery apis ------------------------------------
export class RefetchQuery {
  constructor(
    private client: ApolloClient<any>,
    private defaultOptions: GraphqlCallOptions = {},
    private gql?: any
  ) {}

  users(
    props: QueryUsersProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query users($where: UserWhere, $options: UserOptions) {
			users(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  usersAggregate(
    props: QueryUsersAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersAggregate($where: UserWhere) {
			usersAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  usersConnection(
    props: QueryUsersConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UsersConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersConnection($first: Int, $after: String, $where: UserWhere, $sort: [UserSort]) {
			usersConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  vipMemberships(
    props: QueryVipMembershipsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMemberships($where: VIPMembershipWhere, $options: VIPMembershipOptions) {
			vipMemberships(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  vipMembershipsAggregate(
    props: QueryVipMembershipsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsAggregate($where: VIPMembershipWhere) {
			vipMembershipsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  vipMembershipsConnection(
    props: QueryVipMembershipsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VipMembershipsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsConnection($first: Int, $after: String, $where: VIPMembershipWhere, $sort: [VIPMembershipSort]) {
			vipMembershipsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  userSessions(
    props: QueryUserSessionsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessions($where: UserSessionWhere, $options: UserSessionOptions) {
			userSessions(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  userSessionsAggregate(
    props: QueryUserSessionsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsAggregate($where: UserSessionWhere) {
			userSessionsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  userSessionsConnection(
    props: QueryUserSessionsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsConnection($first: Int, $after: String, $where: UserSessionWhere, $sort: [UserSessionSort]) {
			userSessionsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  games(
    props: QueryGamesProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query games($where: GameWhere, $options: GameOptions) {
			games(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  gamesAggregate(
    props: QueryGamesAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesAggregate($where: GameWhere) {
			gamesAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  gamesConnection(
    props: QueryGamesConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GamesConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesConnection($first: Int, $after: String, $where: GameWhere, $sort: [GameSort]) {
			gamesConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  gameRooms(
    props: QueryGameRoomsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRooms($where: GameRoomWhere, $options: GameRoomOptions) {
			gameRooms(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  gameRoomsAggregate(
    props: QueryGameRoomsAggregateProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsAggregate($where: GameRoomWhere) {
			gameRoomsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }

  gameRoomsConnection(
    props: QueryGameRoomsConnectionProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedQueryOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsConnection($first: Int, $after: String, $where: GameRoomWhere, $sort: [GameRoomSort]) {
			gameRoomsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return {
      query,
      variables: props,
    }
  }
}

// CacheWriteQuery props -----------------------------------
interface QueryUsersProps {
  where?: UserWhere
  options?: UserOptions
}

interface QueryUsersAggregateProps {
  where?: UserWhere
}

interface QueryUsersConnectionProps {
  first?: Int
  after?: String
  where?: UserWhere
  sort?: (UserSort | undefined)[]
}

interface QueryVipMembershipsProps {
  where?: VIPMembershipWhere
  options?: VIPMembershipOptions
}

interface QueryVipMembershipsAggregateProps {
  where?: VIPMembershipWhere
}

interface QueryVipMembershipsConnectionProps {
  first?: Int
  after?: String
  where?: VIPMembershipWhere
  sort?: (VIPMembershipSort | undefined)[]
}

interface QueryUserSessionsProps {
  where?: UserSessionWhere
  options?: UserSessionOptions
}

interface QueryUserSessionsAggregateProps {
  where?: UserSessionWhere
}

interface QueryUserSessionsConnectionProps {
  first?: Int
  after?: String
  where?: UserSessionWhere
  sort?: (UserSessionSort | undefined)[]
}

interface QueryGamesProps {
  where?: GameWhere
  options?: GameOptions
}

interface QueryGamesAggregateProps {
  where?: GameWhere
}

interface QueryGamesConnectionProps {
  first?: Int
  after?: String
  where?: GameWhere
  sort?: (GameSort | undefined)[]
}

interface QueryGameRoomsProps {
  where?: GameRoomWhere
  options?: GameRoomOptions
}

interface QueryGameRoomsAggregateProps {
  where?: GameRoomWhere
}

interface QueryGameRoomsConnectionProps {
  first?: Int
  after?: String
  where?: GameRoomWhere
  sort?: (GameRoomSort | undefined)[]
}

// CacheWriteQuery apis ------------------------------------
export class CacheWriteQuery {
  constructor(
    private client: ApolloClient<any>,
    private defaultOptions: GraphqlCallOptions = {},
    private gql?: any
  ) {}

  users(
    props: QueryUsersProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query users($where: UserWhere, $options: UserOptions) {
			users(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { users: data },
      variables: props,
    })
  }

  usersAggregate(
    props: QueryUsersAggregateProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersAggregate($where: UserWhere) {
			usersAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { usersAggregate: data },
      variables: props,
    })
  }

  usersConnection(
    props: QueryUsersConnectionProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UsersConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query usersConnection($first: Int, $after: String, $where: UserWhere, $sort: [UserSort]) {
			usersConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { usersConnection: data },
      variables: props,
    })
  }

  vipMemberships(
    props: QueryVipMembershipsProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMemberships($where: VIPMembershipWhere, $options: VIPMembershipOptions) {
			vipMemberships(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { vipMemberships: data },
      variables: props,
    })
  }

  vipMembershipsAggregate(
    props: QueryVipMembershipsAggregateProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VIPMembershipAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsAggregate($where: VIPMembershipWhere) {
			vipMembershipsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { vipMembershipsAggregate: data },
      variables: props,
    })
  }

  vipMembershipsConnection(
    props: QueryVipMembershipsConnectionProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'VipMembershipsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query vipMembershipsConnection($first: Int, $after: String, $where: VIPMembershipWhere, $sort: [VIPMembershipSort]) {
			vipMembershipsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { vipMembershipsConnection: data },
      variables: props,
    })
  }

  userSessions(
    props: QueryUserSessionsProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessions($where: UserSessionWhere, $options: UserSessionOptions) {
			userSessions(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { userSessions: data },
      variables: props,
    })
  }

  userSessionsAggregate(
    props: QueryUserSessionsAggregateProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsAggregate($where: UserSessionWhere) {
			userSessionsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { userSessionsAggregate: data },
      variables: props,
    })
  }

  userSessionsConnection(
    props: QueryUserSessionsConnectionProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'UserSessionsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query userSessionsConnection($first: Int, $after: String, $where: UserSessionWhere, $sort: [UserSessionSort]) {
			userSessionsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { userSessionsConnection: data },
      variables: props,
    })
  }

  games(
    props: QueryGamesProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query games($where: GameWhere, $options: GameOptions) {
			games(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { games: data },
      variables: props,
    })
  }

  gamesAggregate(
    props: QueryGamesAggregateProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesAggregate($where: GameWhere) {
			gamesAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { gamesAggregate: data },
      variables: props,
    })
  }

  gamesConnection(
    props: QueryGamesConnectionProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GamesConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gamesConnection($first: Int, $after: String, $where: GameWhere, $sort: [GameSort]) {
			gamesConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { gamesConnection: data },
      variables: props,
    })
  }

  gameRooms(
    props: QueryGameRoomsProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRooms($where: GameRoomWhere, $options: GameRoomOptions) {
			gameRooms(where: $where, options: $options) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { gameRooms: data },
      variables: props,
    })
  }

  gameRoomsAggregate(
    props: QueryGameRoomsAggregateProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomAggregateSelectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsAggregate($where: GameRoomWhere) {
			gameRoomsAggregate(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { gameRoomsAggregate: data },
      variables: props,
    })
  }

  gameRoomsConnection(
    props: QueryGameRoomsConnectionProps,
    data: any,
    fragment: string | DocumentNode
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, '') ||
      'GameRoomsConnectionData'

    const finishedFragment = fragment

    // build query
    const query = gql2`
		query gameRoomsConnection($first: Int, $after: String, $where: GameRoomWhere, $sort: [GameRoomSort]) {
			gameRoomsConnection(first: $first, after: $after, where: $where, sort: $sort) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    return this.client.writeQuery({
      query,
      data: { gameRoomsConnection: data },
      variables: props,
    })
  }
}

// Mutation props -----------------------------------
interface MutationCreateUsersProps {
  input: UserCreateInput[]
}

interface MutationDeleteUsersProps {
  where?: UserWhere
  delete?: UserDeleteInput
}

interface MutationUpdateUsersProps {
  where?: UserWhere
  update?: UserUpdateInput
  connect?: UserConnectInput
  disconnect?: UserDisconnectInput
  create?: UserRelationInput
  delete?: UserDeleteInput
  connectOrCreate?: UserConnectOrCreateInput
}

interface MutationCreateVipMembershipsProps {
  input: VIPMembershipCreateInput[]
}

interface MutationDeleteVipMembershipsProps {
  where?: VIPMembershipWhere
  delete?: VIPMembershipDeleteInput
}

interface MutationUpdateVipMembershipsProps {
  where?: VIPMembershipWhere
  update?: VIPMembershipUpdateInput
  connect?: VIPMembershipConnectInput
  disconnect?: VIPMembershipDisconnectInput
  create?: VIPMembershipRelationInput
  delete?: VIPMembershipDeleteInput
  connectOrCreate?: VIPMembershipConnectOrCreateInput
}

interface MutationCreateUserSessionsProps {
  input: UserSessionCreateInput[]
}

interface MutationDeleteUserSessionsProps {
  where?: UserSessionWhere
  delete?: UserSessionDeleteInput
}

interface MutationUpdateUserSessionsProps {
  where?: UserSessionWhere
  update?: UserSessionUpdateInput
  connect?: UserSessionConnectInput
  disconnect?: UserSessionDisconnectInput
  create?: UserSessionRelationInput
  delete?: UserSessionDeleteInput
  connectOrCreate?: UserSessionConnectOrCreateInput
}

interface MutationCreateGamesProps {
  input: GameCreateInput[]
}

interface MutationDeleteGamesProps {
  where?: GameWhere
}

interface MutationUpdateGamesProps {
  where?: GameWhere
  update?: GameUpdateInput
}

interface MutationCreateGameRoomsProps {
  input: GameRoomCreateInput[]
}

interface MutationDeleteGameRoomsProps {
  where?: GameRoomWhere
  delete?: GameRoomDeleteInput
}

interface MutationUpdateGameRoomsProps {
  where?: GameRoomWhere
  update?: GameRoomUpdateInput
  connect?: GameRoomConnectInput
  disconnect?: GameRoomDisconnectInput
  create?: GameRoomRelationInput
  delete?: GameRoomDeleteInput
  connectOrCreate?: GameRoomConnectOrCreateInput
}

// Mutation apis ------------------------------------
export class Mutation {
  constructor(
    private client: ApolloClient<any>,
    private defaultOptions: GraphqlCallOptions = {},
    private gql?: any
  ) {}

  createUsers(
    props: MutationCreateUsersProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'CreateUsersMutationResponse'
      ) ||
      'CreateUsersMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation createUsers($input: [UserCreateInput!]!) {
			createUsers(input: $input) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<CreateUsersMutationResponse>(
          result,
          'createUsers'
        )
      )
  }

  deleteUsers(
    props: MutationDeleteUsersProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, 'DeleteInfo') ||
      'DeleteInfoData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation deleteUsers($where: UserWhere, $delete: UserDeleteInput) {
			deleteUsers(where: $where, delete: $delete) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<DeleteInfo>(result, 'deleteUsers')
      )
  }

  updateUsers(
    props: MutationUpdateUsersProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'UpdateUsersMutationResponse'
      ) ||
      'UpdateUsersMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation updateUsers($where: UserWhere, $update: UserUpdateInput, $connect: UserConnectInput, $disconnect: UserDisconnectInput, $create: UserRelationInput, $delete: UserDeleteInput, $connectOrCreate: UserConnectOrCreateInput) {
			updateUsers(where: $where, update: $update, connect: $connect, disconnect: $disconnect, create: $create, delete: $delete, connectOrCreate: $connectOrCreate) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UpdateUsersMutationResponse>(
          result,
          'updateUsers'
        )
      )
  }

  createVipMemberships(
    props: MutationCreateVipMembershipsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'CreateVipMembershipsMutationResponse'
      ) ||
      'CreateVipMembershipsMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation createVipMemberships($input: [VIPMembershipCreateInput!]!) {
			createVipMemberships(input: $input) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<CreateVipMembershipsMutationResponse>(
          result,
          'createVipMemberships'
        )
      )
  }

  deleteVipMemberships(
    props: MutationDeleteVipMembershipsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, 'DeleteInfo') ||
      'DeleteInfoData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation deleteVipMemberships($where: VIPMembershipWhere, $delete: VIPMembershipDeleteInput) {
			deleteVipMemberships(where: $where, delete: $delete) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<DeleteInfo>(result, 'deleteVipMemberships')
      )
  }

  updateVipMemberships(
    props: MutationUpdateVipMembershipsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'UpdateVipMembershipsMutationResponse'
      ) ||
      'UpdateVipMembershipsMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation updateVipMemberships($where: VIPMembershipWhere, $update: VIPMembershipUpdateInput, $connect: VIPMembershipConnectInput, $disconnect: VIPMembershipDisconnectInput, $create: VIPMembershipRelationInput, $delete: VIPMembershipDeleteInput, $connectOrCreate: VIPMembershipConnectOrCreateInput) {
			updateVipMemberships(where: $where, update: $update, connect: $connect, disconnect: $disconnect, create: $create, delete: $delete, connectOrCreate: $connectOrCreate) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UpdateVipMembershipsMutationResponse>(
          result,
          'updateVipMemberships'
        )
      )
  }

  createUserSessions(
    props: MutationCreateUserSessionsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'CreateUserSessionsMutationResponse'
      ) ||
      'CreateUserSessionsMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation createUserSessions($input: [UserSessionCreateInput!]!) {
			createUserSessions(input: $input) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<CreateUserSessionsMutationResponse>(
          result,
          'createUserSessions'
        )
      )
  }

  deleteUserSessions(
    props: MutationDeleteUserSessionsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, 'DeleteInfo') ||
      'DeleteInfoData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation deleteUserSessions($where: UserSessionWhere, $delete: UserSessionDeleteInput) {
			deleteUserSessions(where: $where, delete: $delete) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<DeleteInfo>(result, 'deleteUserSessions')
      )
  }

  updateUserSessions(
    props: MutationUpdateUserSessionsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'UpdateUserSessionsMutationResponse'
      ) ||
      'UpdateUserSessionsMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation updateUserSessions($where: UserSessionWhere, $update: UserSessionUpdateInput, $connect: UserSessionConnectInput, $disconnect: UserSessionDisconnectInput, $create: UserSessionRelationInput, $delete: UserSessionDeleteInput, $connectOrCreate: UserSessionConnectOrCreateInput) {
			updateUserSessions(where: $where, update: $update, connect: $connect, disconnect: $disconnect, create: $create, delete: $delete, connectOrCreate: $connectOrCreate) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UpdateUserSessionsMutationResponse>(
          result,
          'updateUserSessions'
        )
      )
  }

  createGames(
    props: MutationCreateGamesProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'CreateGamesMutationResponse'
      ) ||
      'CreateGamesMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation createGames($input: [GameCreateInput!]!) {
			createGames(input: $input) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<CreateGamesMutationResponse>(
          result,
          'createGames'
        )
      )
  }

  deleteGames(
    props: MutationDeleteGamesProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, 'DeleteInfo') ||
      'DeleteInfoData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation deleteGames($where: GameWhere) {
			deleteGames(where: $where) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<DeleteInfo>(result, 'deleteGames')
      )
  }

  updateGames(
    props: MutationUpdateGamesProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'UpdateGamesMutationResponse'
      ) ||
      'UpdateGamesMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation updateGames($where: GameWhere, $update: GameUpdateInput) {
			updateGames(where: $where, update: $update) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UpdateGamesMutationResponse>(
          result,
          'updateGames'
        )
      )
  }

  createGameRooms(
    props: MutationCreateGameRoomsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'CreateGameRoomsMutationResponse'
      ) ||
      'CreateGameRoomsMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation createGameRooms($input: [GameRoomCreateInput!]!) {
			createGameRooms(input: $input) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<CreateGameRoomsMutationResponse>(
          result,
          'createGameRooms'
        )
      )
  }

  deleteGameRooms(
    props: MutationDeleteGameRoomsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(this.gql, fragment, 'DeleteInfo') ||
      'DeleteInfoData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation deleteGameRooms($where: GameRoomWhere, $delete: GameRoomDeleteInput) {
			deleteGameRooms(where: $where, delete: $delete) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<DeleteInfo>(result, 'deleteGameRooms')
      )
  }

  updateGameRooms(
    props: MutationUpdateGameRoomsProps,

    fragment: string | DocumentNode,
    options?: GraphqlCallOptions<FetchPolicy> &
      FragmentOptions &
      OmittedMutationOptions
  ) {
    const mergedOptions = {
      ...(<any>this.defaultOptions),
      ...options,
    }

    const fragmentName =
      mergedOptions?.fragmentName ||
      getFirstFragmentName(
        this.gql,
        fragment,
        'UpdateGameRoomsMutationResponse'
      ) ||
      'UpdateGameRoomsMutationResponseData'

    const finishedFragment = fragment

    // build query
    const mutation = gql2`
		mutation updateGameRooms($where: GameRoomWhere, $update: GameRoomUpdateInput, $connect: GameRoomConnectInput, $disconnect: GameRoomDisconnectInput, $create: GameRoomRelationInput, $delete: GameRoomDeleteInput, $connectOrCreate: GameRoomConnectOrCreateInput) {
			updateGameRooms(where: $where, update: $update, connect: $connect, disconnect: $disconnect, create: $create, delete: $delete, connectOrCreate: $connectOrCreate) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
    // apollo call
    return this.client
      .mutate({
        ...mergedOptions,
        mutation,
        variables: props,
      })
      .then((result: any) =>
        getResultData<UpdateGameRoomsMutationResponse>(
          result,
          'updateGameRooms'
        )
      )
  }
}

class SubscriptionDocument {}

// helper types

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type OmittedQueryOptions = Omit<
  Partial<QueryOptions<OperationVariables>>,
  'query' | 'variables'
>
type OmittedWatchQueryOptions = Omit<
  Partial<WatchQueryOptions<OperationVariables>>,
  'variables' | 'query'
>

type SubscribeToMoreOptions<T> = {
  subscribeToMore?: {
    graphqlDocument:
      | { document: any; variables?: any }
      | ((subscription: SubscriptionDocument) => {
          document: any
          variables?: any
        })
    updateQuery: UpdateQueryFn<T, any, any>
  }[]
}

type OmittedMutationOptions = Omit<
  Partial<MutationOptions<OperationVariables>>,
  'mutation' | 'variables'
>

interface FragmentOptions {
  fragmentName?: string
}

interface GraphqlCallOptions<TFetchPolicy = FetchPolicy> {
  fetchPolicy?: TFetchPolicy
  errorPolicy?: ErrorPolicy
}

interface DefaultOptions {
  query?: GraphqlCallOptions
  watchQuery?: GraphqlCallOptions<WatchQueryFetchPolicy>
  mutation?: Omit<GraphqlCallOptions, 'fetchPolicy'>
}

export interface Client {
  query: Query
  watchQuery: WatchQuery
  refetchQuery: RefetchQuery
  cacheWriteQuery: CacheWriteQuery
  mutation: Mutation
}

export default function (
  client: ApolloClient<any>,
  defaultOptions: DefaultOptions = {}
): Client {
  return {
    query: new Query(client, defaultOptions.query || {}),
    watchQuery: new WatchQuery(
      client,
      defaultOptions.query || {},
      null
    ),
    refetchQuery: new RefetchQuery(
      client,
      defaultOptions.query || {}
    ),
    cacheWriteQuery: new CacheWriteQuery(
      client,
      defaultOptions.query || {}
    ),
    mutation: new Mutation(client, defaultOptions.mutation || {}),
  }
}

function getResultData<T>(result: any, dataFieldName: any) {
  // if error, throw it
  if (result.errors) {
    throw new Error(<any>result.errors)
  }

  if (!result.data) {
    return <T>(<any>null)
  }

  // cast the result and return (need any for scalar types, to avoid compilation error)
  return <T>(<any>result.data[dataFieldName])
}

function getFirstFragmentName(
  gql: any,
  fragmentParam: string | Object | undefined,
  returnClassName: string
) {
  const fragment =
    typeof fragmentParam === 'string' && gql
      ? gql(fragmentParam)
      : typeof fragmentParam === 'object'
      ? (fragmentParam as any)
      : null

  if (!fragment) {
    return
  }

  const fragmentDef = fragment.definitions.filter(
    (x: any) =>
      x.kind === 'FragmentDefinition' &&
      (!returnClassName ||
        x.typeCondition?.name?.value === returnClassName)
  )[0]

  const fragmentName =
    fragmentDef.kind === 'FragmentDefinition' &&
    fragmentDef?.name?.value

  return fragmentName
}
