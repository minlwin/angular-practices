import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapping-setting',
  templateUrl: './mapping-setting.component.html',
  styles: [
  ]
})
export class MappingSettingComponent {

  form:FormGroup

  @Input()
  set type(value:string) {
    if(value) {
      this.form.patchValue({type: value})
    }
  }

  get type() {
    return this.form.get('type')?.value
  }

  get mappings():FormArray {
    return this.form.get('mappings') as FormArray
  }

  constructor(private builder:FormBuilder) {
    this.form = this.builder.group({
      type: '',
      mappings: builder.array([])
    })

    this.form.get('type')?.valueChanges.subscribe(value => {
      this.mappings.clear()

      let array = this.searchDetails(value)

      for(let item of array) {
        this.mappings.push(builder.control(item))
      }

      console.log(this.form.value)
    })
  }

  searchDetails(value: "P2P Transfer" | "Cash In" | "Cash Out" | "Topup") {
    let master = {
      "P2P Transfer" : [
        "Transaction Amount"
      ],
      "Cash In" : MAPPINGS_MASTER,
      "Cash Out" : MAPPINGS_MASTER,
      "Topup" : MAPPINGS_MASTER
    }

    return master[value] || []
  }

}

const MAPPINGS_MASTER = [
  'Transaction Amount',
  'Charges - Wallet Operator',
  'Charges - Service Provider',
  'Discount - Wallet Operator',
  'Discount - Service Provider',
  'Commission Received',
  'Commission Paid',
  'T+1 Settlement'
]
