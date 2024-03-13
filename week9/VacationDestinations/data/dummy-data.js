import Country from "../models/countries";
import Destination from "../models/destination";

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
    "Cancún",
    50,
    1985,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipMLPG0TdYeAusalV9npDIlqBi5Xs_NCvHlSoY9y=s1360-w1360-h1020"
  ),
  new Destination(
    "d2",
    "c2",
    "Arcadia Peace River Destination",
    30,
    1992,
    4.0,
    "https://lh3.googleusercontent.com/p/AF1QipPLHt4CcPQzydK8GZk45cp6F4OCLSrVPbEXj-7e=s1360-w1360-h1020"
  ),
  new Destination(
    "d3",
    "c3",
    "Stone Mountain Park Destination",
    40,
    1978,
    4.2,
    "https://lh3.googleusercontent.com/p/AF1QipN4BCdka5-ZGpE6lhQoGvQyuyvrDYDYRTR9mDZ9=s1360-w1360-h1020"
  ),
  new Destination(
    "d4",
    "c4",
    "Kentucky Horse Park Destination",
    60,
    2001,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOBnp2waOt2jqzmSeGuNr6yw6nDAdfbB_JgTS67=s1360-w1360-h1020"
  ),
  new Destination(
    "d5",
    "c5",
    "Hidden Oaks Destination",
    25,
    1988,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipMKwVkZ66ndyrSL8HNshOPfuFIh6PC8-2OhUJaa=s1360-w1360-h1020"
  ),
  new Destination(
    "d6",
    "c6",
    "Little Black Creek Destination",
    35,
    1995,
    4.1,
    "https://lh3.googleusercontent.com/p/AF1QipMLVH4hUp3VXYReamqUsz1Ljonh76eIal4I4yZZ=s1360-w1360-h1020"
  ),
  new Destination(
    "d7",
    "c7",
    "Camp Hatteras RV Resort & Destination",
    45,
    1975,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipPl_SZNGGy5UrPSTdFEklkVUMi8YF5d3WtBKgsu=s1360-w1360-h1020"
  ),
  new Destination(
    "d8",
    "c8",
    "Table Rock Country Park",
    55,
    2003,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipNiyUDf100wuxMTsu3OEvAbJ188WBsoVp3FBrs=s1360-w1360-h1020"
  ),
  new Destination(
    "d9",
    "c9",
    "Fall Creek Falls Country Park",
    20,
    1982,
    3.9,
    "https://lh3.googleusercontent.com/p/AF1QipOCc6Y1AUqBnXfuL3LVNNso5wCKCjsSQatGwKeq=s1360-w1360-h1020"
  ),
  new Destination(
    "d10",
    "c10",
    "Hungry Mother Country Park",
    65,
    1998,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipOOqLSYYgNwxkCHrEgC6AD76Oppmkup2dUtYC_L=s1360-w1360-h1020"
  ),
  new Destination(
    "d11",
    "c1",
    "Lake Guntersville Country Park Destination",
    40,
    1979,
    4.2,
    "https://lh3.googleusercontent.com/p/AF1QipPaKHoIPvRZtgQFXX-v0JS3elhZOQAEcR4EtB3L=s1360-w1360-h1020"
  ),
  new Destination(
    "d12",
    "c2",
    "Jetty Park Destination",
    35,
    1987,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipOyfO-CtM3qY-_U2Lh_vXeJT-JDWF1Peo60-Jx6=s1360-w1360-h1020"
  ),
  new Destination(
    "d13",
    "c3",
    "Reed Bingham Country Park - Destination",
    50,
    1993,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipOVLpVlPFaMs5PqZkTV1Xp4sag6DeD4a1sETsrg=s1360-w1360-h1020"
  ),
  new Destination(
    "d14",
    "c4",
    "Red River Gorge Destination",
    30,
    1981,
    4.0,
    "https://lh3.googleusercontent.com/p/AF1QipN5RttKwNWNLak8YyI-YK3iJkljMbr6dFAQF3Bk=s1360-w1360-h1020"
  ),
  new Destination(
    "d15",
    "c5",
    "Indian Creek Destination",
    45,
    1996,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipNy_bOjBzIttqJX-T_sTC6_ezMe4hmE1K1myOwG=s1360-w1360-h1020"
  ),
  new Destination(
    "d16",
    "c6",
    "Piney Grove Destination",
    55,
    2005,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020"
  ),
  new Destination(
    "d17",
    "c7",
    "Frisco Woods Destinations Inc",
    25,
    1989,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipPBKwR-aaXqBBJV7jZhu68yyAgi2a2K-teX3K4K=s1360-w1360-h1020"
  ),
  new Destination(
    "d18",
    "c8",
    "Huntington Beach Country Park",
    60,
    1999,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipNPOTpDCJCUExeJKRS3AJIivH9awUxSQOExnuja=s1360-w1360-h1020"
  ),
  new Destination(
    "d19",
    "c9",
    "David Crockett Country Park",
    30,
    1977,
    3.5,
    "https://lh3.googleusercontent.com/p/AF1QipN1UpPQNu6nZ7wgTW9WSfWmoGyKSLffNCJ8PhDg=s1360-w1360-h1020"
  ),
  new Destination(
    "d20",
    "c10",
    "Fairy Stone Country Park",
    40,
    1990,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipMMC9ncqLd5gz6rK6uLVv-AM52frv20rwOi-5eM=s1360-w1360-h1020"
  ),
];