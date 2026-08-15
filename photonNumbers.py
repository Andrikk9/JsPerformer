import pandas as pd

# Series = A Pandas 1-Dimensional labled array that can hold any data type
#          Think of it like a single column in a spreadsheet (1-Dimensional)

# data = [100, 102, 104, 200, 202]

# Series = pd.Series(data, index=["a", "b", "c", "d", "e"]) # labeling each collumn by its index

# Series.loc["a"]= 200 calling the element by its label
#
# print(series.iloc[2]) calling the element by its index

# print(Series) - basic call print
# print(Series[Series >= 200]) # where the [Series >= 200] is the condition to call the values higher or equal 200

# FX calories count:

# calories = {"Day 1": 1750, "Day 2": 2100, "Day 3": 1700}

# series = pd.Series(calories)

# print(series[series >= 2000])

data = { "Name": ["SpongeBob", "Patrik", "Squidward"], 
         "Age": [30, 35, 50]
}

df = pd.DataFrame(data, index=["Employee 1", "Employee 2", "Employee 3"])

# add a new column
df["Job"] = ["Cook","N/A", "Carhier"]
# add a new row
new_row = pd.DataFrame([{"Name": "Sandy", "Age": 28, "Job": "Engineer"},
                        {"Name": "Eugene", "Age": 60, "Job": "Manager"}]
                       , index=["Employee 4", "Employee 5"])
df = pd.concat([df, new_row])


print(df)