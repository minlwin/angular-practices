import { Routes } from '@angular/router';
import { BasicSignalComponent } from './pages/basic-signal/basic-signal.component';
import { SignalInputsComponent } from './pages/signal-inputs/signal-inputs.component';
import { CalculatorComponent } from './pages/basic-signal/calculator/calculator.component';
import { ShoppingCartComponent } from './pages/basic-signal/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {'path': 'basic', component: BasicSignalComponent, children: [
    {path: 'calculator', component: CalculatorComponent},
    {path: 'shopping', component: ShoppingCartComponent},
    {path: '', redirectTo: '/basic/calculator', pathMatch: 'full'}
  ]},
  {'path': 'inputs', component: SignalInputsComponent},
  {'path': '', redirectTo: '/basic', pathMatch: 'full'}

];
