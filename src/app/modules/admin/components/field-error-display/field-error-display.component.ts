import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.css']
})
export class FieldErrorDisplayComponent implements OnInit {

  @Input() errorMsg: string="";
  @Input() displayError: boolean=false;

  constructor() { }

  ngOnInit(): void {
    // Initialisez ici toute logique nécessaire avec l'affichage d'un message d'erreur
  }

}