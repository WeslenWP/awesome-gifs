import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { url } from 'inspector';
import { title } from 'process';
import { WinRefService } from 'src/app/core/services/winref.service';
import { abi } from './contract';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  contractAddress: any;
  contractABI: any;
  provider: any;
  signer: any;
  gifsContract: any;
  ethereum: any = null;
  constructor(private winRef: WinRefService) {
    this.ethereum = this.winRef.window.ethereum;
    if (!this.ethereum) return;

    this.contractAddress = '0xAaf8C2E99C71df4A977e49318384A329F93E2a50';
    this.contractABI = abi.abi;
    this.provider = new ethers.providers.Web3Provider(this.ethereum);
    this.signer = this.provider.getSigner();
    this.gifsContract = new ethers.Contract(
      this.contractAddress,
      this.contractABI,
      this.signer
    );

    this.checkIfWalletIsConnected();
  }

  async checkIfWalletIsConnected() {
    try {
      if (!this.ethereum) {
        console.log('Garanta que possua a Metamask instalada!');
        return;
      }
      const accounts = await this.ethereum.request({
        method: 'eth_accounts',
      });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Encontrada a conta autorizada:', account);
        return true;
      } else {
        let request = await this.ethereum.request({
          method: 'eth_requestAccounts',
        });
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async getGifs() {
    const res = await this.gifsContract.getGifs();
    return res;
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
