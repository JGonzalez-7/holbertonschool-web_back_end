import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split the database content into lines and remove empty lines
        const lines = data
          .split('\n')
          .filter((line) => line.trim() !== '');

        // Remove the CSV header line
        const students = lines.slice(1);

        // Create an object to group first names by field
        const fields = {};

        // Loop through every student row
        students.forEach((student) => {
          // Extract firstname and field from the CSV row
          const [firstname, , , field] = student.split(',');

          // Trim values to avoid spaces or Windows line ending problems
          const trimmedFirstname = firstname.trim();
          const trimmedField = field.trim();

          // Create the field array if it does not exist yet
          if (!fields[trimmedField]) {
            fields[trimmedField] = [];
          }

          // Add the firstname to the correct field
          fields[trimmedField].push(trimmedFirstname);
        });

        // Return the grouped students object
        resolve(fields);
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

export default readDatabase;
