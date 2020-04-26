from itertools import islice

def sideEffect(side_effect):

	with open("side_effects.tsv", "r", encoding="ISO-8859-3") as f:
		for line in islice(f, 0, None): 
			l = line.split("\t")
			l[1] = l[1].replace('\n', '')
			if side_effect == l[1]:
				side_effect = l[0]

	return side_effect