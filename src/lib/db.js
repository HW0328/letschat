import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

// 데이터베이스 연결 함수
export default async function connectToDatabase() {
    try {
        const db = await open({
            filename: './src/lib/db.db',
            driver: sqlite3.Database
        });
        return db;
    } catch (error) {
        console.error('DB 연결 오류:', error);
        throw error;
    }
}
