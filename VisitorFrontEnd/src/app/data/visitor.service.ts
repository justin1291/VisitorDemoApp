import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoIpInfo } from '../util/geoIpInfo';

@Injectable()
export class VisitorService {

  constructor(private http: HttpClient) { }

  public allVisitors() {
    return this.http.get<GeoIpInfo[]>('./api/visitor');
  }

}
