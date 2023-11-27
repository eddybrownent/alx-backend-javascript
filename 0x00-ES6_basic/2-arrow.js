export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  /* eslint-disable */
  this.addNeighborhood = newNeighborhood => self.sanFranciscoNeighborhoods.concat(newNeighborhood);
}
