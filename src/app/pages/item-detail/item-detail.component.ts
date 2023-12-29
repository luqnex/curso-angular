import { Component } from '@angular/core';
import { ListRenderService } from '../../services/list-render.service';
import { ActivatedRoute } from '@angular/router';
import { IAnimal } from '../../interfaces/listRender';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent {
  animal?: IAnimal;

  constructor(
    private listRenderService: ListRenderService,
    private route: ActivatedRoute
  ) {
    this.handleGetAnimal();
  }

  handleGetAnimal() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.listRenderService
      .getById(id)
      .subscribe((animal) => (this.animal = animal));
  }
}
