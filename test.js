const { Client } = require("@elastic/elasticsearch");

async function fn() {
  const client = new Client({ node: "http://localhost:9200" });

  const data = await client.ping();

  console.log("---------", data.statusCode);
}

fn();
