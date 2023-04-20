import { Team } from "./team";
import { Player } from "./player";

export interface field {
    team: Team;
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
