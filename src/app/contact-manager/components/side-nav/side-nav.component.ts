import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isSmallScreen: boolean = false;

  users: Observable<User[]> | undefined;

  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(
    private breakPointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.breakPointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });

      this.users = this.userService.users;
      this.userService.loadAll();

      this.users.subscribe(data=> {
        if(data.length > 0)
          this.router.navigate(['/contact-manager', data[0].id]);
      });

      this.router.events.subscribe(() => {
        if(this.isSmallScreen)
          this.sidenav?.close();
      });
  }

}
