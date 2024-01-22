const prepaidUserWNetMetering = {
    id:"12",
    password:"pass",
    netMetering:true,
    conventional:false,
    category:"Prepaid"
}
const prepaidUserWONetMetering = {
    id:"34",
    password:"pass",
    netMetering:false,
    conventional:false,
    category:"Prepaid"
}

const postpaidUserWNetMetering = {
    id:"56",
    password:"pass",
    netMetering:true,
    conventional:false,
    category:"Postpaid"
}
const postpaidUserWONetMetering = {
    id:"78",
    password:"pass",
    netMetering:false,
    conventional:false,
    category:"Postpaid"
}

const conventionalUser = {
    id:"90",
    password:"pass",
    conventional:true,
    netMetering:false,
    category:"Postpaid"
}
// localStorage.setItem("setId",JSON.stringify([conventionalUser]));
const user = [prepaidUserWONetMetering,prepaidUserWNetMetering,postpaidUserWNetMetering,postpaidUserWONetMetering,conventionalUser]

export default user