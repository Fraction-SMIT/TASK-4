import sql from 'mssql/msnodesqlv8';

export const config: sql.config = {
    server: 'DESKTOP-VED1R3G\\SQLEXPRESS',
    database: 'Angular',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
}

