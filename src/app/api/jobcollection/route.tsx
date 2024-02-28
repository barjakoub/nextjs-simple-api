import { NextResponse } from "next/server";
// import mysql from 'mysql2/promise';
import database from '../mysql'

export async function GET() {
    const query = 'SELECT * FROM era2.candidates';
    const dataRecords = await database(query);
    return NextResponse.json({
        dataRecords
    });
}