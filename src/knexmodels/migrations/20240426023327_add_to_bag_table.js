/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('add_to_bag', (table) => {
      table.increments("id").primary()
      table.integer("id_warna_product")
      table.integer("id_size")
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('add_to_bag')
  };
  