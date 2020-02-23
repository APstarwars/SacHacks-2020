import csv
import json

empty_list = []

with open('2k Player Stats.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        empty_list.append(row)

dict2 = {}
f = open("All_Players_Stats.txt", "w")
f.write('[')
for x in range(len(empty_list)): 
    for y in empty_list[x].keys():

        dict1 = {y: empty_list[x][y]}
        dict2.update(dict1)

    json_string = json.dumps(dict2)
    f.write(json_string)
    if x == len(empty_list) -1:
        pass
    else:
        f.write(',')
f.write(']')

f.close()




