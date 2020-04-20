const express = require("express");
const router = express.Router();
const celebrityModel = require("../models/celebrity");

/* GET list of celebrities */

router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find({})
    .then(dbRes => {
      res.render("celebrities/index.hbs", {
        celebrities: dbRes // celebrities is the key we are going to use in hbs
      });
    })
    .catch(err => {
      res.render(next());
      console.log(err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  //ce qui arrive après les 2points c'est dynamique
  let myCelebrityId = req.params.id;
  celebrityModel
    .findById(myCelebrityId)
    .then(dbRes => {
      res.render("celebrities/show.hbs", { celebrity: dbRes });
    })
    .catch(err => {
      res.render(next());
      console.log(err);
    });
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new.hbs");
});

router.post("/celebrities/new", (req, res) => {
  let newCelebrityId = req.body;
  celebrityModel
    .create(newCelebrity)
    .then(theCelebrityJustCreate => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.get("celebrities/:id.edit", (req, res) => {
  let myCelebrityId = req.params.id;
  celebrityModel
    .findById(myCelebrityId)
    .then(dbRes => {
      res.render("celebities/edit", { celebrity: dbRes });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("celebrities/:id.edit", (req, res) => {
  let myCelebrityId = req.params.id;
  let myNewCelebrityInfo = req.body;
  celebrityModel
    .findByIdAndUpdate({ _id: myCelebrityId }, myNewCelebrityInfo)
    .then(myUpdatedCelebrity => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.get("celebrities/:id/delete", (req, res) => {
  let myCelebrityId = req.params.id;
  celebrityModel
    .findByIdAndDelete({ _id: myCelebrityId })
    .then(deleteCelebrity => {
      res.redirect("celebrities");
    })
    .catch(err => console.log(err));
});
module.exports = router;
