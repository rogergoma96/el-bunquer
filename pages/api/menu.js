export const menuSections = [
  {
    title: "Temporada 1",
    href: "/temporades/1",
  },
];

export default function handler(req, res) {
  res.status(200).json(menuSections);
}
