import { Player } from "./player";

export interface field {
    centralForward: Player;
    leftWinger: Player;
    rightWinger: Player;
    leftCentralForward: Player;
    rightCentralForward: Player;
    defensiveMidfielder: Player;
    leftBack: Player;
    rightBack: Player;
    leftCenterBack: Player;
    rightCenterBack: Player;
    goalKeeper: Player;
}
