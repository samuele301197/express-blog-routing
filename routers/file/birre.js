import express from "express"
import { birrePreferite } from "../data.js";
const router = express.Router();

// ROTTE

router.get("/", (req, res) => {
    res.json ({
        data: `la mia lista di birre`, birrePreferite
    })
});

router.get("/:id", (req, res) => {
    const birreID = parseInt(req.params.id);
    const birra = birrePreferite.find((curElem) => curElem.id === birreID);
    res.json({
        data: `mostro un ID ${birreID}`, birra
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