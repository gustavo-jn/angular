import { Component, signal, effect, computed } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title = "welcome to modern angular";

  protected isDisable = false;

  protected onClick(): void {
    console.log("Button clicked");
    this.isDisable = !this.isDisable;
  }

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  private readonly countLog = effect((): void => {
    console.log('Count changed:', this.count());
  });

  protected increaseCounter(): void {
    this.count.update(value => value + 1);
  }

  protected decreaseCounter(): void {
    this.count.update(value => value - 1);
  }

  protected resetCounter(): void {
    this.count.set(0);
  }
}
