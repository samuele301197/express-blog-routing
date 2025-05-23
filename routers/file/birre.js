import express from "express"
const router = express.Router();

const birrePreferite = [
  {
    titolo: "Brewdog, Punk Ipa",
    id: 1,
    tipologia: "Indian Pale Ale",
    immagine: "img/punk-ipa.webp",
    tags: ["Mastri Birrai", "Alta Fermentazione", "Birre Italiane"]
  },
  {
    titolo: "Birrificio Baladin, Birra Nazionale ",
    id: 2,
    tipologia: "Golden Ale, Blonde ALe",
    immagine: "img/birra-nazionale.jpg",
    tags: ["Mastri Birrai", "Alta Fermentazione", "Birre Italiane"]
  },
  {
    titolo: "Dubuisson, Bush Blonde ",
    id: 3,
    tipologia: "Belgian Strong ALe",
    immagine: "img/bush-blonde.webp",
    tags: ["Mastri Birrai", "Alta Fermentazione", "Birre Italiane"]
  },
  {
    titolo: "Birra Antoniana, Scudata",
    id: 4,
    tipologia: "Lager, Helles",
    immagine: "img/scudata.png",
    tags: ["Mastri Birrai", "Alta Fermentazione", "Birre Italiane"]
  },
  {
    titolo: "Birrificio Baladin, L'IPA ",
    id: 5,
    tipologia: "Indian Pale Ale",
    immagine: "img/baladin-ipa.jpg",
    tags: ["Mastri Birrai", "Alta Fermentazione", "Birre Italiane"]
  }
];


router.get("/", (req, res) => {
    res.json ({
        data: `la mia lista di birre`, birrePreferite
    })
});

router.get("/:id", (req, res) => {
    const birreID = parseInt(req.params.id);
    const birra = birrePreferite.find((curElem) => curElem.id === birreID);
    res.json({
        data: `mostro un ID ${birreID}`,
        birra: birra
    });
});

router.post("/", (req, res) => {
    res.json({
        data: `aggiungo un elemento al mio post`
    });
});

router.put("/:id", (req, res) => {
    const birreID = req.params.id;
    res.json({
        data: `modifico il mio ID ${birreID}` 
    })
});

router.delete("/:id", (req, res) => {
    const birreID = req.params.id;
    res.json({
        data: `elimino il mio ID ${birreID}`
    });
});

export default router