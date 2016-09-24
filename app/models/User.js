import { observable } from 'mobx';

export default class User {
  constructor(login) {
    this.login = observable(login);
    this.isLoggedIn = observable(false);
    this.token = observable('');
  }
}