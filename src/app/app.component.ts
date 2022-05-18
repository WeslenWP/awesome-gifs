import { WalletService } from './core/services/wallet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _walletService: WalletService, private _router: Router) {

  }
  account: any = {
    wallet: '',
    balance: ''
  };

  ngOnInit(): void {
    this._walletService.isAccountConnected().then((subject: any) => {
      subject.subscribe((wallet: string) => { this.account.wallet = wallet; if (wallet) this._router.navigateByUrl('/gifs') })
    })
  }


}
