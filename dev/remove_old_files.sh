#!/bin/bash
# Remove any files that are still in s3
# but not in the dist directory

set -ev

if [[ $BRANCH -eq "master" ]]; then
    BUCKET=$PROD_BUCKET
elif [[ $BRANCH -eq "develop" ]]; then
    BUCKET=$DEV_BUCKET
else
    exit 1
fi

if [[ -z $BUCKET ]]; then
    exit
fi

for f in `aws s3 ls --recursive $BUCKET | awk '{print $4}'`; do
    if [[ ! -f dist/$f ]]; then
        aws s3 rm s3://$BUCKET/$f
    fi
done
