import mysql from 'mysql2/promise';

export default async function gettingData(query: string) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root'
    });

    try {
        const [results, fields] = await connection.query(query);

        console.info(results);
        console.info(fields);

        return results;
    } catch (error) {
        console.info(error);
        return error;
    }
}