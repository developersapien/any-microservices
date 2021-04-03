
#!/bin/bash

set -e

echo "Job started: $(date)"

DATE=$(date +%Y%m%d_%H%M%S)
FILE="/data/mongodump/backup-$DATE.tar.gz"

mkdir -p dump
mongodump -h mongodb://authentication-mongo-srv -p 27017
tar -zcvf $FILE dump/
rm -rf dump/

echo "Job finished: $(date)"