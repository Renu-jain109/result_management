import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letter',
  standalone: true
})
export class LetterPipe implements PipeTransform {

  transform(value: any): any {
    if(typeof value !== 'string'){
      return value;
    }
    const firstLetter = value.charAt(0);
    if(firstLetter !== value.charAt(0).toUpperCase() ){
      return `First Letter Capital`;
    }
    // return value;
  }

  
}
