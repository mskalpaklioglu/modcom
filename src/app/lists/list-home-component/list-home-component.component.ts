import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home-component',
  templateUrl: './list-home-component.component.html',
  styleUrls: ['./list-home-component.component.css']
})
export class ListHomeComponentComponent implements OnInit {


  numbers=[
    {value:50, label:'Müşteri'},
    {value:'3500TL', label:'Ciro'},
    {value:65, label:'Yorumlar'},
  ];

  images =[
  {
    image:'/assets/images/dresser.jpeg',
    title:'Şifonyer',
    description: 'Her türlü eşyanızı koyabileceğiniz şifonyer'
  },
  {
    image:'/assets/images/couch.jpeg',
    title:'Kanepe',
    description: 'Rahat koltuk'
  }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
