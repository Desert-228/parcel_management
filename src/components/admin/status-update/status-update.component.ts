import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-update',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './status-update.component.html',
  styleUrl: './status-update.component.css'
})
export class StatusUpdateComponent {
  errorMessage="No deliveries to update"
}
