export const getLastEpisodes = async () => {
  const response = await fetch("http://localhost:3000/api/last-episodes/")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return response;
};
