import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Router, ActivatedRoute}                    from '@angular/router';
import {BreadCrumbService}                         from '../../../_services/bread-crumb/bread-crumb.service';
import { DomSanitizer } from '@angular/platform-browser';
import {SidenavToggleService} from '../../../_services/sidenav/sidenav-toggle.service';
import {MatDialog} from '@angular/material/dialog';
import {MatIconRegistry} from '@angular/material/icon';
import {SnackbarService} from '../../../_helpers/snackbar/snackbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public currentUserDetails: any;
  public title: string;
  @Input() toggleEvent: EventEmitter<any>;
  @Output() toggleSidenav = new EventEmitter<void>();
  sideNavToggled: any = true;

  constructor(
    private snackBar: SnackbarService,
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    public breadCrumbService: BreadCrumbService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private sidenavToggleService: SidenavToggleService
  ) {
    this.matIconRegistry.addSvgIcon('Help', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/SVG/Help.svg') );
    this.matIconRegistry.addSvgIcon('Chat', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/SVG/chat.svg') );
    this.matIconRegistry.addSvgIcon('Person', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/SVG/Blue/avatar.svg') );
    this.matIconRegistry.addSvgIcon('Books', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/SVG/books.svg') );  }

  ngOnInit() {
    this.breadCrumbService.title.subscribe(title => {
      this.title = title;
    });
    this.currentUserDetails = JSON.parse(localStorage.getItem('currentUser'));
    this.toggleEvent.subscribe(toggleEvent => {
      this.sideNavToggled = toggleEvent.open;
    });
    this.sidenavToggleService.toggleState.subscribe(state => {
      this.sideNavToggled = state;
    });
  }

  openConfirmLogoutDialog() {
  }

  currentUser() {
    return this.currentUserDetails = {};
  }
}
