import { BadRequestError } from '../error/bad-request-error';
import { AppError } from './../error/app-error';
import { NotFoundException } from './../error/not-foundException';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
 
  constructor(private url : string, private http : Http) { }


  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.errorHandler);
  }

  create(resource) {
    return this.http.post(this.url,JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.errorHandler);
  }

  update(resource) {
    return this.http.patch(this.url +"/"+resource.id, JSON.stringify({isRead : true}))
        .map(response => response.json())
        .catch(this.errorHandler);
  }

  delete(id) {
    return this.http.delete(this.url + '/'+id)
        .map(response => response.json())
        .catch(this.errorHandler);
  }

  private errorHandler(error : Response) {
    if(error.status === 400)
        return Observable.throw(new BadRequestError(error.json()));

    if(error.status === 404)
        return Observable.throw(new NotFoundException());
  
    return Observable.throw(new AppError(error));
  }
}