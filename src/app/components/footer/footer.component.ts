import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer:string =''
  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getHereos$.subscribe((res:any)=>{
      this.footer = res.copyright
    })
  }

}
