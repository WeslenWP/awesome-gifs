import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Wallet } from 'ethers';
import { WalletService } from 'src/app/core/services/wallet.service';

@Component({
  selector: 'app-warn',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  constructor(private _walletService: WalletService, private _router: Router) {
    setTimeout(() => { }, 2000)
  }
  isConnectingWallet: boolean = false;

  ngOnInit(): void {

  }
  start() {
    if (!this.isConnectingWallet) {
      this.isConnectingWallet = true
      this._walletService.requestConnect()
        .finally(() => { this.isConnectingWallet = false, this._router.navigateByUrl('/gifs') })
    }
  }
}
