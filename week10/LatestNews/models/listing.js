class Report {
    constructor(
      id,
      type,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description
    ) {
      this.id = id;
      this.type = type;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `${this.type} ${this.headline} - Date: ${this.date} - Author: ${this.author} - of: ${this.agency} - : ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Report;
  