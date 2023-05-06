///import {Inheri.Rectangle} from './c5Inhertnc';
import * as path from "path";
import { Rectangle } from "./c5Inhertnc";

class KeyValuePair<T, K> {
  constructor(private key: T, private value: K) {}
}

let item2 = new KeyValuePair<string, Rectangle>("i1", new Rectangle(30, 10));
