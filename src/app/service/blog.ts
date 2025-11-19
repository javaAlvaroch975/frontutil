import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../environment/environment';
import { IPage } from '../model/plistmodel';
import { Usuario } from '../model/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private oHttp: HttpClient){}
  
  getPage(page: number, rpp: number): Observable<IPage<Usuario>> {
    return this.oHttp.get<IPage<Usuario>>(serverURL + `/usuario?page=${page}&size=${rpp}`);
  }

}
