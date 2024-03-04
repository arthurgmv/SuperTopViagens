import { Component } from '@angular/core';

@Component({
  selector: 'app-card01',
  standalone: true,
  imports: [],
  templateUrl: './card01.component.html',
  styleUrl: './card01.component.css'
})
export class Card01Component {
china: string = "A Grande Muralha da China";
chinaDescription: string = "Localizada no coração desta potência econômica do leste asiático,\n" +
  "        a muralha da china lhe mostrará o lado mistíco deste incrível país.";
rio: string = "Rio de Janeiro";
rioDescription: string = "A cidade maravilhosa pode ser o seu próximo destino, cheia de vida, com inúmeros pontos turísticos e praias lindas, venha conhecer toda beleza do Corcovado, do Pão de Açúcar,\n" +
  "        da Urca, Escadaria Selarón entre muitas outras atrações.";
peru: string = "Machu Picchu";
peruDescription: string = "Uma cidade misteriosa nos andes peruanos lhe espera para uma experiência única neste lindo\n" +
  "        lugar cheio de história, cultura e culinária única!."
}
