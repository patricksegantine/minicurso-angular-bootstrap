import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [],
})
export class DataBindingComponent implements OnInit {
  public contadorClick: number = 0;
  public email: string;

  constructor() {}

  ngOnInit(): void {}

  contarClick() {
    this.contadorClick++;
  }

  zerarContador() {
    this.contadorClick = 0;
  }

  // KeyUp(event: any) {
  //   this.email = event.target.value;
  // }
}
