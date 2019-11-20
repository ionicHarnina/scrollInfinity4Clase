import { Component } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  items: string[] = [];
  termina = true;
  constructor() {
    this.cargarVector();
  }
  private cargarVector() {
    for (let i: number = 0; i < 30; i++) {
      this.items.push(i.toString());
    }
  }

  doInfinite(event: any) {
    console.log("comenzado operacion asincrona");
    //Vamos a meter mas elementos en la lista
    setTimeout(() => {
      this.cargarVector();
      console.log("terminando operacion asincrona");
      //terminar el scroll
      event.target.complete();
      if (this.items.length > 100) this.termina = false;
    }, 500);
    console.log("fuera del settimeout no espero a nadie");

  }
}
