# conqoll
manage rooms for customers

Setting up the project --> (perform below tasks in terminal)
1. git clone repository  (downloading the project locally)
2. cd to project         (changing the working directory)
3. npm install           (installing the dependencies)
4. npm start             (running the project)

Interacting with project -->
copy URL from terminal or type in browser
http://localhost:4000/graphql


Commands -->

1. Add a room

mutation{
  addRoom(name:"Room5",occupied:false){
    id,
    name,
    startDate,
    stopDate,
    occupied
  }
}

2. Display all rooms

{
  allRooms{
    id,
    name,
    stopDate,
    startDate,
    occupied
  }
}

3. Display non-occupied rooms

{
  availableRooms{
    id,
    name,
    startDate,
    stopDate,
    occupied
  }
}

4. Book a room

mutation{
  bookRoom(_id:"5e11f3ec985bc1184f62b70e", startDate:"2010-10-05", stopDate:"2010-10-08"){
    id,
    name,
    startDate,
    stopDate,
    occupied
  }
}

5. Display the count of the rooms

{
  totalRooms
}


6. remove a room

mutation{
  removeRoom(_id:"5e118ca5d35952285eba91bf")
}

7. Check the available rooms for particular dates

{
  checkForDates(startDate:"2010-10-07",stopDate:"2010-10-08"){
    id,
    name,
    startDate,
    stopDate,
    occupied
  }
}
