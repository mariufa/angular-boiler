import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LoginComponent} from './login.component';
import { MessageComponent }   from './message.component';
import { MessageDetailComponent }      from './message-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  { path: 'message',  component: MessageComponent, canActivate: [AuthGuard] },
  { path: 'message/:id', component: MessageDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
