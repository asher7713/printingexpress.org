#!/bin/bash
# Invalidate anything that's being replaced
# (ie index.html)

set -ev

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
for f in `aws s3 ls --recursive $BUCKET | awk '{print $4}'`; do
    if [[ -f dist/$f ]]; then
        PATHS="$PATHS /$f"
    else
        aws s3 rm s3://$BUCKET/$f
    fi
done

if [[ ! -z $DISTRO ]]; then
    # $PATHS starts with a space
    aws cloudfront create-invalidation --distribution-id $DISTRO --paths$PATHS
fi
