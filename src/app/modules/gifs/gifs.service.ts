import { WalletService } from './../../core/services/wallet.service';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

import { WinRefService } from 'src/app/core/services/winref.service';
import { gifContract } from './gif-contract';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  gifsContract: any;
  ethereum: any = null;
  constructor(private winRef: WinRefService, private _walletService: WalletService) {
    this.ethereum = this.winRef.window.ethereum;
    if (!this.ethereum) return;

    this.gifsContract = new ethers.Contract(
      this._walletService.contractAddress,
      gifContract.abi,
      this._walletService.signer
    );
  }

  async getGifs() {
    try {
      const res = await this.gifsContract.getGifs();
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async addGif(
    url: string,
    title: string,
    description: string,
    tags: string[]
  ) {
    try {
      let model = [url, title, description, tags];

      let a = await this.gifsContract.addGif(...model);
      return a;
    } catch (error) {
      console.log(error);
    }
  }
}
