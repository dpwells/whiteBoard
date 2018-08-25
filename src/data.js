import data from './data.json'

var temp = "A"
export var buildings = [{
    property: "Wolverine Crossing",
    year: 2018,
    name: data[0].Bldg,
    gender: data[0].Gender,
}]

for (let i = 0; i < data.length; i++) {
    if (data[i].Bldg !== temp) {
        buildings.push({
            property: "Wolverine Crossing",
            year: 2018,
            name: data[i].Bldg,
            gender: data[i].Gender,

        })
        temp = data[i].Bldg
    }
}

export var floors = []
var temp1 = 0
for (let i = 0; i < data.length; i++) {
    if (i%12 === 0) {
        temp1++
        if(temp1 === 4)
        {
            temp1 = 1
        }
        floors.push({
            building: data[i].Bldg,
            name: (temp1.toString() + data[i].Bldg),

        })
        temp = data[i].Bldg
    }
}

var tempU = "1231"
export var units = [/*{
    floor: "1A",
    name: data[0].Unit,
    floorPlan: data[0]["Floor Plan"],
    newCarpet: data[0]["New Carpet"],
    washerDryer: data[0]["Washer/Dryer"],
    upgrade: data[0].Upgrade,
    available: data[0].Available,
    moveInReady: data[0]["Move in Ready"],
    vacant: data[0].Vacant,
    rent: data[0].Rent,
    marketRent: data[0]["Market Rent"],
}*/]
var j = 0
var k = 0
for (let i = 0; i < data.length; i++) {
    if (data[i].Unit !== tempU) {
        units.push({
            floor: floors[j].name,
            name: data[i].Unit,
            floorPlan: data[i]["Floor Plan"],
            newCarpet: data[i]["New Carpet"],
            washerDryer: data[i]["Washer/Dryer"],
            upgrade: data[i].Upgrade,
            available: data[i].Available,
            moveInReady: data[i]["Move in Ready"],
            //vacant: data[i].Vacant,
            rent: data[i].Rent,
            marketRent: data[i]["Market Rent"],
        })
        tempU = data[i].Unit
        k++
        if(k % 2 === 0)
        {
        j++
        }
    }
}

export var beds = []
for (let i = 0; i < data.length; i++) {
        beds.push({
            unit: data[i].Unit,
            name: data[i].Bed,
            private: data[i]["Shared/Private"],
            fullSpotName: data[i]["Full Spot Name"],
            tenent: data[i].Name,
        })
}


