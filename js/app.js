//create an empty contacts array
var contacts = [];

//Displays the contact information from the contacts[] array
function displayContact(i) {
    $('#contactFirst').html(contacts[i].firstName);
    $('#contactLast').html(contacts[i].lastName);
    $('#contactPhone').html(contacts[i].phoneNum);
   // $('#contactAddress').html(contacts[i].street + '<br />' + '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp' + contacts[i].city + ', ' + contacts[i].state);
   $('#contactAddress').html('<ul> <li>' + contacts[i].street + ', ' + contacts[i].city + ', ' + contacts[i].state + '</li> </ul>');
}

//create an object that pushes the inputs into the contacts[] array
var add = function(firstName, lastName, phoneNum, street, city, state) {
    contacts.push({
        firstName: firstName,
        lastName: lastName,
        phoneNum: phoneNum,
        street: street,
        city: city,
        state: state
    });
};

$(document).ready(function() {

    $('#js-contactValues').submit(function(event) {

        event.preventDefault();

        //create our variables from the contact form
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var phoneNum = $('#phoneNum').val();
        var street = $('#street').val();
        var city = $('#city').val();
        var state = $('#state').val();

        // create a variable equal the current index of the contacts[] array
        var i = contacts.length - 1;
        i++;

        //Append our first and last name to the contact list
        $('#contactList').append('<li><a href="#" onclick="displayContact(' + i + '); return false;">' + firstName + " " + lastName + '</a></li>');

        //populate the contacts[] array with the add function
        add(firstName, lastName, phoneNum, street, city, state);

        // Empties the input fields
        $('#firstName').val("");
        $('#lastName').val("");
        $('#phoneNum').val("");
        $('#street').val("");
        $('#city').val("");
        $('#state').val("");
    });
});
