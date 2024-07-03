import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  @Input('color')
  currentColor = 'dynamic';

  @Input('align')
  align = 'center';

  constructor() { }

  ngOnInit(): void {
  }
}
