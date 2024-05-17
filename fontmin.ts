import Fontmin from "fontmin";
import fs from 'node:fs';
import text from "./src/config/text.ts";

const words = Object.values(text).join("");

const fontmin = new Fontmin()
  .src("src/assets/yx.ttf")
  .use(
    Fontmin.glyph({
      text: words,
    })
  )
  .dest("src/assets/fontmin");

fontmin.run(function (err, files) {
  if (err) {
    throw err;
  }
});

const dlFontmin = new Fontmin()
  .src("src/assets/dl.ttf")
  .use(
    Fontmin.glyph({
      text: `${text.duilian1}${text.duilian2}${text.duilian3}`,
    })
  )
  .dest("src/assets/fontmin");

dlFontmin.run(function (err, files) {
  if (err) {
    throw err;
  }
});
