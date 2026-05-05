import { Component } from '@angular/core';

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
}
