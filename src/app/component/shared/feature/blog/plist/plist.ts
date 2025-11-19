import { Component } from '@angular/core';
import { UsuarioService } from '../../../../../service/blog';
import { IPage } from '../../../../../model/plistmodel';
import { Usuario } from '../../../../../model/blog';
import { BotoneraService } from '../../../../../service/botonera';
import { neighborhood } from '../../../../../environment/environment';
import { BotoneraComponent } from "../../../botonera/botonera";

@Component({
  selector: 'app-plist',
  imports: [BotoneraComponent],
  templateUrl: './plist.html',
  styleUrl: './plist.css',
})
export class PlistUsuarioAlvaro {
  oPage: IPage<Usuario> | null = null;
  numPage: number = 0;
  numRpp: number = 5;
  oBotonera: string[] = [];

  constructor(private usuarioService: UsuarioService, private oBotoneraService: BotoneraService) { }

  

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.usuarioService.getPage(this.numPage, this.numRpp).subscribe({
      next: (data: IPage<Usuario>) => {
        this.oPage = data;
        // queremos que se calcule la botonera
        this.oBotonera = this.oBotoneraService.getBotonera(this.oPage.number, this.oPage.totalPages,neighborhood);
        console.log("Botonera..." + this.oBotonera)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }




  goToPage(numPage:number){
      this.numPage=numPage;
      this.getPage();
      return false; // EVITA LA ACCIÓN POR DEFECTO DEL NAVEGADOR, ES DECIR, EVITA EL HREF
  }


}