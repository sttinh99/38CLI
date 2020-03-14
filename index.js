/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var fs = require('fs');
var readlineSync = require('readline-sync');

contacts = [];

function showMenu(){
    console.log("--1 Nhập dữ liệu điện thoại");
    console.log("--2 Sữa dữ liệu");
    console.log("--3 Xóa contact");
    console.log("--4 Tìm contact");
    var option = readlineSync.question('chon chuc nang ');
    switch(option){
        case '1':
            newContact();
            showMenu();
            break;
        case '2':
            editContact();
            showMenu();
            break;
        case '3':
            delContact();
            showMenu();
            break;
        case '4':
            findContact();
            showMenu();
            break;
        default:
            break;
    }
}
function newContact(){
    contacts = fs.readFileSync('./data.json',{encoding:'utf8'});
    contacts = JSON.parse(contacts);
    contact = {};
    var name = readlineSync.question('ten contact: ');
    var phoneNumber = readlineSync.question('phone number: ');
    contact.name = name;
    contact.phoneNumber = phoneNumber;
    contacts.push(contact);
    contacts = JSON.stringify(contacts);
    fs.writeFileSync('./data.json',contacts);
}
function editContact(){
    contacts = fs.readFileSync('./data.json',{encoding:'utf8'});
    contacts = JSON.parse(contacts);
    console.log(contacts);
    var x = readlineSync.question('index edit (x >=1 && x< ' + contacts.length +'): ');
    x = parseInt(x);
    for(var i=0;i<=contacts.length;i++){
        if(i == (parseInt(x)-1))
        {
            var name = readlineSync.question('ten contact: ');
            var phoneNumber = readlineSync.question('phone number: ');
            contacts[i].name = name;
            contacts[i].phoneNumber = phoneNumber;
        } 
    }
    console.log(contacts);
    contacts = JSON.stringify(contacts);
    fs.writeFileSync('./data.json',contacts);
}
function delContact(){
    contacts = fs.readFileSync('./data.json',{encoding:'utf8'});
    contacts = JSON.parse(contacts);
    console.log(contacts);
    var x = readlineSync.question('index delete (x >=1 && x< ' + contacts.length +'): ');
    x = parseInt(x);
    contacts.splice(1,x-1);
    console.log(contacts);
    contacts = JSON.stringify(contacts);
    fs.writeFileSync('./data.json',contacts);
}
function findContact(){
}
function main()
{
    showMenu();  
}
main();