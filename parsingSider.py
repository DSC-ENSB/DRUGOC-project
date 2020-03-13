from pandas import DataFrame 
from datamatrix import io

path = r"C:\Users\lenovo\Desktop\meddra_all_se.tsv"

#df = DataFrame.from_csv(path, sep='\t')

tsvf = io.readtxt(path, delimiter='\t')