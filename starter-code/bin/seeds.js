require("dotenv").config();
const mongoose = require("mongoose");
const celebrityModel = require("../models/celebrity");

const celebrity = [
  {
    name: "Brad Pitt",
    occupation: "actor",
    catchPhrase: "You must lose everything in order to gain anything"
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase:
      "If everything was perfect, you would never learn and you would never grow."
  },
  {
    name: "Bugs Bunny",
    occupation: "cartoon",
    catchPhrase: "Eh, what's up, Doc? "
  }
];

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(self => {
    console.log(`connected to ${self.connection.name}`);

    Celebrity.create(celebrity)
      .then(celebrity => {
        celebrity.forEach(celebrity => {
          console.log(celebrity.name);
        });
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
    console.log("Error occured while connecting to the db");
  });

module.exports = router;
// mongoose
//   .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//   .then(self => {
//     console.log("Connected to ${self.connection.name}");
//     Celebrities.create(celebrities)
//       .then(celebDbRes => {
//         celebDbRes.forEach(celeb => {
//           console.log(celeb.name);
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   })
//   .catch(err => {
//     console.log(`Error occured while connection to the Database ${err}`);
//   });
