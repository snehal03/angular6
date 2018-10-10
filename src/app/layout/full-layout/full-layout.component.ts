import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $;

/**
 *  @author - Snehal Dhane
 * Full Layout component
 */
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {
public hidetoggle = true;
  // for large icons icon = ''fa fa-dashboard fa-lg fa-fw sidebar-icon'
  public menuItems = [
    {
      displayName: 'Dashboard',
      link: '/#',
      submenu: [],
      icon: 'fa fa-dashboard'
    },
    {
      displayName: 'Buttons',
      link: '/button',
      submenu: [],
      icon: 'fa fa-bars'
    },
    {
      displayName: 'Form',     
      link: '/form',
      submenu: [
        {
          displayName: 'Reactive',
          link: '/reactive',
          submenu: [],
          icon: 'fa fa-wpforms'
        },

        {
          displayName: 'Template Driven',
          link: '/templateDriven',
          submenu: [],
          icon: 'fa fa-wpforms'
        }
      ],
      icon: 'fa fa-wpforms'
    },
    {
      displayName: 'Color Picker',
      link: '/colorPicker',
      submenu: [],
      icon: 'fa fa-paw'
    },
    {
      displayName: 'Date Time Picker',
      link: '/dateTime',
      submenu: [],
      icon: 'fa fa-calendar'
    },
    {
      displayName: 'File Download',
      link: '/fileDownload',
      submenu: [],
      icon: 'fa fa-download '
    },
    {
      displayName: 'File Upload',
      link: '/fileUpload',
      submenu: [],
      icon: 'fa fa fa-upload'
    },
    {
      displayName: 'Injectable Service',
      link: '/injectableService',
      submenu: [],
      icon: 'fa fa-server'
    },
    {
      displayName: 'Modal',
      link: '/modal',
      submenu: [],
      icon: 'fa fa-object-group'
    }, {
      displayName: 'Filter Pipe',
      link: '/filterPipe',
      submenu: [],
      icon: 'fa fa-filter '
    },
    {
      displayName: 'Tables',
      link: '/tables',
      submenu: [],
      icon: 'fa fa-table'
    },
    {
      displayName: 'Loader',
      link: '/loader',
      submenu: [],
      icon: 'fa fa-spinner'
    },
    {
      displayName: 'Toaster',
      link: '/toaster',
      submenu: [],
      icon: 'fa fa-flag'
    },
    {
      displayName: 'Select Search',
      link: '/selectSearch',
      submenu: [],
      icon: 'fa fa-search'
    },
    {
      displayName: 'Tabs',
      link: '/tabs',
      submenu: [],
      icon: 'fa fa-tasks'
    },
    {
      displayName: 'Ngrx-Store',
      link: '/store',
      submenu: [
        {
          displayName: 'Generate Store',
          link: '/generateStore',
          submenu: [], 
          icon: 'fa fa-database'
        },
        {
          displayName: 'Use Store',
          link: '/useStore',
          submenu: [],
          icon: 'fa fa-database'
        }
      ],
      icon: 'fa fa-database'
    },
    {
      displayName: 'Google Map',
      link: '/googleMap',
      submenu: [],
      icon: 'fa fa-map-marker'
    }

  ];
  constructor(public router: Router) {}

  ngOnInit() {

      // $('#sidebar').mCustomScrollbar({
      //   theme: 'minimal'
      // });
  }

  sidebarCollapseClick(){
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    this.hidetoggle =  !this.hidetoggle;
    // if($('.collapse.in').toggleClass('in')){
    //   this.hidetoggle = true;
    // }
    // else{
    //   this.hidetoggle = false;
    // }
  }
}
