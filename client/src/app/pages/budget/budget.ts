import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Destination} from '../../service/destination/destination';
import {Router} from '@angular/router';

@Component({
  selector: 'app-budget',
  imports: [FormsModule],
  templateUrl: './budget.html',
  styleUrl: './budget.css'
})
export class Budget {
  destination = inject(Destination)
  router = inject(Router)

  onBudgetChange(value: string) {
    const budget = Number(value);
    this.destination.selectedBudget.set(budget);
  }

  back() {
    void this.router.navigate(['']);
  }

  next() {
    void this.router.navigate(['/weather-currency']);
  }
}
