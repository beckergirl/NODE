// paso 4

const { Router } = require("express")
const router = Router();
const professionalCtrl = require("../controller/professional.controller")
const profesionalesCtrl = require("../controller/profesionales.controller")

// professional

router.get("/", professionalCtrl.getStart);

router.get("/professional", professionalCtrl.getProfessional);

router.post("/professional", professionalCtrl.postProfessional);

router.put("/professional", professionalCtrl.putProfessional);

router.delete("/professional", professionalCtrl.deleteProfessional);

module.exports = router;

// profesionales

router.get("/", profesionalesCtrl.getStart);

router.get("/profesionales", profesionalesCtrl.getProfesionales);

router.post("/profesionales", profesionalesCtrl.postProfessional);

router.put("/profesionales", profesionalesCtrl.putProfessional);

router.delete("/profesionales", profesionalesCtrl.deleteProfessional);

module.exports = router;