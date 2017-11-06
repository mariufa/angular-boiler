import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageComponent }   from './message.component';
import { MessageDetailComponent }      from './message-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  { path: 'message',  component: MessageComponent },
  { path: 'message/:id', component: MessageDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
