import genaricHelper from "../helpers/genericHelper";
const min = 200;
const max = 500;
const randomValue = min + Math.floor(Math.random() * (max - min + 1));

export let userVar = {
    username:`misksawallha${randomValue}N23_${genaricHelper.genaricRandomString()}`,
    password:"misk123"
}


