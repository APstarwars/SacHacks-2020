import csv
import json

empty_list = []

Points = "Points"
FG = "FG%" ## modified
three_pointer = '3P%' #### modified
Offensive_Rebounds = 'Offensive_Rebounds'
Defensive_Rebounds = 'Defensive_Rebounds'
Assists	= 'Assists'
Steals = 'Steals'
Turnovers = 'Turnovers'
Blocked_Shots = 'Blocked_Shots'
Points1	= 'Points1'
PT_Differential	= 'PT_Differential'
# Opp_FGM	
# Opp_FGA	
Opp_FG = 'Opp_FG%' # modified what is this? ## Bad
# Opp_3PM	
# Opp_3PA	
Opp_3P = "Opp_3P%" # modified what is this? ## Bad
Opp_OREB = 'Opp_OREB'	## Bad
Opp_DREB = 'Opp_DREB'	## Bad
Opp_AST	= 'Opp_AST'## Bad
Opp_STL	= 'Opp_STL'## Bad
Opp_TOV	= 'Opp_TOV'## Bad
Opp_BLK = 'Opp_BLK'## Bad

list_stats = [Points, FG, three_pointer, Offensive_Rebounds, Defensive_Rebounds, Assists, Steals, Turnovers,
            Blocked_Shots, Points1, PT_Differential, Opp_FG, Opp_3P, Opp_OREB, Opp_DREB, Opp_AST,
            Opp_STL, Opp_TOV, Opp_BLK]


avg_list1 = []
avg_list2 = []
avg_list3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

with open('2KL Team Stats.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        empty_list.append(row)

zero = 0

for x in empty_list:
    avg_list1 = []
    for key_value in list_stats:
        avg_list1.append(float(x[key_value]))
    for z in avg_list1:
        avg_list3[zero] = avg_list3[zero] + z
        zero += 1
    zero = 0


for x in avg_list3:
    var1 = x / float(len(empty_list))
    avg_list2.append(var1)

zero = 0
bad_list = []
good_list = []

for x in empty_list:
    combatLVL = 0
    zero = 0
    bad_list.append(x["Nickname"])
    for y in list_stats:
        if float(x[y]) >= avg_list2[zero] and zero <= 10:
            var2 = "{}: Strength".format(y)
            combatLVL+=1
        elif float(x[y]) <= avg_list2[zero] and zero <= 10:
            var2 = "{}: Weaknesses".format(y)
            combatLVL-=1

        elif float(x[y]) >= avg_list2[zero] and zero > 10:
            var2 = "{}: Weaknesses".format(y)
            combatLVL-=1 

        elif float(x[y]) <= avg_list2[zero] and zero > 10:
            var2 = "{}: Strength".format(y)
            combatLVL+=1

        else:
            pass
        bad_list.append(var2)
        zero+=1

    bad_list.append(combatLVL)
    good_list.append(bad_list)
    bad_list = []

for x in good_list:
    y = x[20]
    x.remove(x[20])
    x.insert(0, y)

Rank = "Rank"
Nickname = "Team"

list_updated = [Rank, Nickname, Points, FG, three_pointer, Offensive_Rebounds, Defensive_Rebounds, Assists, Steals, Turnovers,
            Blocked_Shots, Points1, PT_Differential, Opp_FG, Opp_3P, Opp_OREB, Opp_DREB, Opp_AST,
            Opp_STL, Opp_TOV, Opp_BLK]


f = open("Team_Weak_Str.txt", "w")
f.write('[')
good_list.sort(reverse=True)
for x in good_list:
    z = 0
    for y in list_updated:
        sum_dict = {y: x[z]}
        z+=1

    json_string = json.dumps(sum_dict)
    f.write(json_string)
    if x == good_list[20]:
        pass
    else:
        f.write(",")

f.write(']')
f.close() 
