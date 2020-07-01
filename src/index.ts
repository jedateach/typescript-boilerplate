import log from "./log";
import * as mylib from "mylib";

let person = new mylib.Person("Joe", "Bloggs");

log(`${mylib.FOO} ${mylib.getDate()} ${person.fullName}`);
