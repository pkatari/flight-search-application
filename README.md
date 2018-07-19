# Flight Search Application
Flight Search Application is created using React js,Redux.

---> The application is responsive on ipad, iphone, android. 
---> There is also `Refine Flight Search` as per price. Flights will be displayed based on the price selected by user.

---> `Validations` are also applied on the form.

## Available Run Steps

In the project directory, Perform following steps:

# 1. `npm install`

   This will install node modules.

# 2. `npm start`

  ---> It will run the application

  ---> Open [http://localhost:3000]  to view it in the browser.


# 3.`npm test`

It will run the tests.

---> Few of the Unit Tests are written. Like for actions,reducers and header component(components/header)

## Application Details

  -----> Initially,all the flights are displayed in the list.
  
  #  'Return Trip'  

    >>> Click on Return tab

   For getting data, select following details :

   Origin city         =  Pune

   Destination city    =  Delhi

   Depature date       = 02/08/2018  (2nd August,2018)

   Return date         =  05/08/2018 (5th August 2018)

   Passengers          =  User can select any number of passengers

   Price range         = 0-8000

   ### On clicking search button, user should be able to see 3 results.

## 'One way'

   ## Here `Return tab` will not be displayed

   Origin city         = Pune

   Destination city    = Delhi

   Depature date       = 02/08/2018  (2nd August,2018)

   Passengers          =  User can select any number of passengers

    Price range         = 0-8000

   ### On clicking search button, user should be able to see 3 results.

### Price Range Search 
  ---> User can also search flights based on price.In Refine Flight search, change price Range,flight
  details will be changed accordingly

#### No Match Found
---> If no match is found as per search data entered in search form,then user will see 
`Sorry, There are no flights available. Please try again with different search!!!`

##### Validations on Search Form

`If search form contains invalid result, then error will be displayed above search button

# Origin city is blank
   --> If Origin City is blank, `Please Enter Origin City` error will be displayed above search button.

# Destination city is blank
   --> If Destination City is blank, `Please Enter Destination City` error will be displayed above search button.

# Origin and Destination City are same
   --> If Origin and Destination city is same, `The Origin and Destination city cannot be same.Please re-type` error will be displayed above search button.

# Departure Date is greater than return date
   --> If Departure date is greater than return date, `Return date should be greater than destination Date` error will be displayed above search button.

