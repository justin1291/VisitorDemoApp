import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class GeoIpService {

  private currentUserGeoIPObj:  BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  public geoIpInfo() {
    return this.http.get<any>('http://freegeoip.net/json/');
  }

  public set userIPInfo(geoIpObj: any){
    this.currentUserGeoIPObj = geoIpObj;
  }
}
