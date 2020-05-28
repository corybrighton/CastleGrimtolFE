import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  playAPI: string;

  constructor(private http: HttpClient) {
    this.playAPI = environment.api + 'grimtol';
  }

  public play(input: string): Observable<string> {
    return this.http.get<string>(this.playAPI + '?input=' + input);
  }
}
