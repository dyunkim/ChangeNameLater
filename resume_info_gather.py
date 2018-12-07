import re
import json
import mysql.connector
from pytesseract import image_to_string
from PIL import Image

class InfoGather:
	def gather(im):
		school_dict = ['SMU', 'Southern Methodist University', 'smu','UT Austin', 'UTD', "GT"]
		resume_text = image_to_string(im)

		email = re.findall(r'[\w\.-]+@[\w\.-]+', resume_text)
		phone = re.findall(r'\d{3}-\d{3}-\d{4}', resume_text)
		add = re.findall(r'((?i)\d+ ((?! \d+ ).)*(tx|TX)(, \d{5}| \d{5}|\b))', resume_text)
		gpa = re.findall(r'(GPA)*([0-3]\.\d|4\.0)', resume_text)

		name = resume_text.splitlines()


		test = resume_text.lower().split()
		school = 'null'

		for word in test:
			for sch in school_dict:
				if sch in word:
					school = 'Southern Methodist University'

		vals = (name[0], email[0], phone[0], school, add[0][0], 'null', gpa[0][1], '2017-05-01','null','null','null','null', path)
		return vals

	def return_resume_path(config):
		db = mysql.connector.Connect(**config)
		cursor = db.cursor()

		name = 'John Doe'
		cursor.execute("SELECT resumepath FROM canidate WHERE name = (name) VALUES (%s)", name)
		output = mycursor.fetchall()
		return output

	def return_id(config, vals):
		name = vals[0]
		db = mysql.connector.Connect(**config)
		cursor = db.cursor()

		cursor.execute("SELECT id FROM canidate WHERE name = (name) VALUES (%s)", name)
		output = mycursor.fetchall()
		return output

	def update_profile(jsonin):
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

	    data = json.loads(jsonin)

	    #TODO make data variable look like resume_vals

		db = mysql.connector.Connect(**config)
		cursor = db.cursor()
		sql = "UPDATE canidate SET id = %s, name = %s, email = %s, phonenum = %s, school = %s, address = %s, major = %s, GPA = %s, graddate = %s, skills = %s, wrkexpr = %s, buzzwrds = %s, comments = %s"
		cursor.execute(sql, data)
		output = mycursor.fetchall()
		return output

	def retrieve_data(config):

    	con = mdb.connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
    
    	with con:
        cur = con.cursor()
        sql = "SELECT * FROM canidate"
        cur.execute(sql)

        results = cur.fetchall()

        return results

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

	def process_pic(im):
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

	    resume_vals = gather(im)
	    main(config, resume_vals)
	    return return_id(config, resume_vals)