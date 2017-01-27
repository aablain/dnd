
import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2'


@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string){
      return this.angularFire.database.object('/players/' + playerId);// firebase is searching for us
    }

  updatePlayer(localUpdatedPlayer){
    var albumEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);// finds album by id
    albumEntryInFirebase.update({//updating album.value
      name: localUpdatedPlayer.name,
      bio: localUpdatedPlayer.bio,
      race: localUpdatedPlayer.race,
      clas: localUpdatedPlayer.clas,
      title: localUpdatedPlayer.title,
      health: localUpdatedPlayer.health});
  }

  deletePlayer(localPlayerToDelete){
    var albumEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    albumEntryInFirebase.remove();
  }
}
