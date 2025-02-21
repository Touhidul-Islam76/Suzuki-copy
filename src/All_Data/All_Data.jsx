import slider1 from '../assets/slider/Slider1.webp';
import slider2 from '../assets/slider/Slider2.webp';
import slider3 from '../assets/slider/Slider3.webp';
import bike from '../assets/bike-info/gsx-125.webp';
import bike2 from '../assets/bike-info/gixxer-250.webp';
import bike3 from '../assets/bike-info/gixxer-sf-250.webp';
import bike4 from '../assets/bike-info/gsx-r150.webp';
import bike5 from '../assets/bike-info/gixxer-sf.webp';
import bike6 from '../assets/bike-info/gixxer.webp';
import bike7 from '../assets/bike-info/gixxer-monotone.webp';
import bike8 from '../assets/bike-info/access-125.webp';
import bike9 from '../assets/bike-info/hayate-ep.webp';
import top1 from '../assets/top_news/top1.webp';
import top2 from '../assets/top_news/top2.webp';
import top3 from '../assets/top_news/top3.webp';
import top4 from '../assets/top_news/top4.webp';
import top5 from '../assets/top_news/top5.webp';
import top6 from '../assets/top_news/top6.webp';
import top7 from '../assets/top_news/top7.webp';
import top8 from '../assets/top_news/top8.webp';
import top9 from '../assets/top_news/top9.webp';
import top10 from '../assets/top_news/top10.webp';

const All_Data = {
  slider: [
    { id: 1, img: slider1 },
    { id: 2, img: slider2 },
    { id: 3, img: slider3 }
  ],
  bike_info: [
    { id: 1, img: bike, name: 'GSX 125', price: ' 141,950.00', bike_category:'Commuter', type:'Air-Cooled, 4-stroke, 1-Cylinder', cc:'125', max_power:'7.8ps@9000rpm', max_torque:'9.2 Nm@7000rpm', mileage_company:'60 KM/L (Approx)', mileage_user:'42 KM/L (Approx)', cooling:'Air Cooled', starting:'Electric', gear:'5-Speed, Constant Mesh', clutch:'Multiplate wet type', engine_oil:'10W-40' },
    { id: 2, img: bike2, name: 'Gixxer 250', price: ' 299,950.00', bike_category:'Naked Sports', type:'4-Stroke, 1-cylinder, Oil cooled', cc:'250', max_power:'26.14 Bhp @ 9300 RPM', max_torque:'22.2 NM @ 7300 RPM', mileage_company:'45 KM/L (Approx)', mileage_user:'35 KM/L (Approx)', cooling:'Liquid Cooled', starting:'Electric', gear:'6-Speed, Constant Mesh', clutch:'Wet Multiple-disc', engine_oil:'10W-40'},
    { id: 3, img: bike3, name: 'Gixxer SF 250', price: ' 320,000.00', bike_category:'Sports', type:'4-Stroke, 1-cylinder, Oil cooled', cc:'250', max_power:'26.5ps@9300 rpm', max_torque:'22.2Nm@7300 rpm', mileage_company:'45 KM/L (Approx)', mileage_user:'35 KM/L (Approx)', cooling:'Oil cooled', starting:'Electric', gear:'6-Speed, Constant Mesh', clutch:'Wet Multiple-disc', engine_oil:'10W-40' },
    { id: 4, img: bike4, name: 'GSX R150', price: ' 350,000.00', bike_category:'Sports', type:'4-Stroke, 1 Cylinder, Liquid Cooled, DOHC', cc:'149', max_power:'18.9 BHP @ 10,500 rpm', max_torque:'14 NM @ 9000 rpm', mileage_company:'45 KM/L (Approx)', mileage_user:'38 KM/L (Approx)', cooling:'	Liquid Cooled', starting:'Electric', gear:'6-Speed, Constant Mesh', clutch:'Wet Multiple-disc', engine_oil:'10W-40' },
    { id: 5, img: bike5, name: 'Gixxer SF', price: ' 219,950.00',  bike_category:'Sports', type:'Air-Cooled, 4-stroke, 1-Cylinder', cc:'155', max_power:'14.1ps@8000rpm', max_torque:'14.0 Nm@6000rpm', mileage_company:'45 KM/L (Approx)', mileage_user:'42 KM/L (Approx)', cooling:'Air cooled', starting:'Electric', gear:'	5 speed, MT', clutch:'Wet multiplate', engine_oil:'10W-40' },
    { id: 6, img: bike6, name: 'Gixxer', price: ' 210,000.00', bike_category:'Sports', type:'Air-Cooled, 4-stroke, 1-Cylinder', cc:'155', max_power:'14.1ps@8000rpm', max_torque:'14.0 Nm@6000rpm', mileage_company:'45 KM/L (Approx)', mileage_user:'42 KM/L (Approx)', cooling:'Air cooled', starting:'Electric', gear:'	5 speed, MT', clutch:'Wet multiplate', engine_oil:'10W-40'},
    { id: 7, img: bike7, name: 'Gixxer Monotone',price: ' 198,000.00', bike_category:'	Commuter', type:'Air-Cooled, 4-stroke, 1-Cylinder', cc:'	154.9', max_power:'14.8ps@8000rpm', max_torque:'14Nm@6000rpm', mileage_company:'50 KM/L (Approx)', mileage_user:'40 KM/L (Approx)', cooling:'Air cooled', starting:'Electric', gear:'	5 speed, MT', clutch:'Wet multiplate', engine_oil:'10W-40' },
    { id: 8, img: bike8, name: 'Access 125', price: ' 130,000.00', bike_category:'Scooter', type:'Air-Cooled, 4-stroke, 1-Cylinder', cc:'124', max_power:'8.7ps@7000 rpm', max_torque:'10.2N-m @5000 rpm', mileage_company:'50 KM/L (Approx)', mileage_user:'42 KM/L (Approx)', cooling:'Air cooled', starting:'Electric & Kick', gear:'CVT', clutch:'None', engine_oil:'10W-40'},
    { id: 9, img: bike9, name: 'Hayate EP', price: ' 99,950.00', bike_category:'Commuter', type:'	4 -Stroke,1-Cylinder, Air cooled, SOHC, 2 Valve', cc:'113', max_power:'8.7Ps @ 7500rpm', max_torque:'9.3Nm @ 5000rpm', mileage_company:'70 KM/L (Approx)', mileage_user:'60 KM/L (Approx)', cooling:'Air Cooled', starting:'Electric & Kick', gear:'4-Speed, Constant Mesh', clutch:'Wet Type Multiplate', engine_oil:'10W-40' }
  ],
  top_news: [
    {
      id: 1,img:top1, date:'March 30, 2024', title:'Suzuki Bangladesh has Launched New ‘Suzuki Gixxer Fi Disc Series', news_para:''
    },
    {
      id: 2,img:top2, date:'March 01, 2024', title:'INTRODUCING THE FACE OF SUZUKI', news_para:''
    },
    {
      id: 3,img:top3, date:'March 29, 2024', title:'Suzuki’s new Gixxer Series now available in Bangladesh', news_para:''
    },
    {
      id: 4,img:top4, date:'November 18, 2020', title:'Joan Mir becomes 2020 MotoGP World Champion', news_para:''
    },
    {
      id: 5,img:top5, date:'August 23, 2020', title:'Suzuki’ New Addition Bandit 150 – The Street King', news_para:''
    },
    {
      id: 6,img:top6, date:'August 10, 2020', title:'Launching of SUZUKI GSX 125 - The All Rounder Bike', news_para:''
    },
    {
      id: 7,img:top7, date:'July 04, 2020', title:'Suzuki New Gixxer Series 2020 Launch', news_para:''
    },
    {
      id: 8,img:top8, date:'August 10, 2020', title:'Launching of SUZUKI GSX 125 - The All Rounder Bike', news_para:''
    },
    {
      id: 9,img:top9, date:'May 15, 2020', title:'Suzuki Celebrates The 100th Anniversary', news_para:''
    },
    {
      id: 10,img:top10, date:'April 07, 2019', title:'National Youth Assembly 2019', news_para:''
    }
  ],
};

export default All_Data;
