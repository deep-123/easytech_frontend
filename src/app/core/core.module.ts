import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { ProfilerService } from './services/profiler.service';
import { httpInterceptorProviders } from './interceptors';


@NgModule({
  imports: [ HttpClientModule ],
  declarations: [],
  providers: [ 
    LoaderService, 
    ProfilerService,  
    httpInterceptorProviders
  ]
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core is already loaded. Import it in the AppModule only');
    }
  }

}
