class Campground {
  constructor(id, stateId, name, numSites, foundedYear, rating, imageUrl) {
    this.id = id;
    this.stateId = stateId;
    this.name = name;
    this.numSites = numSites;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Number of Sites: ${this.numSites}, Rating: ${this.rating}`;
  }
}

export default Campground;
