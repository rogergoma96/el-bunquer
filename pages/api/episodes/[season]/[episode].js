export const episodeDetail = {
  id: "1",
  name: "Carlos Gesualdo",
  summary:
    "En Carlo Gesualdo és un altre clar exemple d'home renaixentista. Un home cultivat, exquisit, refinat i boig com ell sol. La mateixa passió el feia escriure les obres musicals més complexes del seu temps, també l'empenyia als actes més horribles. Molt de compte en el moment que enganxa la seva dona fotent-li al salt i també el moment que contracta uns joves musculats perquè el flagel·lin a la masmorra del castell. Molt passional, tot plegat.",
  title:
    "Carlos Gesualdo, un home del Reneixament que va esquarterar la seva dona",
  historyImage: "/images/carlos_gesualdo.jpg",
  tags: ["01x01"],
  season: "1",
  url: "carlos-gesualdo",
  pageTitle: "Carlos Gesualdo | El Bunquer",
  pageDescription:
    "Carlos Gesualdo, un home del Reneixament que va esquarterar la seva dona",
  youtubeUrl: "https://www.youtube.com/embed/xsKbDQRgtQU",
  history:
    "<p>Michael Collins (Roma, 31 de octubre de 1930-Naples, Florida; 28 de abril de 2021)1​ fue un astronauta y aviador estadounidense que voló en 1969 en el módulo de mando Columbia de la misión Apolo 11alrededor de la Luna mientras sus compañeros Neil Armstrong y Buzz Aldrin realizaban el primer alunizaje de la historia. <br /><br />Fue también piloto de pruebas y mayor general de la reserva de la Fuerza Aérea de los Estados Unidos. Antes de convertirse en astronauta, Collins se había graduado en la Academia Militar de los Estados Unidos en 1952. Se unió a la Fuerza Aérea de los Estados Unidos y pilotó cazas de combate F-86 Sabre en la base área de Chambley-Bussières, en Francia. Fue admitido en 1960 en la Escuela de Pilotos de Pruebas de Vuelos Experimentales en la Base de la Fuerza Aérea Edwards (California) y también se graduó en la Escuela de Pilotos de Investigación Aeroespacial. Fue seleccionado en 1963 como miembro de los catorce astronautas del tercer grupo de la NASA y voló en dos ocasiones al espacio.</p><p>Michael Collins (Roma, 31 de octubre de 1930-Naples, Florida; 28 de abril de 2021)1​ fue un astronauta y aviador estadounidense que voló en 1969 en el módulo de mando Columbia de la misión Apolo 11alrededor de la Luna mientras sus compañeros Neil Armstrong y Buzz Aldrin realizaban el primer alunizaje de la historia. <br /><br />Fue también piloto de pruebas y mayor general de la reserva de la Fuerza Aérea de los Estados Unidos. Antes de convertirse en astronauta, Collins se había graduado en la Academia Militar de los Estados Unidos en 1952. Se unió a la Fuerza Aérea de los Estados Unidos y pilotó cazas de combate F-86 Sabre en la base área de Chambley-Bussières, en Francia. Fue admitido en 1960 en la Escuela de Pilotos de Pruebas de Vuelos Experimentales en la Base de la Fuerza Aérea Edwards (California) y también se graduó en la Escuela de Pilotos de Investigación Aeroespacial. Fue seleccionado en 1963 como miembro de los catorce astronautas del tercer grupo de la NASA y voló en dos ocasiones al espacio.</p>",
};

export default function handler(req, res) {
  res.status(200).json(episodeDetail);
}
