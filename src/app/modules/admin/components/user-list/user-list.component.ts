import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonService } from 'src/app/services/common.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(
    private adminServ: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  userData: any;
  message: any;
  success: any;
  userId: any;
  showDelDiv: Boolean = false;
  togle = false;
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.adminServ.getAllUsers().subscribe((res) => {
      this.success = res.success;
      if (this.success) {
        this.userData = res.user;
      } else {
        this.message = res.message;
      }
    });
  }

  deleteUser(event: any, userId: any) {
    event.stopPropagation();
    this.userId = userId;
    this.showDelDiv = true;
    this.togle = !this.togle;
  }

  confirmDelete() {
    this.adminServ.changeDeleteStatus(this.userId).subscribe((res) => {
      this.getUser();
    });
    this.showDelDiv = false;
  }

  getUserDetails(userId: any) {
    console.log(userId);
    const queryParams = {
      id: userId,
    };
    this.router.navigate(['/admin/user-profile'], {
      relativeTo: this.route,
      queryParams: queryParams,
    });
  }

  blockUser(event: any, userId: any) {
    event.stopPropagation();
    this.adminServ.changeBlockStatus(userId).subscribe({
      next: (res) => {
        console.log(res);
        this.getUser();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
