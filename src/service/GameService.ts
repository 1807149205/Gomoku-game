import GamePlayerOnlineStore from "../store/GamePlayerOnlineStore";
import GamePlayerStore from "../store/GamePlayerRoomStore";

class GameService {

    private gamePlayerStore;
    private gameOnlinePlayerStore;

    constructor() {
        this.gamePlayerStore = GamePlayerStore;
        this.gameOnlinePlayerStore = GamePlayerOnlineStore;
    }

    getAllGamingPlayer() {
        return this.gamePlayerStore.getAllRoom();
    }

    startGame(p1: string, p2: string) {
        this.gamePlayerStore.setRoomPlayer(p1, p2);
    }

    playerOnline(p: string) {
        this.gameOnlinePlayerStore.playerOnline(p);
    }

}

export default GameService;