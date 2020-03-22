from itertools import islice

def drugs(drug_fr):
	
	drug_eng = []
	with open("drug_names.tsv", "r") as f:
		for line in islice(f, 0, None): 
			l = line.split("\t")
			l[1] = l[1].replace("\n","")
			drug_eng.append(l[1])

	drugs = []
	for i in range(len(drug_eng)):
		med = drug_fr.split(" ")
		for j in range(len(med)):
			if drug_eng[i].upper() in med[j].upper():
				if len(med[j]) > len(drug_eng[i]) + 2:
					pass
				else:
					drugs.append(drug_eng[i])

	return drugs