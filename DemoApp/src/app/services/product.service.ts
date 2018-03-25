import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from './../configs/config.service';
import { BaseService } from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ProductService extends BaseService {

    baseUrl: string = '';
    // Observable navItem source
    // private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    // authNavStatus$ = this._authNavStatusSource.asObservable();
    private loggedIn = false;

    constructor(private http: Http, private configService: ConfigService) {
        super();
        this.baseUrl = configService.getApiUrl();
    }

    fetchProducts() {
            return this.http.get(this.baseUrl).map((res: Response) => res.json())
    }

}
