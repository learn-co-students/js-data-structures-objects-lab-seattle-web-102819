// Write your solution in this file!
const driver = {
    name: 'Drew'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver};
    newDriver[key] = value;
    //driver.name = value;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    //const newDriver = driver
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}