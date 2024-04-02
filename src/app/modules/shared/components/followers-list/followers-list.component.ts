import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css'],
})
export class FollowersListComponent implements OnInit, OnDestroy {
  constructor(
    private sharedServ: SharedServiceService,
    private router:Router,
  ) {}
  userList: any;
  followersList$ = new Subscription();
  ngOnInit(): void {
    this.getFollowersList();
  }

  getFollowersList() {
    this.followersList$ = this.sharedServ.getFollowersList().subscribe({
      next: (res) => {
        this.userList = res;
      },
      error: (err) => {
        alert(err.error.message)

      },
    });
  }

  getUserProfile(userId: any) {
    this.router.navigate([`/user/user-profile/${userId}`]);
  }

  ngOnDestroy(): void {
    this.followersList$.unsubscribe();
  }
}
