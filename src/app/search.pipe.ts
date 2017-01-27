import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(players: any, term: any):any {
    if (term === undefined) return players;
    return players.filter(function(player){
      if (player.name.toLowerCase().includes(term.toLowerCase()) || player.race.toLowerCase().includes(term.toLowerCase()) || player.clas.toLowerCase().includes(term.toLowerCase())) {
        return player;
      }
    })
  }

}
