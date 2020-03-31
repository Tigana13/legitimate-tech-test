import {AfterViewInit, Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import {SidenavToggleService} from '../../../_services/sidenav/sidenav-toggle.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
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
export class SideNavItemComponent implements OnInit, AfterViewInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item;
  @Input() depth: number;
  @Input() toggleEvent: EventEmitter<any>;
  sideNavToggled: any = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    private sidenavToggleService: SidenavToggleService,
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.registerMatIcon();
    this.expanded = this.router.isActive(this.item.route, false);
    this.toggleEvent.subscribe(toggleEvent => {
      this.sideNavToggled = toggleEvent.open;
    });
    this.sidenavToggleService.toggleState.subscribe(state => {
      this.sideNavToggled = state;
    });
  }

  ngAfterViewInit() {
  }

  onItemSelected(item) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  registerMatIcon() {
    this.matIconRegistry.addSvgIcon(this.item.title, this.domSanitizer.bypassSecurityTrustResourceUrl(this.item.iconURL));
  }
}

