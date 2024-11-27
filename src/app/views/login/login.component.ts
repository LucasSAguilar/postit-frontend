import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    console.log("aqui");
    
    // Após o login, redireciona para a página Home
    this.router.navigate(['/home']);
  }
}
