import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular'
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage {

  public cadastros = {
    'titulo': null,
    'valor': null
  }
  
  constructor(private apiService: ApiService,public alertController: AlertController,public router: Router) { }

  public async cadastroSorvete(){
    
    if(!this.cadastros.titulo || !this.cadastros.valor){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha os campos!',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      this.apiService.postCadastros(this.cadastros).subscribe((result:any) => {
        let navigationExtras: NavigationExtras = {
          state: {
            cadastros: this.cadastros
          }
        };
        this.router.navigate(['/tabs/tab2'],navigationExtras);
      })     
    }  
  }
}
