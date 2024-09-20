import {Component} from '@angular/core';
import {IAppointment} from "../models/model.appointement";
import { chain } from 'lodash';
import {OnInit} from "@angular/core";
// Import UUID v4
import {v4 as uuidv4} from 'uuid';
import {AppointmentService} from "./appointment.service";
import {isNonEmptyString} from "./util/is-non-empty";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent implements OnInit{

  constructor(private readonly appointmentService: AppointmentService){}

  ngOnInit(){
    let containsAppointments: string | undefined = localStorage.getItem("appointments") ??  undefined ;
    this.appointments = containsAppointments ? JSON.parse(containsAppointments) : []

  }

  appointmentTitle:string = ""
  appointmentDate : Date | null = null;
  appointments: IAppointment[] = []

  addAppointment(){

    const titleIsDefined:boolean = isNonEmptyString(this.appointmentTitle)

    if (titleIsDefined && this.appointmentDate){


     //create new Appointment
      const newAppointment =
        this.appointmentService.createAppointment(this.appointmentTitle,this.appointmentDate)

      // Use Lodash to chain the operations and save to localStorage
      this.appointmentService.saveInClientBrowser(this.appointments,newAppointment)

      this.resetDataState()

    } else if(!titleIsDefined){
      alert("Please enter title")
    } else alert("Please Pick up a date")
  }

  resetDataState(){
    this.appointmentTitle=""
    this.appointmentDate= null;
    alert(`You have now ${this.appointments.length} appointments`);
  }



}
