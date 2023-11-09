import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../presentation/sidebar/sidebar.component';
import { NavigationComponent } from '../../presentation/navigation/navigation.component';
import { ContentComponent } from '../../presentation/content/content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent, ContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {

}
