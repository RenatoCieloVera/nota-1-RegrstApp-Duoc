import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public nombreUsuario: string = '';
  public correo: string = ''; 
  public contrasena: string = '';
  public trato: boolean = false;
  
  constructor(private navCtrl: NavController) {}

  iniciarSesion() {
    if (this.nombreUsuario && this.correo && this.contrasena) {
      this.navCtrl.navigateForward(['/ingreso-usuario'], { 
        queryParams: { nombreUsuario: this.nombreUsuario }
      });
    } else {
      alert('Por favor ingresa todos los datos: nombre de usuario, correo y contraseña');
    }
  }

  irARestablecerContrasena() {                        
    this.navCtrl.navigateForward(['/restablecer-contrasena']);
  }
}
