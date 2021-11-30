export const episodes = [
  {
    id: "1",
    title:
      "Carlos Gesualdo, un home del Reneixament que va esquarterar la seva dona",
    coverImage: "",
    tags: ["01x01"],
    season: "1",
    url: "carlos-gesualdo",
  },
  {
    id: "2",
    title:
      "Carlos Gesualdo, un home del Reneixament que va esquarterar la seva dona",
    coverImage: "",
    tags: ["01x02"],
    season: "1",
    url: "carlos-gesualdo",
  },
  {
    id: "3",
    title:
      "Carlos Gesualdo, un home del Reneixament que va esquarterar la seva dona",
    coverImage: "",
    tags: ["01x03"],
    season: "1",
    url: "carlos-gesualdo",
  },
  {
    id: "4",
    title:
      "Carlos Gesualdo, un home del Reneixament que va esquarterar la seva dona",
    coverImage: "",
    tags: ["01x04"],
    season: "1",
    url: "carlos-gesualdo",
  },
  {
    id: "5",
    title:
      "Carlos Gesualdo, un home del Reneixament que va esquarterar la seva dona",
    coverImage: "",
    tags: ["01x05"],
    season: "1",
    url: "carlos-gesualdo",
  },
];

export default function handler(req, res) {
  res.status(200).json(episodes);
}
