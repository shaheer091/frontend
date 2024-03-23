import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

declare var Razorpay: any;

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
})
export class PremiumComponent {
  constructor(private paymentServ: PaymentService) {}
  orderId: any;
  data: any;
  pricing = [
    {
      name: 'Free',
      price: 0,
      features: [
        { feat: 'Unlimited Websites' },
        { feat: '1 User' },
        { feat: '100MB Space/website' },
        { feat: 'Continuous deployment' },
        { feat: 'No priority support' },
      ],
      btn: 'buy now',
    },
    {
      name: 'Pro',
      price: 109,
      features: [
        { feat: 'Unlimited Websites' },
        { feat: '5 User' },
        { feat: '512MB Space/website' },
        { feat: 'Continuous deployment' },
        { feat: 'Email Support' },
      ],
      btn: 'buy now',
    },
    {
      name: 'Enterprise',
      price: 189,
      features: [
        { feat: 'Unlimited Websites' },
        { feat: 'unlimited User' },
        { feat: 'unlimited Space/website' },
        { feat: 'Continuous deployment' },
        { feat: '24/7 Email support' },
      ],
      btn: 'buy now',
    },
  ];

  buyNow(price: Number) {
    this.paymentServ.order(price).subscribe({
      next: (res) => {
        this.orderId = res.id;
        const options = {
          key: 'rzp_test_dRIwkROLF4t3ER',
          amount: res.amount * 100,
          currency: 'INR',
          name: 'BeatBlend',
          description: 'Payment for Premium Plan',
          image: '',
          order_id: this.orderId,
          handler: (response: any) => {
            this.paymentResponseHandler(response);
          },
        };
        const rzp = new Razorpay(options);
        rzp.open();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  paymentResponseHandler(response: any) {
    this.data = response;
    console.log(this.data);
    this.paymentServ.successPayent(this.data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
