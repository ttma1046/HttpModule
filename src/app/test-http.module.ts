import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service';

@NgModule({
  imports: [HttpModule],
  providers: [HttpService],
  exports: [HttpService]
})
export class TestHttpModule { }
