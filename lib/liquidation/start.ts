import { getShareHolders, soldExamples, solds, combined } from "./shareHolders";
import calc from "./calc";

function sort(array, key) {
    var sortedArray = array.sort((a, b) => a[key] - b[key]);
    return sortedArray;
}

export function liquidation(data) {
    let exitResult = {};

    const exits = data.exits;
    // const shareHolders = data.shareHolders;

    // for (const exit of exits) {
    // for (const exit of combined) {
    for (const exit of exits) {
        // for (const exit of solds) {
        const shareHolders = getShareHolders();
        const calculated = calc(shareHolders.reverse(), exit);
        exitResult[exit] = sort(calculated, "index");

        // let sumRet = 0;
        // for (const el of calculated) {
        //     sumRet += el.ret;
        // }
        // console.log("exit", exit, "sumRet", sumRet);

    }


    return exitResult;
}