import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeoIpInfo } from './GeoIpInfo';
import { ExtAPIGeoIp } from './extAPIGeoIp';

@Injectable()
export class GeoIpService {

  private currentUserGeoIPObj: GeoIpInfo;

  constructor(private http: HttpClient) { }

  public geoIpInfo() {
    return this.http.get<ExtAPIGeoIp>('http://freegeoip.net/json/');
  }

  public postGeoIpInfo(currentIpInfo: GeoIpInfo) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<GeoIpInfo>('./api/visitor', currentIpInfo, {headers: headers});
  }

  public setUserIPInfo(geoIpObj: GeoIpInfo) {
    this.currentUserGeoIPObj = geoIpObj;
  }

}
