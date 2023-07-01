import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  // Declaro la propiedad y la tipo
  // a través de la inyeccion dependencias utilizo el DbzService para pasar los datos
  // que viven en el servicio y setearlos en la propiedad characters
  constructor(private dbzService: DbzService) {
  }



  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character)
  }

  onNewDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id)
  }
}
