import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { IPage } from '../../../model/plistmodel';
import { Usuario } from '../../../model/blog';

@Component({
  selector: 'app-botonera',
  imports: [],
  templateUrl: './botonera.html',
  styleUrl: './botonera.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotoneraComponent {
  oPage = input.required<IPage<Usuario> | null>();
  oBotonera = input.required<string[]>();
  numPage = input.required<number>();

  pageChanged = output<number>();

  goToPage(numPage: number) {
    this.pageChanged.emit(numPage);
    return false;
  }
}