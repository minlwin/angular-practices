import { Routes } from '@angular/router';
import { BasicSignalComponent } from './pages/basic-signal/basic-signal.component';
import { SignalInputsComponent } from './pages/signal-inputs/signal-inputs.component';
import { CalculatorComponent } from './pages/basic-signal/calculator/calculator.component';
import { ShoppingCartComponent } from './pages/basic-signal/shopping-cart/shopping-cart.component';
import { CalculatorInputComponent } from './pages/signal-inputs/calculator-input/calculator-input.component';
import { ShoppingCartInputComponent } from './pages/signal-inputs/shopping-cart-input/shopping-cart-input.component';
import { NoSignalComponent } from './pages/no-signal/no-signal.component';
import { FormalCalculatorComponent } from './pages/no-signal/formal-calculator/formal-calculator.component';
import { FormalShoppingCartComponent } from './pages/no-signal/formal-shopping-cart/formal-shopping-cart.component';

export const routes: Routes = [
  {'path': 'legacy', component: NoSignalComponent, children: [
    {path: 'calculator', component: FormalCalculatorComponent},
    {path: 'shopping', component: FormalShoppingCartComponent},
    {path: '', redirectTo: '/legacy/calculator', pathMatch: 'full'}
  ]},
  {'path': 'basic', component: BasicSignalComponent, children: [
    {path: 'calculator', component: CalculatorComponent},
    {path: 'shopping', component: ShoppingCartComponent},
    {path: '', redirectTo: '/basic/calculator', pathMatch: 'full'}
  ]},
  {'path': 'inputs', component: SignalInputsComponent, children: [
    {path: 'calculator', component: CalculatorInputComponent},
    {path: 'shopping', component: ShoppingCartInputComponent},
    {path: '', redirectTo: '/inputs/calculator', pathMatch: 'full'}
  ]},
  {'path': '', redirectTo: '/legacy', pathMatch: 'full'}

];
