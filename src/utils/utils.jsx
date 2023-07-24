/* eslint-disable no-unused-vars */
import { car1, car2, car3, car4 } from "../assets";
import TermsConditions from "../components/Terms and Conditions/TermsConditions";
import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";

export const navbar = [
    {
        path: '/home',
        element: <HomePage/>,
        name: "Home",
        id: 1
    },
    {
        path: '/cars',
        element: <CarsPage/>,
        name: "Cars",
        id: 2
    },
    {
        path: '/book',
        element: <BookNowPage/>,
        name: "Book now",
        id: 3
    },
    {
        path: '/terms',
        element: <TermsConditions/>,
        name: "Terms and Conditions",
        id: 4
    },
]


export const sectionImageBoxes = [
    {
        hover_top_name : "Supercars" ,
        hover_bottom_name : "Discover" ,
        image :  car1
    },
    {
        hover_top_name : "Supercars" ,
        hover_bottom_name : "Discover" ,
        image :  car2
    },
    {
        hover_top_name : "Supercars" ,
        hover_bottom_name : "Discover" ,
        image :  car3
    },
    {
        hover_top_name : "Supercars" ,
        hover_bottom_name : "Discover" ,
        image :  car4
    },
]

