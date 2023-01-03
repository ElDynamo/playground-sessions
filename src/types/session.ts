export type Session = {
  // id: number;
  session_name: String;
  session_date: Date;
  start_time: Date;
  duration_h: number;
  price: number;
  slots: number;
  meeting_place: String;
  // bookings?: Array<Booking>;
};
