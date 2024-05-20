// Core Module
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule }               from '@angular/platform-browser/animations';
import { BrowserModule, Title }                  from '@angular/platform-browser';
import { HttpClientModule }                      from '@angular/common/http';
import { AppRoutingModule }                      from './app-routing.module';
import { APP_INITIALIZER, NgModule }                              from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';

// Main Component
import { AppComponent }                    from './app.component';
import { HeaderComponent }                 from './components/header/header.component';
import { SidebarComponent }                from './components/sidebar/sidebar.component';
import { SidebarRightComponent }           from './components/sidebar-right/sidebar-right.component';
import { TopMenuComponent }                from './components/top-menu/top-menu.component';
import { PanelComponent }                  from './components/panel/panel.component';
import { FloatSubMenuComponent }           from './components/float-sub-menu/float-sub-menu.component';
import { ThemePanelComponent }             from './components/theme-panel/theme-panel.component';

// Component Module
import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';
import { HighlightModule, HIGHLIGHT_OPTIONS }       from 'ngx-highlightjs';

// Plugins
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDaterangepickerMd }            from 'ngx-daterangepicker-material';
import { NgxEditorModule }                 from 'ngx-editor';
import { ColorSketchModule }               from 'ngx-color/sketch';
import { NgxDatatableModule }              from '@swimlane/ngx-datatable';
import { FullCalendarModule }              from '@fullcalendar/angular';
import { CountdownModule }                 from 'ngx-countdown';
import { NgxChartsModule }                 from '@swimlane/ngx-charts';
import { NgApexchartsModule }              from 'ng-apexcharts';
import { NgChartsModule }                  from 'ng2-charts';
import { CalendarModule, DateAdapter }     from 'angular-calendar';
import { adapterFactory }                  from 'angular-calendar/date-adapters/date-fns';
import { TrendModule }                     from 'ngx-trend';

// Pages
import { HomePage }          from './pages/home/home';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManufacturerComponent } from './pages/manufacturer/manufacturer.component';
import { ManufacturerAddComponent } from './pages/manufacturer/manufacturer-add/manufacturer-add.component';
import { ModelComponent } from './pages/model/model.component';
import { ModelAddComponent } from './pages/model/model-add/model-add.component';
import { CarComponent } from './pages/car/car.component';
import { CarAddComponent } from './pages/car/car-add/car-add.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceAddComponent } from './pages/service/service-add/service-add.component';

// Error
import { ErrorPage }          from './pages/error/error';
import { ConfigService } from './service/config.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterService } from './service/register.service';




export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    PanelComponent,
    FloatSubMenuComponent,
    ThemePanelComponent,
    
    HomePage,
    LoginComponent,
    RegisterComponent,
    ManufacturerComponent,
    ManufacturerAddComponent,
    ModelComponent,
    ModelAddComponent,
    CarComponent,
    CarAddComponent,
    ServiceComponent,
    ServiceAddComponent,
    
    ErrorPage
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    FormsModule,
    
    // plugins
    HighlightModule,
    ColorSketchModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgxEditorModule,
    NgxDaterangepickerMd.forRoot(),
    NgxDatatableModule,
    FullCalendarModule,
    CountdownModule,
    NgxChartsModule,
    NgApexchartsModule,
    NgChartsModule,
    TrendModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [ 
    RegisterService,
    Title, {
		provide: NG_SCROLLBAR_OPTIONS,
		useValue: {
			visibility: 'hover'
		}
  }, {
		provide: HIGHLIGHT_OPTIONS,
		useValue: {
			coreLibraryLoader: () => import('highlight.js/lib/core'),
			languages: {
				typescript: () => import('highlight.js/lib/languages/typescript'),
				css: () => import('highlight.js/lib/languages/css'),
				xml: () => import('highlight.js/lib/languages/xml')
			}
		}
	},
  {
    provide: APP_INITIALIZER,
    useFactory: configFactory,
    deps: [ConfigService],
    multi: true
  },
  provideAnimationsAsync()],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        var title = 'Automotive Mechanics | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}
