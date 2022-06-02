import "./main.scss";
import "./scripts/test";


console.log("=== TYPESCRIPT TEST ===");

interface MyTestObj {
    a: string;
    b: number;
}

class SomeClass implements MyTestObj {
    readonly c: string = "Internal prop";
    constructor(
        public a: string,
        public b: number
    ) {
    }
}

const someObj: MyTestObj = new SomeClass("Hello World", 123);

const someSpreadObj: MyTestObj = {
    ...someObj
};

console.log("someObj=", someObj);
console.log("someSpreadObj=", someSpreadObj);

Object.keys(someObj).forEach((k: any) => {
    // @ts-ignore
    console.log(`someObj.${k}=`, someObj[k]);
});

console.log("=== /TYPESCRIPT TEST ===");


const title = "Hello World";
// @ts-ignore
import img from "./assets/igracek.jpg";

console.log("title=", title);
console.log("img=", img);

document.querySelector("h1")!.innerText = title;
// @ts-ignore
document.querySelector("#dynamicImg")!.src = img;
