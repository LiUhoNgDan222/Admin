import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public timeLine = [{'time': {'date': '2017-11-11', 'times': '9:16:40'}, 'info': '127.0.0.1'},
    {'time': {'date': '2017-08-03', 'times': '10:22:04'}, 'info': '127.0.0.1'},
    {'time': {'date': '2017-06-23', 'times': '14:16:00'}, 'info': '127.0.0.1'},
    {'time': {'date': '2017-06-21', 'times': '17:26:45'}, 'info': '127.0.0.1'}];

  public oldPwd1 = '';
  public passwordCurrent = '';
  public confirmPwd = '';

  constructor() {
  }

  ngOnInit() {
  }
}

