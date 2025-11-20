/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("roles", {
    id: "id", // SERIAL PRIMARY KEY
    name: { type: "varchar(50)", notNull: true, unique: true },
    description: { type: "text" },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });
};

exports.down = pgm => {
  pgm.dropTable("roles");
};
