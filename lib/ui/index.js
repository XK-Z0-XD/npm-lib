/**
 * UI Module
 * @file ui_module
 * 
 */

module.id = "ui_module";
const test_module = function () {
    console.log("Module Test Was Successful");
};
/**
 * outputs a message box
 * @param {number} stat message box status type 
 * @param {string} msg 
 * @param {Element} container 
 * @param {} options array of options {size:{hieght, width}, title} 
 */
const messagebox = function (stat, msg, container, options = {size:{height, width}, title}) {
console.log("To Be Implemented");
}
module.exports = { test_module, messagebox };