import { Component } from "@angular/core";

@Component({
    templateUrl: "main.html",
    styleUrls: ["main.scss"]
})
export class MainComponent {

    single = [
        {
          "name": "WKN 12345678, USD",
          "value": 8950000
        }/*,
        {
          "name": "Austria",
          "value": 3532030
        }*/
    ];

    colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
    cardColor: string = '#232837';
}
