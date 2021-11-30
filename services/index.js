export const getMenuSections = async () => {
  const response = await fetch("/api/menu/")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return response;
};

export const getLastEpisodes = async () => {
  const response = await fetch("/api/last-episodes/")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return response;
};

export const getAllEpisodes = async () => {
  const response = await fetch("/api/episodes/")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return response;
};

export const getEpisodeDetail = async (episodeId, season) => {
  const response = await fetch(`/api/episodes/${season}/${episodeId}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return response;
};

export default getMenuSections;
