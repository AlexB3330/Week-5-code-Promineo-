class modelPlanes {
    constructor(brand, type, price, range) {
        this.brand = brand;
        this.type = type;
        this.price = price;
        this.range = range;
    }
    describe() {
        return `The ${this.brand} ${this.type} is ${this.price} and achieves aproximately ${this.range} range`
    }
}

class Menu { constructor() {this.plane = []; }
    mainMenu() {
        let choice = prompt(
            `
            1) Create a Plane
            2) Remove a Plane
            3) Revise a Plane
            4) Select all Planes 
            0) End Session  
            `
        ) 
        switch (choice) {
            case "1":
                this.createPlane(); 
                break;
            case "2":
                this.removePlane();
                break;
            case "3":
                this.removePlane();
                break;
            case "4":
                this.selectPlane();
                break;
            case "0":
                this.endProgram();
                break;
            default:
                this.mainMenu();
        }
    }
    createPlane() {
        const newPlane = new modelPlanes(
            prompt("Enter Brand: "),
            prompt("Enter Type: "),
            prompt("Enter Cost: "),
            prompt("Enter Range: ")
        )
        this.plane.push(newPlane);
        alert("A new Plane has been added");
        this.mainMenu();
    }

    removePlane() {let planeToDelete = prompt("Which Plane should we delete: ");
        let removedPlane = this.plane.splice(parseInt(planeToDelete), 1)  
        alert(` ${removedPlane.type}  was removed`);
        this.mainMenu()
    }

    selectPlane() {let allPlanes = "";
        let i = 0;
        for(let plane of this.plane) {
            allPlanes += `${i})` + plane.describe() + "\n"
            i++;
        } alert(allPlanes);
        this.mainMenu();
    }
    endProgram() {
        alert("Have a nice day!");
    }
}

const menu = new Menu();
menu.mainMenu();