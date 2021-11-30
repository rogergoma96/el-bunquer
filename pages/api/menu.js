const menuSections = [
  {
    title: "Episodis",
    href: "/temporades",
    links: [
      {
        title: "Temporada 1",
        href: "/temporades/1",
      },
      {
        title: "Temporada 2",
        href: "/temporades/2",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(menuSections);
}
