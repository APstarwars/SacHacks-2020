import csv
import json

empty_list = []

with open('2k Player Stats.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        empty_list.append(row)

full_stat_player = ''
f = open("All_Players_Stats.txt", "w")
for x in range(len(empty_list)): 
    for y in empty_list[x].keys():

        var1 = '{}: {}, '.format(y, empty_list[x][y])
        full_stat_player += var1


    full_stat_player = full_stat_player.rstrip(', ')

    full_stat_player += "\n"

    json_string = json.dumps(full_stat_player)
    f.write(json_string)

    full_stat_player = ''
f.close()


# Before JSON file editing, this will be normal txt
# full_stat_player = ''
# f = open("All_Players_Stats.txt", "w")
# for x in range(len(empty_list)): # 126
#     for y in empty_list[x].keys():

#         var1 = '{}: {}, '.format(y, empty_list[x][y])
#         full_stat_player += var1

#     full_stat_player = full_stat_player.rstrip(', ')
    
#     f.write(full_stat_player)
#     f.write("\n")

#     full_stat_player = ''
# f.close()

