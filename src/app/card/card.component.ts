import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope,faMapMarkedAlt,faPhone,faDatabase} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user;

  public faEnvelope = faEnvelope;
  public faMapMarkedAlt = faMapMarkedAlt;
  public faPhone = faPhone;
  public faDatabase = faDatabase;
  
  constructor() { }

  ngOnInit(): void {
  }

}
