
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('VIN')
        .unique()
        .notNullable();
      tbl.text('Make')
        .notNullable();
      tbl.text('Model')
        .notNullable(); 
      tbl.integer('Milage')
        .notNullable();  
      tbl.text('Transmission');
      tbl.text('Title')  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
