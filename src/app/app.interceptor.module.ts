import { Injectable, NgModule } from '@angular/core';
import {  HttpEvent,  HttpInterceptor,  HttpHandler,  HttpRequest} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    const ts = new Date().getTime();
    const md5 = new Md5();
    const Request = req.clone({
       params: req.params.appendAll({
        'ts': ts,
        'apikey': environment.pubkey,
        'hash': md5.appendStr(ts + environment.pvtkey + environment.pubkey).end().toString()
      }),
    });

    return next.handle(Request);
 }

}
@NgModule({
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
   }]
})
export class Interceptor { }
