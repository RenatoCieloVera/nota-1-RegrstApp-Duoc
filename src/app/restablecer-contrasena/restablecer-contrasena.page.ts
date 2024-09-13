import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage {
  correo: string = '';

  constructor(private navCtrl: NavController) {}

  restablecerContrasena() {
    if (this.correo) {
      alert('Se ha enviado un correo para restablecer tu contraseña.'); 
      this.navCtrl.navigateRoot(['/home']);
    } else {
      alert('Por favor ingresa el correo electrónico');  
    }
  }
}
