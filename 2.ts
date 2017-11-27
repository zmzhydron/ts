interface She{
  age: number,
  name: string,
  bitch: any,
  // [propName: string]: any  
}
interface Me{
  age: number,
  name: string,
  bitch: any,
  [propName: string]: any
}
interface fuck {
  (me: string, she: string): string;
}
let start : fuck;
start = (me: string, she: string) => {
  let str: string = `${me} fucking >>>> ${she}`;
  console.log(str);
  return 1;
}
console.log(start("zmz", 'alice'));
const hi = (me: She) => {
  console.log(me.name, me.age);

}
hi(111);
// hi({
//   age: "dddddddd",
//   name: "11sdf111sdf1",
//   bitch: "Shit",
//   shit: 'dfgcccg'
// })