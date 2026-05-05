import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title = "welcome to moder angular"

  protected isDisable = false;

  protected onClick() :void{
    console.log("Button clicked");
    this.isDisable = !this.isDisable;
  }

  protected count = signal(0);

  protected doubleCount = computed( ()=> this.count() * 2); // a função comuted calcula um valor a partir de um signal

  protected increaseCounter() :void{
    this.count.update(value => value + 1);
  }

  protected decreaseCounter() :void{
    this.count.update(value => value - 1);
  }

  protected resetCounter() :void{
    this.count.set(0);
  }
}
