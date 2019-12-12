#!/bin/bash

cd ./data/
filenames=$(ls *.json)
full_index=""
for file in ${filenames};do
    filename=$(echo $file | cut -d . -f1)
    full_index+="${filename}\n"
done

echo $full_index > index.txt
