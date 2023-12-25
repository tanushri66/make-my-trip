import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
  city:string="";
  selectedDate!:Date[];
  selRooms:string="";
  checkInDate:any;
  checkOutDate:any;

  roomsOptArr:string[] = ["1 Room,1 Adults","1 Room,2 Adults","2 Room,4 Adults"]
  searcHotel(){
    console.log("Sel ",this.city);
    console.log("Sel Date ", this.selectedDate);
  }

  dateChange(){
    if(this.selectedDate && this.selectedDate.length == 2){
      this.checkInDate = this.selectedDate[0];
      this.checkOutDate = this.selectedDate[1];
    }
  }

  selectRooms(option:string){
    this.selRooms = option ;
  }
}
