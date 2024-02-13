import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission
    
    // Implement login logic here
    console.log('Logging in...');
    
    // Simulating successful login
    const isLoggedIn = true; // Replace this with your actual login logic
    
    if (isLoggedIn) {
      // Redirect to home page upon successful login
      this.router.navigate(['/']);
    } else {
      // Handle unsuccessful login, show error message, etc.
      console.log('Login failed. Please try again.');
    }
  }
  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
