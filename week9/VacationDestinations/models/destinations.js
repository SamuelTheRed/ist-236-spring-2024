class Destination {
  // Constructor
  constructor(id, countryId, name, averageCost, yearFounded, rating, description, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.averageCost = averageCost;
    this.yearFounded = yearFounded;
    this.rating = rating;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  // Function to return String
  toString() {
    return `${this.name} was founded in ${this.yearFounded} \nDescription: ${this.description} \nAverage Cost: ${this.averageCost}, Rating: ${this.rating}`;
  }
}

export default Destination;
