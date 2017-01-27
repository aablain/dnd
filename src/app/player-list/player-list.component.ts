import { Component, OnInit } from '@angular/core';
import { Player } from './../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {

constructor (private router: Router, private playerService: PlayerService){}

players: FirebaseListObservable<any[]>;
currentRoute: string = this.router.url;

ngOnInit() {
  this.players = this.playerService.getPlayers();
}

goToPlayerPage(clickedPlayer) {
  this.router.navigate(['player', clickedPlayer.$key]);
}

// onChange(optionFromMenu) {
//   this.filterByType = optionFromMenu;
// }

}
