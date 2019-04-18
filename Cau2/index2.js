let iObj = {
    name: `Bob`,
    job: `Programer`
}
console.log(`input ${iObj}`);

function changeObj(obj){
    return ({
        actor: obj.job,
        firstName: obj.name
    })
}

console.log(changeObj(iObj))