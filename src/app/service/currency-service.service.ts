import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  

  constructor(private http : HttpClient) { }

  allFlags (): Observable<any>{
    return this.http.get<any>(`https://restcountries.com/v3.1/all`)
  }
  getCurrency() :Observable<any>{
    return this.http.get<any>('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
  }
  baseCurrency(base:any) : Observable<any>{
    return this.http.get<any>(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}.json`)
  }
   getAllCurrency (): Observable<any>{
    return this.http.get<any>('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
  }

  convertCurrency(base: any, quote:any): Observable<any> {
    return this.http.get<any>(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}/${quote}.json`)
  }
  
}



