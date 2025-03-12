// create-tables.mjs
import connection from "./connection.js";

// 'meetup' database
connection.query("DROP DATABASE IF EXISTS meetup", (err, result) => {
  if (err) throw err;
  console.log("Database dropped if exists");

  connection.query("CREATE DATABASE meetup", (err, result) => {
    if (err) throw err;
    console.log("Database created");
    connection.changeUser({ database: "meetup" }, (err) => {
      if (err) throw err;

      console.log("Database switched to meetup");

      //  Invitee table
      const createInviteeTable = `
        CREATE TABLE IF NOT EXISTS Invitee (
          invitee_no INT AUTO_INCREMENT PRIMARY KEY,
          invitee_name VARCHAR(100),
          invited_by VARCHAR(100)
        )
      `;
      connection.query(createInviteeTable, (err, result) => {
        if (err) throw err;
        console.log("Invitee table created");
      });

      //  Room table
      const createRoomTable = `
        CREATE TABLE IF NOT EXISTS Room (
          room_no INT AUTO_INCREMENT PRIMARY KEY,
          room_name VARCHAR(100),
          floor_number INT
        )
      `;
      connection.query(createRoomTable, (err, result) => {
        if (err) throw err;
        console.log("Room table created");
      });

      // Create Meeting table
      const createMeetingTable = `
        CREATE TABLE IF NOT EXISTS Meeting (
          meeting_no INT AUTO_INCREMENT PRIMARY KEY,
          meeting_title VARCHAR(100),
          starting_time DATETIME,
          ending_time DATETIME,
          room_no INT,
          FOREIGN KEY (room_no) REFERENCES Room(room_no)
        )
      `;
      connection.query(createMeetingTable, (err, result) => {
        if (err) throw err;
        console.log("Meeting table created");
        connection.end();
      });
    });
  });
});
