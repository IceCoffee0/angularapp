import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
  <div class="container">
  <h1>Welcome to my {{title}}</h1>
  <img class="avatar" src="{{defaultAvatar.url}}">
  <h2>My name is {{person.firstName}} {{person.lastName}}</h2> 
  <h2>Address: {{person.address.homeNum}} {{person.address.street}}</h2>
  <h2>My friends:</h2>
  <ul class="friendList">
    <li *ngFor="let friend of person.friends">
      {{friend.name}}
    </li>
  </ul>
  <div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  person = {
    firstName:'Duy',
    lastName:'Ngo',
    address: {
      homeNum: 35,
      street: 'Nhan Hoa',
    },
    friends:[
      {name: 'thien'},
      {name: 'tuan'},
    ]
  }
  defaultAvatar = {
    url: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
  }
}
