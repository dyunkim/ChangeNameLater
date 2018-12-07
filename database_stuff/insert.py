import mysql.connector


def main(config):
    output = []
    cnx = mysql.connector.connect(**config)
    cur = cnx.cursor()

    # Insert 3 records
    # name[0]) email_match[0]) phone_num[0] address[0][0] gpa[0][1] school
    val = ('John Doe', 'johndoe@gmail.com', '123456789', 'UT', '10 I am loosing it, Plano, TX 75035', 'null', '3.5', '2007-12-30' ,'null','null','null','null', )
    stmt_insert = "INSERT INTO canidate (name, email, phonenum, school, address, major, gpa, graddate, skills, wrkexpr, buzzwrds , comments) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cur.execute(stmt_insert, val)
    cnx.commit()

    # Read the names again and print them
    # stmt_select = "SELECT id, name, info, age FROM names ORDER BY id"
    # cur.execute(stmt_select)

    cur.close()
    cnx.close()
    return output


if __name__ == '__main__':

    config = {
        'host': 'localhost',
        'port': 3306,
        'database': 'Profile',
        'user': 'root',
        'password': 'password123',
        'charset': 'utf8',
        'use_unicode': True,
        'get_warnings': True,
    }

    out = main(config)
    print('\n'.join(out))