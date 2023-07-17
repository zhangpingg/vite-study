const { build } = require("esbuild");
const httpImport = require("./http-import-plugin5");

async function runBuild() {
  build({
    absWorkingDir: process.cwd(),
    entryPoints: ["./src/index2.jsx"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    splitting: true,
    sourcemap: true,
    metafile: true,
    plugins: [httpImport()],
  }).then(() => {
    console.log("🚀 Build Finished!");
  });
}

runBuild();
