class Registry {
  private games: Game[] = []

  constructor(
    public name: string,
    public adminWalletAddresses: string[],
    public fee: number
  ) {}

  addNewGame(name: string, priceInEth: number) {
    this.games.push({
      id: this.games.length + 1,
      name,
      priceInEth,
      isApproved: true,
      rejectReason: '',
    })
  }

  approveGame(id: number) {
    const game = this.games.find(x => x.id === id)
    if (game) {
      game.isApproved = true
    }
  }

  rejectGame(id: number, reason: string) {
    const game = this.games.find(x => x.id === id)
    if (!game) {
      return
    }

    if (game.isApproved) {
      return
    }

    if (game) {
      game.rejectReason = reason
    }
  }
}

type Game = {
  id: number
  name: string
  priceInEth: number
  isApproved: boolean
  rejectReason: string
}
