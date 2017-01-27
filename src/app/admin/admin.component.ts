import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  makeNewCharacter(name: string, bio: string, race: string, clas: string, title: string, health: number) {
    var newPlayer: Player = new Player(name, bio, race, clas, title, health);
    this.playerService.addPlayer(newPlayer);
  }

  ngOnInit() {
  }

}
