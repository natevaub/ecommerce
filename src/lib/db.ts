import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDB() {
  return open({
    filename: './data/appdb.db',
    driver: sqlite3.Database
  });
}

export default openDB;