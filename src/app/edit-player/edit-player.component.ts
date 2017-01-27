import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginUpdatingThisPlayer(playerToBeChanged){
    this.playerService.updatePlayer(playerToBeChanged);
  }

  beginDeletingPlayer(playerToBeDeleted){
    if (confirm("Are You Sure You Want to delete this player permanently??")){
      this.playerService.deletePlayer(playerToBeDeleted);
    }
  }

}
