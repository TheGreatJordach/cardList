import { Injectable } from '@angular/core';
import {v4 as uuidv4} from "uuid";
import {IAppointment} from "../models/model.appointement";
import {chain} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }


  generateID():string{
    const newId: string = this.generateUniqueId()
    const currentDate: Date = new Date()
    return `${newId}.${currentDate}`
  }

  generateUniqueId(): string {
    return uuidv4();  // Generate a unique ID
  }

  saveInLocalStorage(serializedValue:object, key:string="appointments"){
    localStorage.setItem(key, JSON.stringify(serializedValue));

  }

  createAppointment(title:string,date:Date):IAppointment {
    //Generate new ID
    const appointmentID = this.generateID()
    return {
      id: appointmentID,
      title: title,
      date: date
    }
  }

  saveInClientBrowser(appointmentList: IAppointment[],newAppointment: IAppointment) {
    chain(appointmentList)
      .push(newAppointment) // Add new appointment to the appointments array
      .tap((updatedAppointments) => {
        // Save the updated appointments to localStorage
        this.saveInLocalStorage(updatedAppointments);
      })
      .value(); // Execute the chain

  }
}
