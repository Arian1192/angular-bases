import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Utilizamos el decorador @Output para decirle a nuestro componente que los datos que van a vivir en la propiedad
  // onNewCharacter van a poder ser accesibles desde otros componentes o se van a emitir.
  // por otro lado utilizamos el type EventEmmitter (que por defecto es <T> generico), y lo tipamos con Character por que lo
  // vamos a transmitir es un Character y ya conocemos su tipo,  y generamos la instancia de EventEmmiter()
  // por lo tanto lo que obtenemos es addCharacterComponent.onNewCharactert ( es un EventEmmiter<Character> )
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0
  }


  // este metodo emite el nuevo caracter como lo hace a través de la propiedad (ngSubmit) en el html
  // es algo asi como handleSubmit(onSubmit()) de react hook forms lo interesante de angular es que no tenemos que pasar
  // la data dentro del metodo por que ya vive en la clase.
  emitCharacter(): void {
    // aqui obtenemos los datos del html.
    debugger;
    console.log(this.character)
    // Primero hacemos una comprobación para asegurarnos que el character.name tiene datos.
    if (this.character.name.length === 0) return
    // despues a través del emit() generado por la instancia EventEmitter() emitimos el caracter
    this.onNewCharacter.emit({ ...this.character })
    this.character = { name: '', power: 0 }
  }

}
