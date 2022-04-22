var fs = require("fs");

fs.copyFile(
  "build/contracts/Marketplace.json",
  "../src/contracts/marketplace.json",
  (err) => {
    if (err) throw err;
    console.log("✅ Your contract's ABI was copied to the frontend");
  },
);
