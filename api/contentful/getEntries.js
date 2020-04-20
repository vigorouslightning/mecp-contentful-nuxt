import client from '.';

export default {
  getEntries() {
    client.getEntries()
    .then((response) => console.log(response.items))
    .catch(console.error)
  }
}