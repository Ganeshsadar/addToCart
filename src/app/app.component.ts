import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'derectiveFor';

  cnt: number = 0;
  isShow = this.cnt;
  check() {
    this.cnt = this.cnt + 1;
  }


  myArr: String[] = ["lmn", "pqr", "abc", "xyz"];
  std1 = {
    name: "ganesh",
    marks: 123,
    rn: 1
  }
  std2 = {
    name: "vikram",
    marks: 456,
    rn: 2
  }
  myA: any[] = [this.std1, this.std2];
  isvalid: boolean = true;
  change(valu: any) {
    this.isvalid = valu;
  }
  employ: any[] = [{ employid: 1, name: "ramesh", age: 34 },
  { employid: 2, name: "kartik", age: 33 }];

  student: any[] = [];
  constructor() {
    this.student = [
      {
        studentid: 1,
        name: "ganesh",
        age: 24,
        gender: "male"
      },
      {
        studentid: 2,
        name: "mahesh",
        age: 25,
        gender: "male"
      }
      ,
      {
        studentid: 3,
        name: "soni",
        age: 24,
        gender: "femail"
      }
    ]
  }


  onclick() {
    this.student = [
      {
        studentid: 1,
        name: "ganesh",
        age: 24,
        gender: "male"
      },
      {
        studentid: 2,
        name: "mahesh",
        age: 25,
        gender: "male"
      }
      ,
      {
        studentid: 3,
        name: "soni",
        age: 24,
        gender: "femail"
      },
      {
        studentid: 4,
        name: "rani",
        gender: "femail"
      }

    ]

  }
  trackByon(index: any, student: any): string {
    return student.studentid;
  }
  contrydetail: any[] = [{
    contry: "india",
    people: [
      {
        name: "ganesh"
      },
      {
        name: "mahesh"
      },
      {
        name: "ramesh"
      }
    ]
  },
  {
    contry: "uk",
    people: [
      {
        name: "tim"
      },
      {
        name: "john"
      },
      {
        name: "martin"
      }
    ]
  }
  ]


  contrys: any[] = [

    {
      name: "ganesh sadar",
      contry: "india"
    },
    {
      name: "ramesh",
      contry: "uk"
    },
    {
      name: "mukesh",
      contry: "us"
    },
    {
      name: "mahesh",
      contry: "india"
    },
    {
      name: "vishal",
      contry: "us"
    }

  ]
  // getcolor(contry: any)
  //  {
  //   switch (contry) {
  //     case 'india':
  //       return "green";
  //     case 'us':
  //       return "red";
  //     case 'uk':
  //       return "yellow"
  //   }
  // }
}
