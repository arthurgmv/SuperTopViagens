import { Component } from '@angular/core';

@Component({
  selector: 'app-card02',
  standalone: true,
  imports: [],
  templateUrl: './card02.component.html',
  styleUrl: './card02.component.css'
})
export class Card02Component {
  faleConosco: string = "Venha viajar com a gente!";
  endereco: string = "Rua 7 de Setembro, 123, Barueri - SP";
  phone: string = "Fone: (11) 91234 8124";

}
