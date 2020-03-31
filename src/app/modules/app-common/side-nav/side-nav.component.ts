import {Component, EventEmitter, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
import {SidenavToggleService} from '../../../_services/sidenav/sidenav-toggle.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SideNavComponent implements OnInit {
  sidenavWidth: Observable<any> = of(20);
  toggleEvent: EventEmitter<any> = new EventEmitter<any>();
  sidenavToggled: Observable<any> | any = this.sidenavToggleService.toggleState.value;
  singleProfileSideItem: any = {
    title: 'Profile',
    icon: 'person',
    route: '/jobs/available',
    iconURL: '/assets/SVG/user-white.svg'
  }
  routes: any[] = [
    {
      title: 'Dashboard',
      icon: 'compass',
      route: '/jobs/available',
      iconURL: '/assets/SVG/dashboard.svg'
    },
    {
      title: 'Make a request',
      icon: 'hour-glass',
      route: '/jobs/current',
      iconURL: '/assets/SVG/comment.svg',
    },
    {
      title: 'Bulk request',
      icon: 'referral',
      route: '/jobs/revision',
      iconURL: '/assets/SVG/conversation.svg'
    },
    {
      title: 'Reports',
      icon: 'court',
      route: '/jobs/disputed',
      iconURL: '/assets/SVG/paper.svg'
    },
    {
      title: 'Payments',
      icon: 'delivery-complete',
      route: '/jobs/finished',
      iconURL: '/assets/SVG/dollar.svg'
    },
    {
      title: 'Downloads',
      icon: 'gavel',
      route: '/jobs/bids',
      iconURL: '/assets/SVG/download.svg',
    },
    {
      title: 'FAQs',
      icon: 'gavel',
      route: '/trips/list',
      iconURL: '/assets/SVG/faq.svg',
    },
    {
      title: 'APIs',
      icon: 'gavel',
      route: '/trips/list',
      iconURL: '/assets/SVG/api.svg',
    },
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidenavToggleService: SidenavToggleService,
    public router: Router
  ) {}

  ngOnInit() {
    const membership = JSON.parse(localStorage.getItem('membership'));
    this.routes = this.routes.filter(route => {
      if (route.title === 'Merchandising') {
        if (membership && membership.is_merchandiser) {
          return route;
        }
        return;
      }
      if (route.title === 'Distributors') {
        if (membership && membership.business_category === 'MANUFACTURER') {
          return route;
        }
        return;
      }
      if (route.title === 'Customers') {
        if (membership && membership.customer_categorization === 'INDIVIDUAL') {
          return route;
        }
        if (membership && membership.customer_categorization === 'BOTH') {
          return route;
        }
        return;
      }
      if (route.title === 'Outlets') {
        if (membership && membership.customer_categorization === 'BUSINESS') {
          return route;
        }
        if (membership && membership.customer_categorization === 'BOTH') {
          return route;
        }
        return;
      }
      return route;
    });
  }

  toggleSidenav() {
    this.sidenavToggleService.toggleSidenavStatus();
    this.sidenavToggleService.toggleState.subscribe(status => {
      this.sidenavToggled = status;
      this.toggleEvent.emit({open: status});
    });
  }

  // Return observable form of a value
  of(value) {
    return of(value);
  }
}
