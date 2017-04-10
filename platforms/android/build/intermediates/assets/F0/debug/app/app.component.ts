import { Component } from "@angular/core";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}

// Si no ha jugado con el enrutamiento en Angular antes, puede consultar la guía de Angular sobre el tema para obtener información de fondo, pero el concepto básico es que debe declarar una matriz de rutas que incluya una lista de todos los componentes a los que el usuario puede navegar, Así como un camino a utilizar para acceder a esos componentes. Cuando necesita agregar nuevas rutas, importa el componente apropiado en app.routing.ts y, a continuación, incluya ese componente en la matriz de rutas.

// El otro concepto nuevo en este ejemplo es la etiqueta <page-router-outlet>, que es la primera directiva de la aplicación. Usted puede comprobar de nuevo los documentos de Angular si desea información detallada sobre qué directivas son y hacen, pero la manera más simple de pensar en una directiva es como algo que puede afectar el marcado que coloca en su plantilla, en este caso <page-router- Salida>.

// Y para dar un paso atrás, esa directiva, <page-router-outlet> es la única diferencia en el enrutamiento entre el código de enrutamiento anterior y el mismo código en la implementación web de Groceries. Angular proporciona una directiva <router-outlet> para aplicaciones web y NativeScript extiende esa directiva con su propia directiva <page-router-outlet> que maneja el entorno único de iOS y aplicaciones de Android. Lo bueno de NativeScript es que esos detalles son transparentes para usted como desarrollador.