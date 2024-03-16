import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("c1", "Canada", "#7faa8b"), // 
  new Country("c2", "Mexico", "#b13232"), // 
  new Country("c3", "Egypt", "#a77429"), // 
  new Country("c4", "France", "#36436b"), // 
  new Country("c5", "England", "#57a2bd"), // 
  new Country("c6", "Ireland", "#165a20"), // 
  new Country("c7", "Scotland", "#599317"), // 
  new Country("c8", "South Africa", "#5c200e"), // 
  new Country("c9", "China", "#d26f0c"), // 
  new Country("c10", "Singapore", "#793ab7"), // 
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Niagra Falls",
    120,
    1887,
    4.6,
    "An Amazing Waterfall",
    "https://images.pexels.com/photos/306381/pexels-photo-306381.jpeg?cs=srgb&dl=city-water-clouds-306381.jpg&fm=jpg"
  ),
  new Destination(
    "d2",
    "c2",
    "Cancún",
    500,
    1970,
    3.0,
    "Beautiful Beach of Mexico",
    "https://images.pexels.com/photos/5344794/pexels-photo-5344794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d3",
    "c3",
    "Pyramids",
    200,
    "2950 BC",
    4.1,
    "The Heart of Egypt Great Egyption Pyramids",
    "https://images.pexels.com/photos/3873681/pexels-photo-3873681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d4",
    "c4",
    "Paris",
    601,
    "300 BC",
    4.8,
    "Paris is the City of Love",
    "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d5",
    "c5",
    "London",
    320,
    43,
    3.7,
    "Home of Big Ben and Vegimite",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d6",
    "c6",
    "Donegal",
    355,
    1762,
    4.2,
    "Quiet Reserved City is Like the Local's Dublin",
    "https://images.pexels.com/photos/1650870/pexels-photo-1650870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d7",
    "c7",
    "Edinburgh",
    405,
    1437,
    4.2,
    "Beautiful Historic Scottish Pride",
    "https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d8",
    "c8",
    "Cape Town",
    525,
    1652,
    4.5,
    "Bustling Port City",
    "https://images.pexels.com/photos/2960007/pexels-photo-2960007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d9",
    "c9",
    "Shanghai",
    900,
    1291,
    3.8,
    "Join the Locals in Fun and Games",
    "https://images.pexels.com/photos/19885/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d10",
    "c10",
    "Gardens by the Bay",
    675,
    2012,
    4.9,
    "Beautiful Mixture of Archetecture and Botany",
    "https://images.pexels.com/photos/4021539/pexels-photo-4021539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d11",
    "c1",
    "Vancouver",
    425,
    1886,
    4.1,
    "Canadian City of Brotherhood",
    "https://images.pexels.com/photos/2382868/pexels-photo-2382868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d12",
    "c2",
    "Mexico City",
    355,
    1521,
    4.4,
    "Mexico's Capital",
    "https://images.pexels.com/photos/1720086/pexels-photo-1720086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d13",
    "c3",
    "The Nile",
    25,
    "29m BC",
    4.5,
    "Freshen Up in the Nile",
    "https://images.pexels.com/photos/5727263/pexels-photo-5727263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d14",
    "c4",
    "Nice",
    1000,
    "350 BC",
    4.1,
    "Beautiful French Beach",
    "https://images.pexels.com/photos/3016350/pexels-photo-3016350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d15",
    "c5",
    "Manchester",
    445,
    1301,
    4.3,
    "England's Football City",
    "https://images.pexels.com/photos/6585361/pexels-photo-6585361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d16",
    "c6",
    "Dublin",
    600,
    841,
    4.8,
    "Large City Full of Irish Jigs and Beer Jugs",
    "https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d17",
    "c7",
    "Glasgow",
    205,
    600,
    3.7,
    "Scotland at it's Finest. There was a Marvel Movie shot here",
    "https://images.pexels.com/photos/10569132/pexels-photo-10569132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d18",
    "c8",
    "Johannesburg",
    600,
    1886,
    5,
    "A Lovely Place to Visit South Africa",
    "https://images.pexels.com/photos/11313729/pexels-photo-11313729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d19",
    "c9",
    "Beiging",
    300,
    "1045 BC",
    3.4,
    "A Place Full of History",
    "https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Destination(
    "d20",
    "c10",
    "Marina Bay Sands",
    400,
    2010,
    4.5,
    "Beautiful Architecture in Marina Bay",
    "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
];