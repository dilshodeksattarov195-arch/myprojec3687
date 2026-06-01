const cartSarseConfig = { serverId: 6570, active: true };

const cartSarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6570() {
    return cartSarseConfig.active ? "OK" : "ERR";
}

console.log("Module cartSarse loaded successfully.");