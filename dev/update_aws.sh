#!/bin/bash
# Delete old files from AWS
# and send invalidations to CF

set -ev

## SKIP INVALIDATION ON THESE FILES
# If one of these files is changed, this list will need to be updated.
# This provides a way to make less total invalidations
# We can't compare modification times, since everything is rebuilt on
# each build. We can't compare sizes safely because, for instance,
# index.html will be the same size.
SKIP_LIST=("favicon.ico", "assets/*")

if [[ $BRANCH -eq "master" ]]; then
    BUCKET=$PROD_BUCKET
    DISTRO=$PROD_CF_DISTRO
elif [[ $BRANCH -eq "develop" ]]; then
    BUCKET=$DEV_BUCKET
    DISTRO=$DEV_CF_DISTRO
else
    exit 1
fi

if [[ -z $BUCKET ]]; then
    exit
fi

PATHS=""
for file in `aws s3 ls --recursive $BUCKET | awk '{print $4}'`; do
    if [[ -f dist/$file ]]; then
        for skip in $SKIP_LIST; do
            if [[ $file =~ $skip ]]; then
                continue;
            fi
        done
        PATHS="$PATHS /$file"
    else
        aws s3 rm s3://$BUCKET/$file
    fi
done

if [[ ! -z $DISTRO ]]; then
    aws configure set preview.cloudfront true
    # $PATHS starts with a space
    aws cloudfront create-invalidation --distribution-id $DISTRO --paths$PATHS
fi
