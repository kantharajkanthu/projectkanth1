//Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutALt,
  UilMoneyWithdrawal,
  UilUsdSquare,
} from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

//Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const CardsData =[
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 75,
    value: "34,270",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],

  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 80,
    value: "7,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 65,
    value: "15,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
]

/* linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);*/
            
   //Recent Update Card Data
   export const UpdatesData = [
    {
    img: img1,
    name: "Kantharaj Kanthu",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
    },
    {
    img: img2,
    name: "Abishek Kulal",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
    },
    {
    img: img3,
    name: "Shashikala Devadiga",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
    },
    ];      
