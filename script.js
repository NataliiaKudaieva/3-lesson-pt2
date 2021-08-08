var uniformColor = prompt('What is the color of uniform?');
var isShieldAvailable = confirm('Do you have a shield?');
var shieldType;
if (isShieldAvailable) {
    shieldType = prompt('What is the picture on the shield?');
} else {
    shieldType = null;
}

function isLannisterSoldier (uniformColor, shieldType) {
    var lannister = (uniformColor === 'red' && shieldType === null) || shieldType === 'lion';
    if (lannister) {
        alert('This is Lannister');
    }
    else {
        alert('This is not Lannister');
    }

}

isLannisterSoldier(uniformColor, shieldType);