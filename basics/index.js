import sum from "./SingleModuleExport.js";
import { min, max } from "./MultiModulesExport.js";

console.log(sum(10, 20));
let arr = [8, 5, 3, 9, -11, 4, -6, 8, -16, 17];
console.log(min(arr));
console.log(max(arr));
