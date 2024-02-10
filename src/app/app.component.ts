import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { response } from 'express';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleComponent } from './pages/single/single.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,NavbarComponent,FooterComponent,HomeComponent,ContactComponent,ProductComponent,NotfoundComponent,SingleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfisat';
  data: any=[]
  slice: any;
  constructor(public api:ApiService){}
  
  ngOnInit()
  {
    this.api.getdata().subscribe(response=>{
      this.data=response
  })
    }
    
}
//   district : any=[
//     {
//       id:1,
//       title:"Thrissur",
//       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoxWaigcxzDBHxar1sZNcWINn3SNJiU-HUDVA6ZJskg&s",
//       desc:"Thrissur district was formed on 1 July 1949, with the headquarters at Thrissur City. Thrissur is known as the cultural capital of Kerala, and the land of Poorams."
//     },
//     {
//       id:2,
//       title:"Trivandrum",
//       image:"https://lh3.googleusercontent.com/proxy/fg8z8nXDu_6KlOR3fhsGgpIsyN1JsAxX2rOOOFr-38DSF4LDj1KQm8CZVe3hB5ho_gcDEpOTItWdiaFOdxpRjd9skHHdAbTDYU_gXonPn8z7_-KEE7XJMOI5jzxD3gpA",
//       desc:"Thiruvananthapuram Museums & Zoo owe its orgin to the joint efforts of Mr. J.A. Brown, former Director of Thiruvananthapuram Observatory, and General Cullen, a former British Resident. "
//     },
//     {
//       id:3,
//       title:"Alappuzha",
//       image:"https://www.keralatourism.org/images/destination/large/alappuzha20160801052013_60_1.jpg",
//       desc:"Known as the Venice of the east, Alappuzha is a waterlogged district endowed with immense natural beauty and has emerged as a major tourist destination of the country. Today Alappuzha is well known for its beaches and backwaters. "
//     },
//     {
//       id:4,
//       title:"Kozhikode",
//       image:"https://www.keralatourism.org/images/destination/mobile/kozhikode_beach20150811120557_256_1.jpg",
//       desc:">With a distinct place in the Indian history, with Vasco Da Gama landing in Kappad in 1498, Kozhikode is not only known for its historical significance."
//     },
//     {
//       id:5,
//       title:"Kollam",
//       image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/f4/af/worlds-largest-bird-sculpture.jpg?w=500&h=400&s=1",
//       desc:"The city is on the banks of Ashtamudi Lake and the Kallada river. Kollam is the fourth largest city in Kerala and is known for cashew processing and coir manufacturing. It is the southern gateway to the Backwaters of Kerala and is a prominent tourist destination"
  
//     },
//     {
//       id:6,
//       title:"Kannur",
//       image:"https://keralatourism.travel/images/destinations/headers/kannur-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
//       desc:"Kannur is dubbed as the City of Looms and Lores, thanks to the flourishing handloom industry and folk art called Theyyam. Theyyamis a ritualistic artform encompassing dance, music and mime, where the artist dons the guise of God."
  
//     },
//     {
//       id:7,
//       title:"Wayanad",
//       image:"https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2022/6/11/en-uru-10.jpg.transform/576x300/image.jpg",
//       desc:"This area is famous for its large amount of camping and trekking trails, breathtaking waterfalls, caves, bird watching sites, flora, fauna and an overall plethora of magnificent sights. This area has been a tourist favourite over the years"
  
//     },
//     {
//       id:8,
//       title:"Idukki",
//       image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/812.jpg",
//       desc:"Idukki district is famous for its rich flora and fauna. It is home to the popular Eravikulam National Park and is characterized by the Anamudi mountain. Idukki is one of the greenest districts of Kerala"
  
//     },
//     {
//       id:9,
//       title:"Palakkad",
//       image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/best-places-to-visit-in-palakkad-cover.jpg",
//       desc:"Palakkad is a vast stretch of fertile plains interspersed with hills, rivers, mountain streams and forests and is home to the Silent Valley National Park. A 40-kilometre mountain pass known as the Palakkad gap at the foothills of the Western Ghats, acts as a corridor between Kerala and Tamil Nadu."
  
//     },
//     {
//       id:10,
//       title:"Malappuram",
//       image:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/14105543/Top-tourist-attractions-in-Malappuram-and-things-to-do-04.jpg",
//       desc:" Malappuram is known for its natural beauty and for having a historical past. It is also known for its temples and Moplah mosques where festivals are celebrated with pomp and gaiety."
  
//     },
//     {
//       id:11,
//       title:"Pathanamthitta",
//       image:"https://www.keralatourism.org/images/destination/mobile/gavi20131127164933_355_1.jpg",
//       desc:"It is also known for exuberant fairs and festivals. Pathanamthitta district is known as the 'Headquarters of Pilgrimage Tourism', of the State"
  
//     },
//     {
//       id:12,
//       title:"Kottayam",
//       image:"https://www.keralatourism.org/images/microsites/kumarakom/kumarakom-kottayam.jpg",
//       desc:"Kottayam is also called as “Akshara Nagari” which means the “city of letters” considering its contribution to print media and literature. Kottayam Town is the first town in India to have achieved 100% literacy"
  
//     },
//     {
//       id:13,
//       title:"Kasargod",
//       image:"https://gokeralatourtravel.files.wordpress.com/2020/02/bekal1.jpg?w=1024",
//       desc:"The district has famous tourist centres, including the international fame BEKAL FORT & BEACH. There are also places which can be converted to attract the tourists. Kasaragod is known as the Land of Gods, Forts, Rivers, Beautiful hills and lengthy sandy beaches."
  
//     },
//     {
//       id:14,
//       title:"Ernakulam",
//       image:"https://www.keralatourism.org/images/destination/mobile/fort_kochi20131031104449_422_1.jpg",
//       desc:"Ernakulam is the biggest pineapple producing district in Kerala. Two bird sanctuaries in the district, Thattekkad and Mangalavanam, are shelter to the endangered species of birds and primordial spiders."
  
//     }
//   ]
// }