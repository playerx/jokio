export class EventStore<T = unknown> {
  actions: ({ key: string; index: number; userId: string } & T)[] = []

  put(key: string, action: any, userId: string) {
    const items = this.actions

    const lastIndex = items[items.length - 1]?.index ?? -1

    this.actions.push({
      ...action,
      key,
      userId,
      index: lastIndex + 1,
    })
  }

  get(afterIndex?: number) {
    let from = -1

    if (afterIndex != null && afterIndex > -1) {
      from = afterIndex
    }

    const result =
      from > -1
        ? this.actions.filter(x => x.index > from)
        : this.actions

    return result
  }
}
