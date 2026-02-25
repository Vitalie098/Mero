export type AppointmentStatus = "CONFIRMAT" | "FINALIZAT";

export type Appointment = {
  id: string;
  status: AppointmentStatus;
  title: string;
  dateLabel: string; 
};
