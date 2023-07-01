import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }]

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() }
    this.characters.push(newCharacter)
  }

  /**
   * @param id
   * @description Estos dos metodos aun devolviendo los mismo resultados
   * 1 tiene mas perfomance que otro
   * En este caso el metodo filter, tiene mas performance que el finIndex combinado
   * con splice, por el simple hecho de que no mutamos el array, si no que lo
   * reasingamos y desplazamos elementos en memoria, en una app con millones de datos
   * esto seria un problema.
   */


  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
    console.log(this.characters)
  }

  // este metodo no funciona el que esta arriba 👆

  // deleteCharacterById(id: string): void {
  //   const index = this.characters.findIndex(character => character.id === id)
  //   this.characters.splice(index, 1)
  // }


}

// este decorador Angular lo va a tratar como un servicio.

