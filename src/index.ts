let sales = 123_456_789
let course: string = 'TypeScript'
let is_published: boolean = true;

//create a number array
//use foreach.

let numbers: number[] = [1, 2, 3]
numbers.forEach(element => {
    element.toFixed(2)
});

//tuples.
let user: [number, string] = [1, 'Danish']
user.push('hello');


//Enums [PascalCase]. Make it const to generate optimised code.
enum Size { Small, Medium, Large };

const enum Size2 { XS = 1, XL }

let mySize: Size = Size.Large;
console.log(mySize);

let mySize2: Size2 = Size2.XL;
console.log(mySize2);

//Functions
function calculateTax(income: number, taxYear: number): number{
    if(taxYear  < 2022)
        return income * 1.2;
    return income * 1.3
    return 0;
}

///optional parameter
// function calculateArea(width: number, height = 0): number{ //default value.
function calculateArea(width: number, height?: number): number{
    if(height == undefined){
        return width*width;
    }
    return height * width;
}

calculateArea(3);

// Objects [DRY Implementation next]
let employee1: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void // A method in this object.
} = {
    id: 1,
    name: 'Danish',
    retire: (date: Date) => {
        console.log(date);
    }
}


// TYPE ALIASES
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Danish',
    retire: (date: Date) => {
        console.log(date);
    }
}

//Union Types. we can give a variable/function parameter more than one type number|string
function kgToLbs(weight: number|string){
    if(typeof weight === 'number'){
        return weight * 2;
    }else{
        return parseInt(weight) * 2;
    }
}

//Intersection Type.
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Resizable & Draggable;

//Literal Types