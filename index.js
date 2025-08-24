import { person_list, checkIfValidElement } from "./constants.js"

function getMaxElementByProperty(list, property) {
    let max_index = -1;
    let max_value = -1;

    if (!Array.isArray(list)){
        return undefined;
    }

    if (typeof property !== "string"){
        return undefined;
    }

    if (list.legth == 0 || !property) {
        return null;
    }

    list.forEach( (element, index) => {
        if (element[property] > max_value && checkIfValidElement(element)) {
            max_index = index;
            max_value = element[property];
        }
    });

    let response;
    (max_index == -1) ? response = null : response = list[max_index];
    return response;
}

function showMaxData() {
    let max_name = getMaxElementByProperty(person_list, 'name');
    let max_age = getMaxElementByProperty(person_list, 'age');
    let max_height = getMaxElementByProperty(person_list, 'height');
    console.log(`El elemento con la mayor altura es: [${max_name.name}, ${max_name.age}, ${max_name.height}]`);
    console.log(`El elemento con la mayor edad es: [${max_age.name}, ${max_age.age}, ${max_age.height}]`);
    console.log(`El elemento con el mayor nombre es: [${max_height.name}, ${max_height.age}, ${max_height.height}]`);
}

showMaxData()