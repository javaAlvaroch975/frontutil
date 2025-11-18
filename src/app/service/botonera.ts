import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BotoneraService {

    getBotonera(numPag: number, numPages: number, neighborhood:number) : string[] {
        // el usuario siempre espera que las páginas sean 1-based (la primera un uno)
        // sin embargo, el backend trabaja con páginas 0-based (la primera es la 0)
        let botonera: string[] = [];
        let paginaActual = numPag+1;
        // Calcular el rango de páginas a mostrar
        for (let i = 1; i <=numPages; i++){
          if (i == 1){
            botonera.push('1')
          } else if (i==paginaActual){ // PRIMERA
            botonera.push(i.toString())
          } else if (i==numPages){  //ÚLTIMA
            botonera.push(i.toString())
          } else if (i>=paginaActual-neighborhood && i<paginaActual){  //VECINDAD POR ABAJO
            botonera.push(i.toString())
          } else if (i<=paginaActual+neighborhood && i>paginaActual){  //VECINDAD POR ARRIBA
            botonera.push(i.toString())
          } else if (i == paginaActual - neighborhood - 1){  //ABREVIACIÓN DE PÁGINAS POR ABAJO
            botonera.push('...')
          } else if (i == paginaActual + neighborhood + 1){  //ABREVIACIÓN DE PÁGINAS POR ARRIBA
            botonera.push('...')
          }
        }

        return botonera;
    }

}
