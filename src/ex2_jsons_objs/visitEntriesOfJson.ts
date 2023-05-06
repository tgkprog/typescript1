import errorResult from "./sample/anErrorResult.json"; //
import articlesWIthAuthors from "./sample/articlesWIthAuthors.json"; //
//import articlesWIthAuthors from './sample/articlesWIthAuthors.json';
import greetings from "./sample/greetings.json";

function visitEntries(
  object: Object,
  ti: string,
  space: string = "",
  depth = 0
) {
  if (depth === 0) {
    console.log();
    console.log(ti);
  }
  for (const [key, value] of Object.entries(object)) {
    console.log(`${space}${key}`);
    if (typeof value === "object") {
      let space2;
      if (depth < 5) {
        space2 = space + "\t";
      } else if (depth < 20) {
        space2 = space + " ";
      } else {
        space2 = space;
      }
      visitEntries(value, ti, space2, depth + 1);
    }
  }
}

visitEntries(errorResult, " Error Result");
visitEntries(articlesWIthAuthors, "Articles WIth Authors");
visitEntries(greetings, "Greetings");
console.log("Done");
