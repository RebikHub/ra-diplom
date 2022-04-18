

export default async function fetchGetItems() {
  try {
    const response = await fetch(process.env.REACT_APP_URL_API);
    if (!response.ok) {
      return new Error();
    }
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}