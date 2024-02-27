import { NextResponse } from "next/server";
// import mysql from 'mysql2/promise';
import database from '../mysql'

export async function GET() {
    const query = 'SELECT * FROM era1.jobs INNER JOIN era2.candidates ON era2.candidates.job_id = era1.jobs.job_id';
    const dataRecords = await database(query);
    return NextResponse.json({
        dataRecords
    });
}