import connection from "./connection.js";

connection.query("USE meetup", (err, result) => {
  if (err) throw err;
  console.log("Database selected: meetup");

  // Insert data into Invitee table
  const insertInvitee = `
  INSERT INTO Invitee (invitee_name, invited_by)
  VALUES ('Alice', 'Bob'),
         ('Charlie', 'David'),
         ('Eva', 'Frank'),
         ('George', 'Helen'),
         ('Ivy', 'Jack')
`;
  connection.query(insertInvitee, (err, result) => {
    if (err) throw err;
    console.log("Invitee data inserted");
  });

  // Insert data into Room table
  const insertRoom = `
  INSERT INTO Room (room_name, floor_number)
  VALUES ('Room A', 1),
         ('Room B', 2),
         ('Room C', 3),
         ('Room D', 4),
         ('Room E', 5)`;
  connection.query(insertRoom, (err, result) => {
    if (err) throw err;
    console.log("Room data inserted");
  });

  // Insert data into Meeting table
  const insertMeeting = `
  INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no)
  VALUES ('Team Sync', '2025-03-13 09:00:00', '2025-03-13 10:00:00', 1),
         ('Client Meeting', '2025-03-13 11:00:00', '2025-03-13 12:00:00', 2),
         ('Board Meeting', '2025-03-13 13:00:00', '2025-03-13 14:00:00', 3),
         ('Sales Pitch', '2025-03-13 15:00:00', '2025-03-13 16:00:00', 4),
         ('Team Standup', '2025-03-13 16:30:00', '2025-03-13 17:00:00', 5)`;
  connection.query(insertMeeting, (err, result) => {
    if (err) throw err;
    console.log("Meeting data inserted");
    connection.end();
  });
});
