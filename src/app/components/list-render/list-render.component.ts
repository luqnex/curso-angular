import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRenderService } from '../../services/list-render.service';
import { IAnimal } from '../../interfaces/listRender';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: IAnimal[] = [];

  constructor(private listRenderService: ListRenderService) {
    this.handleGetAnimals();
  }

  handleDelete(id: number): void {
    this.listRenderService.remove(id);
    const animalsFiltered = this.animals.filter((animal) => animal.id !== id);
    this.animals = animalsFiltered;
  }

  handleGetAnimals(): void {
    this.listRenderService
      .getAll()
      .subscribe((animals) => (this.animals = animals));
  }
}
