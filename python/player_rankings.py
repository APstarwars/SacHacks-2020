import csv

empty_list = []
Person_id = 'Person_id'
Player = 'Player'
Season_Type = 'Season_Type'
GP = 'GP'
Min = 'Min'
FGM = 'FGM'
FG3M = 'FG3M'
FG3A = 'FG3A'
FTM = 'FTM'
FTA = 'FTA'
OREB = 'OREB'
DREB = 'DREB'
REB = 'REB'
AST = 'AST'
PF = 'PF'
STL = 'STL'
TOV = 'TOV'
BLK = 'BLK'
PTS = 'PTS'
CareerHighPTS = 'CareerHighPTS'
Team = 'Team'

with open('2k Player Stats.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        empty_list.append(row)

rank_list = []

for x in range(len(empty_list)): # 126
    rank = (int(empty_list[x][FGM]) * 85.910 + int(empty_list[x][STL]) * 53.899 + int(empty_list[x][FG3M]) * 51.757 
          + int(empty_list[x][FTM]) * 46.845 + int(empty_list[x][BLK]) * 39.190 + int(empty_list[x][OREB]) * 39.190
          + int(empty_list[x][AST]) * 34.677 + int(empty_list[x][DREB]) * 14.707 - int(empty_list[x][PF]) * 17.174
          - (int(empty_list[x][FTA]) - int(empty_list[x][FTM])) * 20.091 - (int(empty_list[x][FG3A]) - int(empty_list[x][FG3M]))
          * 39.190 - int(empty_list[x][TOV]) * 53.897) * (1.00/int(empty_list[x][Min]))
    player = empty_list[x][Player]
    var1 = rank, player, empty_list[x][Team]
    rank_list.append(var1)
    rank_list.sort(reverse=True)

counter = 1
updated_list = []
for z in rank_list:
    y = [counter, z[1], z[2]]
    counter += 1
    updated_list.append(y)

updated_list2 = []
for x in updated_list:
    sum_dict = {"Rank": x[0], "Player": x[1], "Team": x[2]}
    updated_list2.append(sum_dict)

f = open("All_Players_Ranking.txt", "w")
updated_list3 = str(updated_list2)
f.write(updated_list3)
f.close()
