import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService]
})
export class PlayerComponent implements OnInit {
  playerId: string;
  playerToDisplay: FirebaseObjectObservable<Player>;
  @Input() selectedPlayer;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.playerId = urlParametersArray['id'];
      console.log(this.playerId);
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}
