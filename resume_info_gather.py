import re
from pytesseract import image_to_string
from PIL import Image

path = '/vagrant/hack/ChangeNameLater/resume_samples/cleantest.jpg'

im = Image.open(path)
#print(im)

resume_text = image_to_string(im)

#print(resume_text)


email_match = re.findall(r'[\w\.-]+@[\w\.-]+', resume_text)
phone_num = re.findall(r'\d{3}-\d{3}-\d{4}', resume_text)
address = re.findall(r'((?i)\d+ ((?! \d+ ).)*(tx|TX)(, \d{5}| \d{5}|\b))', resume_text)
gpa = re.findall(r'(GPA)*([0-3]\.\d|4\.0)', resume_text)

test1 = resume_text.splitlines()


test = resume_text.lower().split()
school = 'null'

for word in test:
	if 'smu' in word:
		school = 'Southern Methodist University'

print("TEST BEGINS")
print(test1[0])
print(email_match[0])
print(phone_num[0])
print(address[0][0])
print(gpa[0][1])
print(school)
		