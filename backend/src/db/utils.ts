import { query } from "./index";

export const truncateTable = async (tableName: string): Promise<void> => {
  try {
    await query(`TRUNCATE TABLE ${tableName} RESTART IDENTITY CASCADE`);
    console.log(`Table ${tableName} truncated successfully.`);
  } catch (error) {
    console.error(`Error truncating table ${tableName}:`, error);
    throw error;
  }
};
