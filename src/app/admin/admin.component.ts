import { Component, OnInit } from '@angular/core';
import { AuthPipe } from '@angular/fire/auth-guard';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loading: boolean;
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.loading = false;
  }

  logout() {
    this.auth.logout();
  }
}
