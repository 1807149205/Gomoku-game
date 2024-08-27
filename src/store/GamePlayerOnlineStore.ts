class GamePlayerOnlineStore {

    private player: string[];

    constructor() {
        this.player = [];
    }

    getAllPlayer() {
        return this.player;
    }

    isOnline(player: string): boolean {
        return this.player.includes(player);
    }

    playerOnline(p: string) {
        return this.player.push(p);
    }

}

export default new GamePlayerOnlineStore();