const fs = require('fs')

function countStudents(path) {
    try {
        const content = fs.readFileSync(path, 'utf8')

        // remove the header from the csv data
        let lines = content.split('\n').slice(1)

        // after splitting, if the file has '\n' at the end, remove it
        lines = lines.filter(val => val !== '')

        const fields = {}
        for (const line of lines) {
            const data = line.split(',')
            const field = data[3]

            // e.g if 'CS' not a property in var *fields*,
            // create if before pushing data to it
            if (!(field in fields)) {
                fields[field] = []
            }
            fields[field].push(data[0])
        }
        console.log('Number of students: ', lines.length)
        for (const [key, value] of Object.entries(fields)) {
            console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`)
        }
    } catch (e) {
        console.log(e)
        throw new Error ('Cannot load the database')
    }
}

module.exports = countStudents
