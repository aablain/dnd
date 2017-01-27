import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'title',
  pure: false
})
export class TitlePipe implements PipeTransform {

  transform(input: Player[], desiredTitle) {
    var output: Player[] = [];
    if (desiredTitle === "Tank") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].title === "Tank") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTitle === "DPS") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].title === "DPS") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTitle === "Healer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].title === "Healer") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTitle === "DM") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].title === "DM") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTitle === "Thief/Scout") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].title === "Thief/Scout") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;//return array of all objects
    }
  }

}
