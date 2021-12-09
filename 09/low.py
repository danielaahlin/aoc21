data = list()
with open('example.txt', 'r') as f:
    data = [i.split('\n')[0] for i in f]

lava_tubes = [[int(i) for i in d] for d in data]

length = len(lava_tubes[0])
height = len(lava_tubes)

def find_neigbours(h, l, tubes):
    if h == 0 and l == 0:
        values = [ tubes[h][l + 1], tubes[h + 1][l] ]
    elif h == 0 and l == length - 1:
        values = [ tubes[h][l - 1], tubes[h + 1][l] ]
    elif h == height - 1 and l == 0:
        values = [ tubes[h][l + 1], tubes[h - 1][l] ]
    elif h == height - 1 and l == length - 1:
        values = [ tubes[h][l - 1], tubes[h - 1][l] ]
    elif l == 0:
        values = [ tubes[h][l + 1], tubes[h + 1][l], tubes[h - 1][l] ]
    elif l == length - 1:
        values = [ tubes[h][l - 1], tubes[h + 1][l], tubes[h - 1][l]]
    elif h == 0:
        values = [ tubes[h][l + 1], tubes[h + 1][l], tubes[h][l - 1] ]
    elif h == height - 1:
        values = [ tubes[h][l - 1], tubes[h][l + 1], tubes[h - 1][l] ]
    else:
        values = [ tubes[h][l + 1], tubes[h][l - 1], tubes[h + 1][l], tubes[h - 1][l] ]

    return values

lowpoints = []
for h in range(height):
    for l in range(length):
        val = lava_tubes[h][l]
        values = find_neigbours(h, l, lava_tubes)

        if min(values) > val:
            lowpoints.append(val + 1)

print('Part 1: ', sum(lowpoints))

# def help_basin(h, l, tubes, basins):
#     if h < 0 or l < 0 or h >= height or l >= length or (h,l) in basins:
#         return 10
#     else:
#         return tubes[h][l]
#
# 
# def basin(h, l, val, tubes, basins):
#     help_val = help_basin(h, l, tubes)
#     if val < help_val:
#         return
#
#
# all_basins = []
# for h in range(height):
#     for l in range(length):
#         basins = [(h,l)] # List of tuples
#         lowest_val = -1
#         val = lava_tubes[h][l]
#
#         if val != 9:
#             b = basin(h, l, val, lava_tubes, basins)
#
