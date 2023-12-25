import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  searchHotelObj: any = {
    city: "",
    checkInDate: null,
    checkOutDate: null,
    rooms: "",
  }

  hotelList: any;
  selectedType: string = "";
  hotelListCopy: any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpService, private router: Router) {
    this.searchHotelObj.city = this.activatedRoute.snapshot.queryParamMap.get("city");
    this.searchHotelObj.checkInDate = this.activatedRoute.snapshot.queryParamMap.get("checkIn");
    this.searchHotelObj.checkOutDate = this.activatedRoute.snapshot.queryParamMap.get("checkout");
    this.searchHotelObj.rooms = this.activatedRoute.snapshot.queryParamMap.get("rooms");
    console.log("Search Hotel Obj ", this.searchHotelObj);
  }

  ngOnInit() {
    let endPoint = "search-hotels";
    this.http.getHotesDataFromServer(endPoint, this.searchHotelObj).subscribe((el: any) => {
      if (el && el.response && el.response.personalizedSections) {
        this.hotelList = el.response.personalizedSections[0].hotels;
        console.log("Hotel ", this.hotelList);
      }
    })
  }

}



