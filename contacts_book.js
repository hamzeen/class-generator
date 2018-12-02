var uid = 1;

function ContactController($scope) {

  $scope.newcontact = { gender: "MALE", graduate: "NO" };
  $scope.contacts = [
    {
          id: 0,
          name: "Ilham",
          stuId: "1999",
          phone: "+94 (0)77 3031 441",
          email: "ilham@mymail.com",
          graduate: "YES",
          donation: "LKR 9,000",
          address: "60, Katugahwatte, Dewanagala, Sri Lanka",
          gender: "MALE"
    }
  ];

  $scope.jsonObj = {
    name: "1990",
    students: $scope.contacts
  };

  $scope.refreshForm = function() {
    $scope.newcontact = { gender: "MALE", graduate: "NO" };
  };

  $scope.saveContact = function() {
        if ($scope.newcontact.id == null) {
          //if this is new contact, add it in contacts array
          $scope.newcontact.id = uid++;
          $scope.contacts.push($scope.newcontact);
        } else {
          // update existing contact
          for(i in $scope.contacts) {
            if ($scope.contacts[i].id == $scope.newcontact.id) {
              $scope.contacts[i] = $scope.newcontact;
            }
          }
        }

    // refresh form
    $scope.refreshForm();
  };

  $scope.delete = function(id) {
    // search contact with given id and delete it
    for(i in $scope.contacts) {
      if ($scope.contacts[i].id == id) {

        $scope.contacts.splice(i, 1);
        // refresh form
        $scope.refreshForm();
      }
    }
  };

  $scope.edit = function(id) {
    //search contact with given id and update it
    for(i in $scope.contacts) {
      if ($scope.contacts[i].id == id) {
        // we use angular.copy() method to create copy of original object
        $scope.newcontact = angular.copy($scope.contacts[i]);
      }
    }
  };
}
