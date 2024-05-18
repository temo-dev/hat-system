import { NzTableModule } from 'ng-zorro-antd/table';
import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  item: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-payment-order',
  standalone: true,
  imports: [NzTableModule],
  template: `
    <nz-table
      #rowSelectionTable
      [nzData]="listOfData"
      (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
    >
      <thead>
        <tr>
          <th
            [nzSelections]="listOfSelection"
            [(nzChecked)]="checked"
            [nzIndeterminate]="indeterminate"
            (nzCheckedChange)="onAllChecked($event)"
          ></th>
          <th>Items</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        @for (data of rowSelectionTable.data; track data) {
        <tr>
          <td
            [nzChecked]="setOfCheckedId.has(data.id)"
            (nzCheckedChange)="onItemChecked(data.id, $event)"
          ></td>
          <td>{{ data.item }}</td>
          <td>{{ data.qty }}</td>
          <td>{{ data.price }}kc</td>
        </tr>
        }
      </tbody>
    </nz-table>
  `,
})
export class PaymentOrderComponent implements OnInit {
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  ngOnInit(): void {
    this.listOfData = new Array(10).fill(0).map((_, index) => ({
      id: index,
      item: `Zorro Coffee ${index}`,
      qty: 32,
      price: index * 100,
    }));
  }
}
