import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {
  PaypalCaptureResponse,
  PaypalOrderResponse,
} from '../../shared/models/paypal-response.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private baseURL = `${environment.baseUrl}/checkout`;

  private http = inject(HttpClient);

  createPaypalOrder(suscripcionId: number) {
    let params = new HttpParams();
    params = params.append('suscripcionId', suscripcionId);
    params = params.append('returnUrl', environment.paypalReturnUrl);
    params = params.append('cancelUrl', environment.paypalReturnUrl);
    return this.http.post<PaypalOrderResponse>(`${this.baseURL}/create`, null, {
      params: params,
    });
  }

  capturePaypalOrder(orderId: string) {
    return this.http.post<PaypalCaptureResponse>(
      `${this.baseURL}/capture?orderId=${orderId}`,
      null
    );
  }
}
