// Create PostgreSQL Connection Pool here !
import * as pg from "pg";
const { Pool } = pg.default;

const connectionPool = new Pool({
  connectionString:
    "BE-4-pang-Server://postgres:0903592621@localhost:5432/nodejs",
});

export default connectionPool;
