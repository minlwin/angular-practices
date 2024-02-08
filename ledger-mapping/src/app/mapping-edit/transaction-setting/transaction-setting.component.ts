import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-setting',
  templateUrl: './transaction-setting.component.html',
  styles: [
  ]
})
export class TransactionSettingComponent {

  form:FormGroup
  @Output()
  onTypeChange = new EventEmitter

  constructor(builder:FormBuilder) {
    this.form = builder.group({
      transactionType: 'P2P Transfer'
    })

    this.form.get('transactionType')?.valueChanges.subscribe(value => {
      this.onTypeChange.emit(value)
    })
  }

  transactionType = [
    "P2P Transfer", "Cash In", "Cash Out", "Topup"
  ]

  walletTypes = ["Level 2", "Level 3", "Level 4"]

  isNeedToShowTransferTo() {
    return this.form.get('transactionType')?.value == "P2P Transfer"
  }

  get providers() {
    return this.form.get('transactionType')?.value == 'Topup' ? ["Dinger"] : ["MTB", "MPU"]
  }
}
