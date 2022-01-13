function getAdmins(map){
    let admins = [];
    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Tyson','Admin');
usuarios.set('Luana', 'User');
usuarios.set('Maria', 'User');
usuarios.set('Stephany', 'Admin');

console.log(getAdmins(usuarios));