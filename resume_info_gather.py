import re
import mysql.connector
from pytesseract import image_to_string
from PIL import Image

def gather():
	path = '/vagrant/hack/ChangeNameLater/resume_samples/cleantest.jpg'
	
	im = Image.open(path)
	resume_text = image_to_string(im)

	email = re.findall(r'[\w\.-]+@[\w\.-]+', resume_text)
	phone = re.findall(r'\d{3}-\d{3}-\d{4}', resume_text)
	add = re.findall(r'((?i)\d+ ((?! \d+ ).)*(tx|TX)(, \d{5}| \d{5}|\b))', resume_text)
	gpa = re.findall(r'(GPA)*([0-3]\.\d|4\.0)', resume_text)

	name = resume_text.splitlines()


	test = resume_text.lower().split()
	school = 'null'

	for word in test:
		if 'smu' in word:
			school = 'Southern Methodist University'

	vals = (name[0], email[0], phone[0], school, add[0][0], 'null', gpa[0][1], '2017-05-01','null','null','null','null', path)
	return vals

def return_resume_path():
	db = mysql.connector.Connect(**config)
	cursor = db.cursor()

	name = 'John Doe'
	cursor.execute("SELECT resumepath FROM canidate WHERE name = (name) VALUES (%s)", name)
	output = mycursor.fetchall()
	return output


def main(config, resume_vals):
    output = []
    cnx = mysql.connector.connect(**config)
    cur = cnx.cursor()

    # Insert 3 records
    # name[0]) email_match[0]) phone_num[0] address[0][0] gpa[0][1] school
    # val = ('John Doe', 'johndoe@gmail.com', '123456789', 'UT', '10 I am loosing it, Plano, TX 75035', 'null', '3.5', '2007-12-30' ,'null','null','null','null', 'null')
    stmt_insert = "INSERT INTO canidate (name, email, phonenum, school, address, major, gpa, graddate, skills, wrkexpr, buzzwrds , comments, resumepath) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cur.execute(stmt_insert, resume_vals)
    cnx.commit()

    # Read the names again and print them
    # stmt_select = "SELECT id, name, info, age FROM names ORDER BY id"
    # cur.execute(stmt_select)

    cur.close()
    cnx.close()

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

    resume_vals = gather()
    main(config, resume_vals)