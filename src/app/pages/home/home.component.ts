import { Component } from '@angular/core';
import { FirstComponentComponent } from '../../components/first-component/first-component.component';
import { ParentDataComponent } from '../../components/parent-data/parent-data.component';
import { IfRenderComponent } from '../../components/if-render/if-render.component';
import { EventsComponent } from '../../components/events/events.component';
import { EmitterComponent } from '../../components/emitter/emitter.component';
import { ListRenderComponent } from '../../components/list-render/list-render.component';
import { PipesComponent } from '../../components/pipes/pipes.component';
import { TwoWayBindingComponent } from '../../components/two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FirstComponentComponent,
    ParentDataComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Lucas Costa';
  title = 'curso-angular';
}
