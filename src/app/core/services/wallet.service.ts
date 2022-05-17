import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { WinRefService } from './winref.service';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  contractAddress: any;
  contractABI: any;
  provider: any;
  signer: any;
  ethereum: any = null;

  constructor(private _winRef: WinRefService) {
    this.ethereum = this._winRef.window.ethereum;

    if (!this.ethereum) {
      throw new Error('Metamask não instalado');
    }

    this.contractAddress = '0xAaf8C2E99C71df4A977e49318384A329F93E2a50';
    this.provider = new ethers.providers.Web3Provider(this.ethereum);
    this.signer = this.provider.getSigner();
  }

  walletAdress: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get walletAdress$() {
    return this.walletAdress.asObservable();
  }

  async requestConnect() {

    try {
      // Request connection
      let response = await this.ethereum.request({
        method: 'eth_requestAccounts',
      })

      this.walletAdress.next(response[0]);
    } catch (error) {
      console.log(error)
    }


  }

  async isAccountConnected() {
    try {
      let response = await this.ethereum.request({
        method: 'eth_accounts',
      })

      this.walletAdress.next(response[0]);

      return this.walletAdress;
    } catch (error) {
      return false;
    }
  }

}
