import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  })
export class AppComponent {

  title = 'app works!';
  name: string;
  message: string;
  products: Array<string> = [];

  theDataSource: Observable<string>;

  constructor(private http: Http) {

    this.theDataSource = this.http.get('/api/products')
      .map(res => res.json());
  }

  onClick() {
    this.message = 'Hello ' + this.name;
  }

  onChangeEvent({target}){
    this.name = target.value;
    console.log(this.name);
  }


  ngOnInit(){

    // Get the data from the REST server
    this.theDataSource.subscribe(
      data => {
        if (Array.isArray(data)){
          this.products=data;
        } else{
          this.products.push(data);
        }
      },
      err =>
        console.log("Can't get products. Error code: %s, URL: %s ",  err.status, err.url),
      () => console.log('Product(s) are retrieved')
    );
  }
}
