class GamePlayerRoomStore {

    private player: string[][];
    private currentPlayers: number;

    constructor() {
        this.player = [];
        this.currentPlayers = 0;
    }

    getAllRoom(): string[][] {
        return this.player;
    }

    setRoomPlayer(player1: string, player2: string) {
        const arr: string[] = [player1, player2];
        this.player[this.currentPlayers++] = arr;
    }

    getCurrentPlayingPlayers(): number {
        return this.currentPlayers;
    }

}

export default new GamePlayerRoomStore();