import {Room} from '../models/Room'

export const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      allRooms: ()=> Room.find(),
      totalRooms:()=>Room.find().count(),
      availableRooms: ()=>{
         return Room.find({occupied:false})
      },
      checkForDates: (_,{startDate,std})=>{
          const st = Math.round((new Date(startDate)).getTime() / 1000);
          console.log('start date',startDate)
          console.log(st);
          return Room.find({ $or: [ { stopDate: { $lt: st } }, { occupied: false } ] })
      }
    },
    Mutation:{
        addRoom: (_,{name,occupied})=>{
            const room = new Room({name,occupied});
            return room.save();
        },
        removeRoom: (_,{_id})=>{
            return Room.findByIdAndDelete({_id})
                        .then(data => {
                            if(data) return "successfully removed room";
                            else return "Room not found"
                        });
        },
        bookRoom: (_,{_id, startDate, stopDate})=>{
            return Room.findByIdAndUpdate({_id}, {$set: {
                startDate: Math.round((new Date(startDate)).getTime() / 1000),
                stopDate: Math.round((new Date(stopDate)).getTime() / 1000),
                occupied: true
            }})
        }
    }
  };