import Item from "../models/items";
import VenueEvent from "../models/venueevents";

// Data List for Items
export const ITEMS = [
  new Item(
    "i1",
    "Gibson Les Paul",
    "Guitar",
    "#7faa8b",
    "349.99",
    "https://images.pexels.com/photos/12050940/pexels-photo-12050940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
  new Item(
    "i2",
    "LE ASBA Steel Snare",
    "Drum Peripheral",
    "#b13232",
    "74.99",
    "https://images.pexels.com/photos/9463074/pexels-photo-9463074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
  new Item(
    "i3",
    "Ernie Ball Sting Ray",
    "Bass",
    "#a77429",
    "2500.00",
    "https://images.pexels.com/photos/4413725/pexels-photo-4413725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
  new Item(
    "i4",
    "Seven Peice Pearl",
    "Drum Set",
    "#599317",
    "4000.00",
    "https://images.pexels.com/photos/6796798/pexels-photo-6796798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
  new Item(
    "i5",
    "Digitone Micro",
    "Synthesizer",
    "#57a2bd",
    "199.99",
    "https://images.pexels.com/photos/12551352/pexels-photo-12551352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
  new Item(
    "i6",
    "Istanbul Ride",
    "Cymbal",
    "#165a20",
    "54.99",
    "https://images.pexels.com/photos/7626334/pexels-photo-7626334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
  new Item(
    "i7",
    "Gamble Tambourine",
    "Precussion",
    "#36436b",
    "44.99",
    "https://images.pexels.com/photos/6860817/pexels-photo-6860817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
  new Item(
    "i8",
    "Rombo Picks",
    "Guitar Peripheral",
    "#874b39",
    "19.99",
    "https://images.pexels.com/photos/3742467/pexels-photo-3742467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ), //
];

// Data List for VenueEvents
export const EVENTS = [
  new VenueEvent(
    "e1",
    "Kytes Listening Party",
    "04/04/2024",
    "All Five members of Folk Band 'Kytes' invites you to a listening party of their fourth studio album",
    require("../assets/images/event1.jpeg")
  ), //
  new VenueEvent(
    "e2",
    "Dedicated to Algorithms",
    "04/11/2024",
    "Several Locals bands participate in 'open-mic' style battle of the bands based on tik tok likes",
    require("../assets/images/event2.jpeg")
  ), //
  new VenueEvent(
    "e3",
    "Jack Solomon is the Desert Man",
    "04/18/2024",
    "As the first chapter of the next few weeks, Jack Solomon joins us to preform his greatest hits in the last few years",
    require("../assets/images/event3.jpeg")
  ), //
  new VenueEvent(
    "e4",
    "Desert Man vs. Beach Man",
    "04/25/2024",
    "Beach Man claims he is the greatest alive and challenges Beach Man 'Jack Solomon' for his throne of the Millennia Pavilion",
    require("../assets/images/event4.jpeg")
  ), //
  new VenueEvent(
    "e5",
    "Beach Man's Celebration",
    "05/01/2024",
    "Beach Man's planned celebration after what he presumes will be his celebration of victory over Jack Solomon",
    require("../assets/images/event5.jpeg")
  ), //
  new VenueEvent(
    "e6",
    "Par Four Jazz Bash",
    "05/08/2024",
    "TCTG local jazz band takes center stage, open bar, open pizza bar, and more",
    require("../assets/images/event6.jpeg")
  ), //
];