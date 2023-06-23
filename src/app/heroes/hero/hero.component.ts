import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'spiderman'
  public age: number = 43

  // los Getters Setters son propiedades que se ven como metodos
  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  // Metodos
  getHeroDescription(): string {
    return `${this.capitalizedName} - ${this.age}`
  }

  changeHero(): void {
    this.name = "aquaman"
  }

  chageAge(): void {
    this.age = 23
  }

  changeEverything(): void {
    this.chageAge()
    this.changeHero()
  }

  resetForm() {
    this.age = 43
    this.name = 'spiderman'
  }

}


/**
 * Notas:
 *
 * Interesante -> entender que los SETTERS Y GETTER se interpretan como
 * propiedades es decir se usan en el 'one way data binding o paso de props...' con una
 * interpolacion sencilla {{setter/getter/propiedad}}, sin embargo los metodos se
 * pasan tambien como una interpolación sencilla,pero llamando al metodo de
 * esta manera {{metodo()}}
 *
 * Interesante -> los eventos en angular se colocan de esta manera
 * <button (click)='metodoParaLlamar()'>Click</button>
 * Es decir dentro del tag html y entre parentesis llamamos al metodo
 * seguido de un =, y entre comillas simples ('') pasamos el metodo.
 *
 *
 * Interesante y hacer hincapie
 *
 * Existen los metodos publicos y privados
 *
 * los publicos aplican a todo el scope del componente por lo que un metodo
 * o propiedad publica es accesible desde el componente de html por ejemplo.
 * Sin embargo si la denominación que envuelve el metodo/propiedad es privado
 * bloqueamos por scope el acceso a la propiedad y por lo tanto solo podra ser
 * accesible dentro del scope de la clase, lo que nos va a permitir no exponer
 * datos y trabajar con datos encapsulados.
 *

 * Nota para recordar -> tanto propiedades como metodos debo intentar
 * tiparlos y hacer el esfuerzo de tiparlos de la manera mas estricta
 * posible si es un metodo y admite argumentos
 * 1. tipar el argumento
 * 2. tipar el retorno de la función si lo hay y si no lo hay tipar con : void
 *
 */
