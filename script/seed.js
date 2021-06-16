'use strict';

const {
  db,
  models: { User, Furniture },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'cody',
      password: '123',
      firstName: 'Cody',
      lastName: 'ThePug',
      email: 'test@email.com',
      phoneNumber: '(865)564-5497',
    }),
    User.create({
      username: 'murphy',
      password: '123',
      firstName: 'Murphy',
      lastName: 'James',
      email: 'test2@email.com',
      phoneNumber: '(800)624-7896',
    }),
  ]);

  //creating furniture
  const furniture = await Promise.all([
    Furniture.create({
      name: 'Aeron Chair',
      productId: '111111',
      season: 'Fall',
      category: 'Office Chairs',
      dimensions: '3 x 5 x 6',
      price: 1215.0,
      color: 'Black',
      style: 'Contemporary',
      room: 'Office',
      description: 'hiuhuhbtdtvdccu bywbyb ybydvcby dvstftew',
      imageUrl:
        'https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/aeron_chairs/mh_prd_ovw_aeron_chairs.jpg.rendition.480.360.jpg',
      stock: 4,
    }),
    Furniture.create({
      name: 'Nelson Ball Clock',
      productId: '222222',
      season: 'Spring',
      category: 'Decorative Accents',
      dimensions: '12 x 4',
      price: 440.0,
      color: 'Multi',
      style: 'Mid-Century',
      room: 'Kitchen',
      description: 'eoijww rhbcurwhu hnuinicuwdniucdw',
      imageUrl:
        'https://cdn2.newsok.biz/cache/r960-ddfaff028bf57611ec1bdb44a8d78459.jpg](https://cdn2.newsok.biz/cache/r960-ddfaff028bf57611ec1bdb44a8d78459.jpg',
      stock: 15,
    }),
    Furniture.create({
      name: 'Eames Lounge Ottoman',
      productId: '333333',
      season: 'Winter',
      category: 'Lounge Chairs',
      dimensions: '7 x 3 x 4',
      price: 8495.0,
      color: 'Black & Walnut',
      style: 'Mid-Century',
      room: 'Living Room',
      description: 'uncubu uubcuhbcdew hhuydwcybydb',
      imageUrl:
        'https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/eames_lounge_chair_and_ottoman/mh_prd_ovw_eames_lounge_chair_and_ottoman.jpg.rendition.480.360.jpg',
      stock: 6,
    }),
    Furniture.create({
      name: 'Frisbi Lamp',
      productId: '444444',
      season: 'Summer',
      category: 'Lighting',
      dimensions: '8 x 7',
      price: 422.31,
      color: 'Metal',
      style: 'Contemporary',
      room: 'Living Room',
      description: 'uyuuyf uuyfdhcwjsjjs,m ;akpakcoi',
      imageUrl:
        '://flos.imgix.net/wp-content/uploads/2017/10/string-light-suspension-cone-anastassiades-flos-F6481030-product-still-life-big.jpg?auto=format',
      stock: 3,
    }),
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
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
