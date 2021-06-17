'use strict';

const fs = require('fs');
const furnitureData = JSON.parse(
  fs.readFileSync('./script/furnitureData.json', 'utf8')
);
const userData = JSON.parse(fs.readFileSync('./script/userData.json', 'utf8'));

const {
  db,
  models: { User, Furniture }
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed () {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  //creating furniture
  const furniture = await Promise.all(
    furnitureData.map(furniture =>
      Furniture.create({
        name: furniture.name,
        category: furniture.category,
        price: furniture.price,
        imageUrl: furniture.imageUrl,
        productId: furniture.productId,
        season: furniture.season,
        dimensions: furniture.dimensions,
        color: furniture.color,
        room: furniture.room,
        description: furniture.description,
        stock: furniture.stock,
        style: furniture.style
      })
    )
  );

  // Creating Users

  const users = await Promise.all(
    userData.map(user =>
      User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
        userStatus: user.userStatus,
        shippingName: user.shippingName,
        shippingPhoneNumber: user.shippingPhoneNumber,
        shippingStreet: user.shippingStreet,
        shippingCity: user.shippingCity,
        shippingState: user.shippingState,
        shippingZipCode: user.shippingZipCode,
        billingName: user.billingName,
        billingPhoneNumber: user.billingPhoneNumber,
        billingStreet: user.billingStreet,
        billingCity: user.billingCity,
        billingState: user.billingState,
        billingZipCode: user.billingZipCode
      })
    )
  );


  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${furniture.length} furniture pieces`);
  console.log(`seeded successfully`);
}
/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed () {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
